# Redlock Action

[![GitHub release](https://img.shields.io/github/release/motoki317/redlock-action.svg)](https://github.com/motoki317/redlock-action/releases/)

This action achieves
[Redlock](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/)
using redis instances available from the actions runner instance.

This action is mainly intended to be used by self-hosted runner users, since
this is dependent on an external Redis instance.

## Why?

There is a built-in concurrency controlling syntax in GitHub Actions:

```yaml
concurrency:
  group: my-group
  cancel-in-progress: false
```

While this syntax allows at most one action to be executed at one time (mutex -
mutually exclusive),

> Use concurrency to ensure that only a single job or workflow using the same
> concurrency group will run at a time
> https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#concurrency

It does not allow creating a workflow queue. If more than one workflow is queued
into a group and becomes pending, the former workflow will be dropped from the
queue.

> This means that there can be at most one running and one pending job in a
> concurrency group at any time.

Therefore, this `concurrency` syntax can only be used if the workflow is safe to be 'superseded' by
a newer pending workflow, or the workflow is *idempotent*.

This action is intended to create a simple workflow mutex and 'queue', allowing
workflows to wait before entering a critical section.

### Limitation

- While you can create a workflow 'queue' using this action, the order of lock
  acquisition is not guaranteed (i.e. it is _NOT_ FIFO nor LIFO).
  - This is because the current implementation is a simple spin lock.

## Fault Tolerance

The lock acquisition and holding is "fault-tolerant", as in, it is unlocked
correctly and early in case the workflow holding the lock is terminated abruptly
without unlocking (this is different from 'cancelling' or 'failing' a
workflow!).

Normally, this action automatically releases the lock using 'post run' feature
of GitHub Actions. However, in case the workflow process terminates abruptly
(for example, node failure), this post run step may not be run.

The action internally acquires a 10-second lock and extends the lock every 1
second in a background 'heartbeat' process (these heartbeat intervals are
hard-coded as of now). This heartbeat process is stopped as soon as the lock is
released, or after the specified time has passed. If the workflow as well as the
heartbeat process is terminated abruptly, the lock will be released correctly
and early, thanks to the short 10-second expiration time.

## Usage

```yaml
uses: motoki317/redlock-action@main
with:
  # Action to perform.
  # auto - Locks on this action and unlocks on post-run.
  # lock - Only performs lock. (manual unlock needed!)
  # unlock - Only performs unlock.
  # Default: auto
  action: ''

  # Redis hosts, separated by comma.
  hosts: 'localhost:6379'
  # Name of the lock.
  name: ''
  # Maximum lock "concurrency".
  # If greater than 1, multiple clients are allowed to acquire the resource at the same time
  # up to the specified concurrency, achieving semaphore-like behavior.
  concurrency: 1

  # Number of seconds to acquire the resource for.
  # After the duration has passed without unlocking, the resource will be automatically unlocked.
  # Default: 60
  duration-seconds: 60

  # The max number of times this action will attempt to lock a resource before giving up.
  # Default: 60
  retry-count: 60
  # The time in milliseconds between attempts.
  # Default: 1000
  retry-delay-ms: 1000
  # The max time in milliseconds randomly added to retries to improve performance under high contention.
  # Default: 200
  retry-jitter-ms: 200

  # Random lock value - only needed for manual "unlock" action.
  value: ''
  # Heartbeat pid value - only needed for manual "unlock" action.
  heartbeat-pid: ''
```

## Examples

### Auto lock and unlock

```yaml
steps:
  - uses: motoki317/redlock-action@main
    with:
      name: my-lock
      hosts: my-redis:6379
      duration-seconds: 60
  # Do something that requires mutex lock...
  - uses: some-action
  # redlock-action automatically unlocks on 'post' step.
```

### Manual lock and unlock

You can manually lock and unlock by specifying `action` input.

```yaml
steps:
  - uses: motoki317/redlock-action@main
    id: my-lock
    with:
      action: lock
      name: my-lock
      hosts: my-redis:6379
      duration-seconds: 60

  # Do something that requires mutex lock...
  - uses: some-action

  - uses: motoki317/redlock-action@main
    with:
      action: unlock
      name: ${{ steps.my-lock.outputs.name }}
      hosts: my-redis:6379
      value: ${{ steps.my-lock.outputs.value }}
      heartbeat-pid: ${{ steps.my-lock.outputs.heartbeat-pid }}
```
