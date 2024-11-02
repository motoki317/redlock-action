# Redlock Action

This action achieves
[Redlock](https://redis.io/docs/latest/develop/use/patterns/distributed-locks/)
using redis instances available from the actions runner instance.

This action is mainly intended to be used by self-hosted runner users, since
this is dependent on an external Redis instance.

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
```
