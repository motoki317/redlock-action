require('./sourcemap-register.js');/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 4914:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.issue = exports.issueCommand = void 0;
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
/**
 * Commands
 *
 * Command Format:
 *   ::name key=value,key=value::message
 *
 * Examples:
 *   ::warning::This is the message
 *   ::set-env name=MY_VAR::some value
 */
function issueCommand(command, properties, message) {
    const cmd = new Command(command, properties, message);
    process.stdout.write(cmd.toString() + os.EOL);
}
exports.issueCommand = issueCommand;
function issue(name, message = '') {
    issueCommand(name, {}, message);
}
exports.issue = issue;
const CMD_STRING = '::';
class Command {
    constructor(command, properties, message) {
        if (!command) {
            command = 'missing.command';
        }
        this.command = command;
        this.properties = properties;
        this.message = message;
    }
    toString() {
        let cmdStr = CMD_STRING + this.command;
        if (this.properties && Object.keys(this.properties).length > 0) {
            cmdStr += ' ';
            let first = true;
            for (const key in this.properties) {
                if (this.properties.hasOwnProperty(key)) {
                    const val = this.properties[key];
                    if (val) {
                        if (first) {
                            first = false;
                        }
                        else {
                            cmdStr += ',';
                        }
                        cmdStr += `${key}=${escapeProperty(val)}`;
                    }
                }
            }
        }
        cmdStr += `${CMD_STRING}${escapeData(this.message)}`;
        return cmdStr;
    }
}
function escapeData(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A');
}
function escapeProperty(s) {
    return (0, utils_1.toCommandValue)(s)
        .replace(/%/g, '%25')
        .replace(/\r/g, '%0D')
        .replace(/\n/g, '%0A')
        .replace(/:/g, '%3A')
        .replace(/,/g, '%2C');
}
//# sourceMappingURL=command.js.map

/***/ }),

/***/ 7484:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.platform = exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = exports.markdownSummary = exports.summary = exports.getIDToken = exports.getState = exports.saveState = exports.group = exports.endGroup = exports.startGroup = exports.info = exports.notice = exports.warning = exports.error = exports.debug = exports.isDebug = exports.setFailed = exports.setCommandEcho = exports.setOutput = exports.getBooleanInput = exports.getMultilineInput = exports.getInput = exports.addPath = exports.setSecret = exports.exportVariable = exports.ExitCode = void 0;
const command_1 = __nccwpck_require__(4914);
const file_command_1 = __nccwpck_require__(4753);
const utils_1 = __nccwpck_require__(302);
const os = __importStar(__nccwpck_require__(857));
const path = __importStar(__nccwpck_require__(6928));
const oidc_utils_1 = __nccwpck_require__(5306);
/**
 * The code to exit an action
 */
var ExitCode;
(function (ExitCode) {
    /**
     * A code indicating that the action was successful
     */
    ExitCode[ExitCode["Success"] = 0] = "Success";
    /**
     * A code indicating that the action was a failure
     */
    ExitCode[ExitCode["Failure"] = 1] = "Failure";
})(ExitCode || (exports.ExitCode = ExitCode = {}));
//-----------------------------------------------------------------------
// Variables
//-----------------------------------------------------------------------
/**
 * Sets env variable for this action and future actions in the job
 * @param name the name of the variable to set
 * @param val the value of the variable. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function exportVariable(name, val) {
    const convertedVal = (0, utils_1.toCommandValue)(val);
    process.env[name] = convertedVal;
    const filePath = process.env['GITHUB_ENV'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('ENV', (0, file_command_1.prepareKeyValueMessage)(name, val));
    }
    (0, command_1.issueCommand)('set-env', { name }, convertedVal);
}
exports.exportVariable = exportVariable;
/**
 * Registers a secret which will get masked from logs
 * @param secret value of the secret
 */
function setSecret(secret) {
    (0, command_1.issueCommand)('add-mask', {}, secret);
}
exports.setSecret = setSecret;
/**
 * Prepends inputPath to the PATH (for this action and future actions)
 * @param inputPath
 */
function addPath(inputPath) {
    const filePath = process.env['GITHUB_PATH'] || '';
    if (filePath) {
        (0, file_command_1.issueFileCommand)('PATH', inputPath);
    }
    else {
        (0, command_1.issueCommand)('add-path', {}, inputPath);
    }
    process.env['PATH'] = `${inputPath}${path.delimiter}${process.env['PATH']}`;
}
exports.addPath = addPath;
/**
 * Gets the value of an input.
 * Unless trimWhitespace is set to false in InputOptions, the value is also trimmed.
 * Returns an empty string if the value is not defined.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string
 */
function getInput(name, options) {
    const val = process.env[`INPUT_${name.replace(/ /g, '_').toUpperCase()}`] || '';
    if (options && options.required && !val) {
        throw new Error(`Input required and not supplied: ${name}`);
    }
    if (options && options.trimWhitespace === false) {
        return val;
    }
    return val.trim();
}
exports.getInput = getInput;
/**
 * Gets the values of an multiline input.  Each value is also trimmed.
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   string[]
 *
 */
function getMultilineInput(name, options) {
    const inputs = getInput(name, options)
        .split('\n')
        .filter(x => x !== '');
    if (options && options.trimWhitespace === false) {
        return inputs;
    }
    return inputs.map(input => input.trim());
}
exports.getMultilineInput = getMultilineInput;
/**
 * Gets the input value of the boolean type in the YAML 1.2 "core schema" specification.
 * Support boolean input list: `true | True | TRUE | false | False | FALSE` .
 * The return value is also in boolean type.
 * ref: https://yaml.org/spec/1.2/spec.html#id2804923
 *
 * @param     name     name of the input to get
 * @param     options  optional. See InputOptions.
 * @returns   boolean
 */
function getBooleanInput(name, options) {
    const trueValue = ['true', 'True', 'TRUE'];
    const falseValue = ['false', 'False', 'FALSE'];
    const val = getInput(name, options);
    if (trueValue.includes(val))
        return true;
    if (falseValue.includes(val))
        return false;
    throw new TypeError(`Input does not meet YAML 1.2 "Core Schema" specification: ${name}\n` +
        `Support boolean input list: \`true | True | TRUE | false | False | FALSE\``);
}
exports.getBooleanInput = getBooleanInput;
/**
 * Sets the value of an output.
 *
 * @param     name     name of the output to set
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setOutput(name, value) {
    const filePath = process.env['GITHUB_OUTPUT'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('OUTPUT', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    process.stdout.write(os.EOL);
    (0, command_1.issueCommand)('set-output', { name }, (0, utils_1.toCommandValue)(value));
}
exports.setOutput = setOutput;
/**
 * Enables or disables the echoing of commands into stdout for the rest of the step.
 * Echoing is disabled by default if ACTIONS_STEP_DEBUG is not set.
 *
 */
function setCommandEcho(enabled) {
    (0, command_1.issue)('echo', enabled ? 'on' : 'off');
}
exports.setCommandEcho = setCommandEcho;
//-----------------------------------------------------------------------
// Results
//-----------------------------------------------------------------------
/**
 * Sets the action status to failed.
 * When the action exits it will be with an exit code of 1
 * @param message add error issue message
 */
function setFailed(message) {
    process.exitCode = ExitCode.Failure;
    error(message);
}
exports.setFailed = setFailed;
//-----------------------------------------------------------------------
// Logging Commands
//-----------------------------------------------------------------------
/**
 * Gets whether Actions Step Debug is on or not
 */
function isDebug() {
    return process.env['RUNNER_DEBUG'] === '1';
}
exports.isDebug = isDebug;
/**
 * Writes debug message to user log
 * @param message debug message
 */
function debug(message) {
    (0, command_1.issueCommand)('debug', {}, message);
}
exports.debug = debug;
/**
 * Adds an error issue
 * @param message error issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function error(message, properties = {}) {
    (0, command_1.issueCommand)('error', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.error = error;
/**
 * Adds a warning issue
 * @param message warning issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function warning(message, properties = {}) {
    (0, command_1.issueCommand)('warning', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.warning = warning;
/**
 * Adds a notice issue
 * @param message notice issue message. Errors will be converted to string via toString()
 * @param properties optional properties to add to the annotation.
 */
function notice(message, properties = {}) {
    (0, command_1.issueCommand)('notice', (0, utils_1.toCommandProperties)(properties), message instanceof Error ? message.toString() : message);
}
exports.notice = notice;
/**
 * Writes info to log with console.log.
 * @param message info message
 */
function info(message) {
    process.stdout.write(message + os.EOL);
}
exports.info = info;
/**
 * Begin an output group.
 *
 * Output until the next `groupEnd` will be foldable in this group
 *
 * @param name The name of the output group
 */
function startGroup(name) {
    (0, command_1.issue)('group', name);
}
exports.startGroup = startGroup;
/**
 * End an output group.
 */
function endGroup() {
    (0, command_1.issue)('endgroup');
}
exports.endGroup = endGroup;
/**
 * Wrap an asynchronous function call in a group.
 *
 * Returns the same type as the function itself.
 *
 * @param name The name of the group
 * @param fn The function to wrap in the group
 */
function group(name, fn) {
    return __awaiter(this, void 0, void 0, function* () {
        startGroup(name);
        let result;
        try {
            result = yield fn();
        }
        finally {
            endGroup();
        }
        return result;
    });
}
exports.group = group;
//-----------------------------------------------------------------------
// Wrapper action state
//-----------------------------------------------------------------------
/**
 * Saves state for current action, the state can only be retrieved by this action's post job execution.
 *
 * @param     name     name of the state to store
 * @param     value    value to store. Non-string values will be converted to a string via JSON.stringify
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function saveState(name, value) {
    const filePath = process.env['GITHUB_STATE'] || '';
    if (filePath) {
        return (0, file_command_1.issueFileCommand)('STATE', (0, file_command_1.prepareKeyValueMessage)(name, value));
    }
    (0, command_1.issueCommand)('save-state', { name }, (0, utils_1.toCommandValue)(value));
}
exports.saveState = saveState;
/**
 * Gets the value of an state set by this action's main execution.
 *
 * @param     name     name of the state to get
 * @returns   string
 */
function getState(name) {
    return process.env[`STATE_${name}`] || '';
}
exports.getState = getState;
function getIDToken(aud) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield oidc_utils_1.OidcClient.getIDToken(aud);
    });
}
exports.getIDToken = getIDToken;
/**
 * Summary exports
 */
var summary_1 = __nccwpck_require__(1847);
Object.defineProperty(exports, "summary", ({ enumerable: true, get: function () { return summary_1.summary; } }));
/**
 * @deprecated use core.summary
 */
var summary_2 = __nccwpck_require__(1847);
Object.defineProperty(exports, "markdownSummary", ({ enumerable: true, get: function () { return summary_2.markdownSummary; } }));
/**
 * Path exports
 */
var path_utils_1 = __nccwpck_require__(1976);
Object.defineProperty(exports, "toPosixPath", ({ enumerable: true, get: function () { return path_utils_1.toPosixPath; } }));
Object.defineProperty(exports, "toWin32Path", ({ enumerable: true, get: function () { return path_utils_1.toWin32Path; } }));
Object.defineProperty(exports, "toPlatformPath", ({ enumerable: true, get: function () { return path_utils_1.toPlatformPath; } }));
/**
 * Platform utilities exports
 */
exports.platform = __importStar(__nccwpck_require__(8968));
//# sourceMappingURL=core.js.map

/***/ }),

/***/ 4753:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

// For internal use, subject to change.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.prepareKeyValueMessage = exports.issueFileCommand = void 0;
// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
const crypto = __importStar(__nccwpck_require__(6982));
const fs = __importStar(__nccwpck_require__(9896));
const os = __importStar(__nccwpck_require__(857));
const utils_1 = __nccwpck_require__(302);
function issueFileCommand(command, message) {
    const filePath = process.env[`GITHUB_${command}`];
    if (!filePath) {
        throw new Error(`Unable to find environment variable for file command ${command}`);
    }
    if (!fs.existsSync(filePath)) {
        throw new Error(`Missing file at path: ${filePath}`);
    }
    fs.appendFileSync(filePath, `${(0, utils_1.toCommandValue)(message)}${os.EOL}`, {
        encoding: 'utf8'
    });
}
exports.issueFileCommand = issueFileCommand;
function prepareKeyValueMessage(key, value) {
    const delimiter = `ghadelimiter_${crypto.randomUUID()}`;
    const convertedValue = (0, utils_1.toCommandValue)(value);
    // These should realistically never happen, but just in case someone finds a
    // way to exploit uuid generation let's not allow keys or values that contain
    // the delimiter.
    if (key.includes(delimiter)) {
        throw new Error(`Unexpected input: name should not contain the delimiter "${delimiter}"`);
    }
    if (convertedValue.includes(delimiter)) {
        throw new Error(`Unexpected input: value should not contain the delimiter "${delimiter}"`);
    }
    return `${key}<<${delimiter}${os.EOL}${convertedValue}${os.EOL}${delimiter}`;
}
exports.prepareKeyValueMessage = prepareKeyValueMessage;
//# sourceMappingURL=file-command.js.map

/***/ }),

/***/ 5306:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OidcClient = void 0;
const http_client_1 = __nccwpck_require__(4844);
const auth_1 = __nccwpck_require__(4552);
const core_1 = __nccwpck_require__(7484);
class OidcClient {
    static createHttpClient(allowRetry = true, maxRetry = 10) {
        const requestOptions = {
            allowRetries: allowRetry,
            maxRetries: maxRetry
        };
        return new http_client_1.HttpClient('actions/oidc-client', [new auth_1.BearerCredentialHandler(OidcClient.getRequestToken())], requestOptions);
    }
    static getRequestToken() {
        const token = process.env['ACTIONS_ID_TOKEN_REQUEST_TOKEN'];
        if (!token) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_TOKEN env variable');
        }
        return token;
    }
    static getIDTokenUrl() {
        const runtimeUrl = process.env['ACTIONS_ID_TOKEN_REQUEST_URL'];
        if (!runtimeUrl) {
            throw new Error('Unable to get ACTIONS_ID_TOKEN_REQUEST_URL env variable');
        }
        return runtimeUrl;
    }
    static getCall(id_token_url) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const httpclient = OidcClient.createHttpClient();
            const res = yield httpclient
                .getJson(id_token_url)
                .catch(error => {
                throw new Error(`Failed to get ID Token. \n 
        Error Code : ${error.statusCode}\n 
        Error Message: ${error.message}`);
            });
            const id_token = (_a = res.result) === null || _a === void 0 ? void 0 : _a.value;
            if (!id_token) {
                throw new Error('Response json body do not have ID Token field');
            }
            return id_token;
        });
    }
    static getIDToken(audience) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // New ID Token is requested from action service
                let id_token_url = OidcClient.getIDTokenUrl();
                if (audience) {
                    const encodedAudience = encodeURIComponent(audience);
                    id_token_url = `${id_token_url}&audience=${encodedAudience}`;
                }
                (0, core_1.debug)(`ID token url is ${id_token_url}`);
                const id_token = yield OidcClient.getCall(id_token_url);
                (0, core_1.setSecret)(id_token);
                return id_token;
            }
            catch (error) {
                throw new Error(`Error message: ${error.message}`);
            }
        });
    }
}
exports.OidcClient = OidcClient;
//# sourceMappingURL=oidc-utils.js.map

/***/ }),

/***/ 1976:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toPlatformPath = exports.toWin32Path = exports.toPosixPath = void 0;
const path = __importStar(__nccwpck_require__(6928));
/**
 * toPosixPath converts the given path to the posix form. On Windows, \\ will be
 * replaced with /.
 *
 * @param pth. Path to transform.
 * @return string Posix path.
 */
function toPosixPath(pth) {
    return pth.replace(/[\\]/g, '/');
}
exports.toPosixPath = toPosixPath;
/**
 * toWin32Path converts the given path to the win32 form. On Linux, / will be
 * replaced with \\.
 *
 * @param pth. Path to transform.
 * @return string Win32 path.
 */
function toWin32Path(pth) {
    return pth.replace(/[/]/g, '\\');
}
exports.toWin32Path = toWin32Path;
/**
 * toPlatformPath converts the given path to a platform-specific path. It does
 * this by replacing instances of / and \ with the platform-specific path
 * separator.
 *
 * @param pth The path to platformize.
 * @return string The platform-specific path.
 */
function toPlatformPath(pth) {
    return pth.replace(/[/\\]/g, path.sep);
}
exports.toPlatformPath = toPlatformPath;
//# sourceMappingURL=path-utils.js.map

/***/ }),

/***/ 8968:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getDetails = exports.isLinux = exports.isMacOS = exports.isWindows = exports.arch = exports.platform = void 0;
const os_1 = __importDefault(__nccwpck_require__(857));
const exec = __importStar(__nccwpck_require__(5236));
const getWindowsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout: version } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Version"', undefined, {
        silent: true
    });
    const { stdout: name } = yield exec.getExecOutput('powershell -command "(Get-CimInstance -ClassName Win32_OperatingSystem).Caption"', undefined, {
        silent: true
    });
    return {
        name: name.trim(),
        version: version.trim()
    };
});
const getMacOsInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d;
    const { stdout } = yield exec.getExecOutput('sw_vers', undefined, {
        silent: true
    });
    const version = (_b = (_a = stdout.match(/ProductVersion:\s*(.+)/)) === null || _a === void 0 ? void 0 : _a[1]) !== null && _b !== void 0 ? _b : '';
    const name = (_d = (_c = stdout.match(/ProductName:\s*(.+)/)) === null || _c === void 0 ? void 0 : _c[1]) !== null && _d !== void 0 ? _d : '';
    return {
        name,
        version
    };
});
const getLinuxInfo = () => __awaiter(void 0, void 0, void 0, function* () {
    const { stdout } = yield exec.getExecOutput('lsb_release', ['-i', '-r', '-s'], {
        silent: true
    });
    const [name, version] = stdout.trim().split('\n');
    return {
        name,
        version
    };
});
exports.platform = os_1.default.platform();
exports.arch = os_1.default.arch();
exports.isWindows = exports.platform === 'win32';
exports.isMacOS = exports.platform === 'darwin';
exports.isLinux = exports.platform === 'linux';
function getDetails() {
    return __awaiter(this, void 0, void 0, function* () {
        return Object.assign(Object.assign({}, (yield (exports.isWindows
            ? getWindowsInfo()
            : exports.isMacOS
                ? getMacOsInfo()
                : getLinuxInfo()))), { platform: exports.platform,
            arch: exports.arch,
            isWindows: exports.isWindows,
            isMacOS: exports.isMacOS,
            isLinux: exports.isLinux });
    });
}
exports.getDetails = getDetails;
//# sourceMappingURL=platform.js.map

/***/ }),

/***/ 1847:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.summary = exports.markdownSummary = exports.SUMMARY_DOCS_URL = exports.SUMMARY_ENV_VAR = void 0;
const os_1 = __nccwpck_require__(857);
const fs_1 = __nccwpck_require__(9896);
const { access, appendFile, writeFile } = fs_1.promises;
exports.SUMMARY_ENV_VAR = 'GITHUB_STEP_SUMMARY';
exports.SUMMARY_DOCS_URL = 'https://docs.github.com/actions/using-workflows/workflow-commands-for-github-actions#adding-a-job-summary';
class Summary {
    constructor() {
        this._buffer = '';
    }
    /**
     * Finds the summary file path from the environment, rejects if env var is not found or file does not exist
     * Also checks r/w permissions.
     *
     * @returns step summary file path
     */
    filePath() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._filePath) {
                return this._filePath;
            }
            const pathFromEnv = process.env[exports.SUMMARY_ENV_VAR];
            if (!pathFromEnv) {
                throw new Error(`Unable to find environment variable for $${exports.SUMMARY_ENV_VAR}. Check if your runtime environment supports job summaries.`);
            }
            try {
                yield access(pathFromEnv, fs_1.constants.R_OK | fs_1.constants.W_OK);
            }
            catch (_a) {
                throw new Error(`Unable to access summary file: '${pathFromEnv}'. Check if the file has correct read/write permissions.`);
            }
            this._filePath = pathFromEnv;
            return this._filePath;
        });
    }
    /**
     * Wraps content in an HTML tag, adding any HTML attributes
     *
     * @param {string} tag HTML tag to wrap
     * @param {string | null} content content within the tag
     * @param {[attribute: string]: string} attrs key-value list of HTML attributes to add
     *
     * @returns {string} content wrapped in HTML element
     */
    wrap(tag, content, attrs = {}) {
        const htmlAttrs = Object.entries(attrs)
            .map(([key, value]) => ` ${key}="${value}"`)
            .join('');
        if (!content) {
            return `<${tag}${htmlAttrs}>`;
        }
        return `<${tag}${htmlAttrs}>${content}</${tag}>`;
    }
    /**
     * Writes text in the buffer to the summary buffer file and empties buffer. Will append by default.
     *
     * @param {SummaryWriteOptions} [options] (optional) options for write operation
     *
     * @returns {Promise<Summary>} summary instance
     */
    write(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const overwrite = !!(options === null || options === void 0 ? void 0 : options.overwrite);
            const filePath = yield this.filePath();
            const writeFunc = overwrite ? writeFile : appendFile;
            yield writeFunc(filePath, this._buffer, { encoding: 'utf8' });
            return this.emptyBuffer();
        });
    }
    /**
     * Clears the summary buffer and wipes the summary file
     *
     * @returns {Summary} summary instance
     */
    clear() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.emptyBuffer().write({ overwrite: true });
        });
    }
    /**
     * Returns the current summary buffer as a string
     *
     * @returns {string} string of summary buffer
     */
    stringify() {
        return this._buffer;
    }
    /**
     * If the summary buffer is empty
     *
     * @returns {boolen} true if the buffer is empty
     */
    isEmptyBuffer() {
        return this._buffer.length === 0;
    }
    /**
     * Resets the summary buffer without writing to summary file
     *
     * @returns {Summary} summary instance
     */
    emptyBuffer() {
        this._buffer = '';
        return this;
    }
    /**
     * Adds raw text to the summary buffer
     *
     * @param {string} text content to add
     * @param {boolean} [addEOL=false] (optional) append an EOL to the raw text (default: false)
     *
     * @returns {Summary} summary instance
     */
    addRaw(text, addEOL = false) {
        this._buffer += text;
        return addEOL ? this.addEOL() : this;
    }
    /**
     * Adds the operating system-specific end-of-line marker to the buffer
     *
     * @returns {Summary} summary instance
     */
    addEOL() {
        return this.addRaw(os_1.EOL);
    }
    /**
     * Adds an HTML codeblock to the summary buffer
     *
     * @param {string} code content to render within fenced code block
     * @param {string} lang (optional) language to syntax highlight code
     *
     * @returns {Summary} summary instance
     */
    addCodeBlock(code, lang) {
        const attrs = Object.assign({}, (lang && { lang }));
        const element = this.wrap('pre', this.wrap('code', code), attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML list to the summary buffer
     *
     * @param {string[]} items list of items to render
     * @param {boolean} [ordered=false] (optional) if the rendered list should be ordered or not (default: false)
     *
     * @returns {Summary} summary instance
     */
    addList(items, ordered = false) {
        const tag = ordered ? 'ol' : 'ul';
        const listItems = items.map(item => this.wrap('li', item)).join('');
        const element = this.wrap(tag, listItems);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML table to the summary buffer
     *
     * @param {SummaryTableCell[]} rows table rows
     *
     * @returns {Summary} summary instance
     */
    addTable(rows) {
        const tableBody = rows
            .map(row => {
            const cells = row
                .map(cell => {
                if (typeof cell === 'string') {
                    return this.wrap('td', cell);
                }
                const { header, data, colspan, rowspan } = cell;
                const tag = header ? 'th' : 'td';
                const attrs = Object.assign(Object.assign({}, (colspan && { colspan })), (rowspan && { rowspan }));
                return this.wrap(tag, data, attrs);
            })
                .join('');
            return this.wrap('tr', cells);
        })
            .join('');
        const element = this.wrap('table', tableBody);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds a collapsable HTML details element to the summary buffer
     *
     * @param {string} label text for the closed state
     * @param {string} content collapsable content
     *
     * @returns {Summary} summary instance
     */
    addDetails(label, content) {
        const element = this.wrap('details', this.wrap('summary', label) + content);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML image tag to the summary buffer
     *
     * @param {string} src path to the image you to embed
     * @param {string} alt text description of the image
     * @param {SummaryImageOptions} options (optional) addition image attributes
     *
     * @returns {Summary} summary instance
     */
    addImage(src, alt, options) {
        const { width, height } = options || {};
        const attrs = Object.assign(Object.assign({}, (width && { width })), (height && { height }));
        const element = this.wrap('img', null, Object.assign({ src, alt }, attrs));
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML section heading element
     *
     * @param {string} text heading text
     * @param {number | string} [level=1] (optional) the heading level, default: 1
     *
     * @returns {Summary} summary instance
     */
    addHeading(text, level) {
        const tag = `h${level}`;
        const allowedTag = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(tag)
            ? tag
            : 'h1';
        const element = this.wrap(allowedTag, text);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML thematic break (<hr>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addSeparator() {
        const element = this.wrap('hr', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML line break (<br>) to the summary buffer
     *
     * @returns {Summary} summary instance
     */
    addBreak() {
        const element = this.wrap('br', null);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML blockquote to the summary buffer
     *
     * @param {string} text quote text
     * @param {string} cite (optional) citation url
     *
     * @returns {Summary} summary instance
     */
    addQuote(text, cite) {
        const attrs = Object.assign({}, (cite && { cite }));
        const element = this.wrap('blockquote', text, attrs);
        return this.addRaw(element).addEOL();
    }
    /**
     * Adds an HTML anchor tag to the summary buffer
     *
     * @param {string} text link text/content
     * @param {string} href hyperlink
     *
     * @returns {Summary} summary instance
     */
    addLink(text, href) {
        const element = this.wrap('a', text, { href });
        return this.addRaw(element).addEOL();
    }
}
const _summary = new Summary();
/**
 * @deprecated use `core.summary`
 */
exports.markdownSummary = _summary;
exports.summary = _summary;
//# sourceMappingURL=summary.js.map

/***/ }),

/***/ 302:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

// We use any as a valid input type
/* eslint-disable @typescript-eslint/no-explicit-any */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toCommandProperties = exports.toCommandValue = void 0;
/**
 * Sanitizes an input into a string so it can be passed into issueCommand safely
 * @param input input to sanitize into a string
 */
function toCommandValue(input) {
    if (input === null || input === undefined) {
        return '';
    }
    else if (typeof input === 'string' || input instanceof String) {
        return input;
    }
    return JSON.stringify(input);
}
exports.toCommandValue = toCommandValue;
/**
 *
 * @param annotationProperties
 * @returns The command properties to send with the actual annotation command
 * See IssueCommandProperties: https://github.com/actions/runner/blob/main/src/Runner.Worker/ActionCommandManager.cs#L646
 */
function toCommandProperties(annotationProperties) {
    if (!Object.keys(annotationProperties).length) {
        return {};
    }
    return {
        title: annotationProperties.title,
        file: annotationProperties.file,
        line: annotationProperties.startLine,
        endLine: annotationProperties.endLine,
        col: annotationProperties.startColumn,
        endColumn: annotationProperties.endColumn
    };
}
exports.toCommandProperties = toCommandProperties;
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 5236:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getExecOutput = exports.exec = void 0;
const string_decoder_1 = __nccwpck_require__(3193);
const tr = __importStar(__nccwpck_require__(6665));
/**
 * Exec a command.
 * Output will be streamed to the live console.
 * Returns promise with return code
 *
 * @param     commandLine        command to execute (can include additional args). Must be correctly escaped.
 * @param     args               optional arguments for tool. Escaping is handled by the lib.
 * @param     options            optional exec options.  See ExecOptions
 * @returns   Promise<number>    exit code
 */
function exec(commandLine, args, options) {
    return __awaiter(this, void 0, void 0, function* () {
        const commandArgs = tr.argStringToArray(commandLine);
        if (commandArgs.length === 0) {
            throw new Error(`Parameter 'commandLine' cannot be null or empty.`);
        }
        // Path to tool to execute should be first arg
        const toolPath = commandArgs[0];
        args = commandArgs.slice(1).concat(args || []);
        const runner = new tr.ToolRunner(toolPath, args, options);
        return runner.exec();
    });
}
exports.exec = exec;
/**
 * Exec a command and get the output.
 * Output will be streamed to the live console.
 * Returns promise with the exit code and collected stdout and stderr
 *
 * @param     commandLine           command to execute (can include additional args). Must be correctly escaped.
 * @param     args                  optional arguments for tool. Escaping is handled by the lib.
 * @param     options               optional exec options.  See ExecOptions
 * @returns   Promise<ExecOutput>   exit code, stdout, and stderr
 */
function getExecOutput(commandLine, args, options) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        let stdout = '';
        let stderr = '';
        //Using string decoder covers the case where a mult-byte character is split
        const stdoutDecoder = new string_decoder_1.StringDecoder('utf8');
        const stderrDecoder = new string_decoder_1.StringDecoder('utf8');
        const originalStdoutListener = (_a = options === null || options === void 0 ? void 0 : options.listeners) === null || _a === void 0 ? void 0 : _a.stdout;
        const originalStdErrListener = (_b = options === null || options === void 0 ? void 0 : options.listeners) === null || _b === void 0 ? void 0 : _b.stderr;
        const stdErrListener = (data) => {
            stderr += stderrDecoder.write(data);
            if (originalStdErrListener) {
                originalStdErrListener(data);
            }
        };
        const stdOutListener = (data) => {
            stdout += stdoutDecoder.write(data);
            if (originalStdoutListener) {
                originalStdoutListener(data);
            }
        };
        const listeners = Object.assign(Object.assign({}, options === null || options === void 0 ? void 0 : options.listeners), { stdout: stdOutListener, stderr: stdErrListener });
        const exitCode = yield exec(commandLine, args, Object.assign(Object.assign({}, options), { listeners }));
        //flush any remaining characters
        stdout += stdoutDecoder.end();
        stderr += stderrDecoder.end();
        return {
            exitCode,
            stdout,
            stderr
        };
    });
}
exports.getExecOutput = getExecOutput;
//# sourceMappingURL=exec.js.map

/***/ }),

/***/ 6665:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.argStringToArray = exports.ToolRunner = void 0;
const os = __importStar(__nccwpck_require__(857));
const events = __importStar(__nccwpck_require__(4434));
const child = __importStar(__nccwpck_require__(5317));
const path = __importStar(__nccwpck_require__(6928));
const io = __importStar(__nccwpck_require__(4994));
const ioUtil = __importStar(__nccwpck_require__(5207));
const timers_1 = __nccwpck_require__(3557);
/* eslint-disable @typescript-eslint/unbound-method */
const IS_WINDOWS = process.platform === 'win32';
/*
 * Class for running command line tools. Handles quoting and arg parsing in a platform agnostic way.
 */
class ToolRunner extends events.EventEmitter {
    constructor(toolPath, args, options) {
        super();
        if (!toolPath) {
            throw new Error("Parameter 'toolPath' cannot be null or empty.");
        }
        this.toolPath = toolPath;
        this.args = args || [];
        this.options = options || {};
    }
    _debug(message) {
        if (this.options.listeners && this.options.listeners.debug) {
            this.options.listeners.debug(message);
        }
    }
    _getCommandString(options, noPrefix) {
        const toolPath = this._getSpawnFileName();
        const args = this._getSpawnArgs(options);
        let cmd = noPrefix ? '' : '[command]'; // omit prefix when piped to a second tool
        if (IS_WINDOWS) {
            // Windows + cmd file
            if (this._isCmdFile()) {
                cmd += toolPath;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows + verbatim
            else if (options.windowsVerbatimArguments) {
                cmd += `"${toolPath}"`;
                for (const a of args) {
                    cmd += ` ${a}`;
                }
            }
            // Windows (regular)
            else {
                cmd += this._windowsQuoteCmdArg(toolPath);
                for (const a of args) {
                    cmd += ` ${this._windowsQuoteCmdArg(a)}`;
                }
            }
        }
        else {
            // OSX/Linux - this can likely be improved with some form of quoting.
            // creating processes on Unix is fundamentally different than Windows.
            // on Unix, execvp() takes an arg array.
            cmd += toolPath;
            for (const a of args) {
                cmd += ` ${a}`;
            }
        }
        return cmd;
    }
    _processLineBuffer(data, strBuffer, onLine) {
        try {
            let s = strBuffer + data.toString();
            let n = s.indexOf(os.EOL);
            while (n > -1) {
                const line = s.substring(0, n);
                onLine(line);
                // the rest of the string ...
                s = s.substring(n + os.EOL.length);
                n = s.indexOf(os.EOL);
            }
            return s;
        }
        catch (err) {
            // streaming lines to console is best effort.  Don't fail a build.
            this._debug(`error processing line. Failed with error ${err}`);
            return '';
        }
    }
    _getSpawnFileName() {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                return process.env['COMSPEC'] || 'cmd.exe';
            }
        }
        return this.toolPath;
    }
    _getSpawnArgs(options) {
        if (IS_WINDOWS) {
            if (this._isCmdFile()) {
                let argline = `/D /S /C "${this._windowsQuoteCmdArg(this.toolPath)}`;
                for (const a of this.args) {
                    argline += ' ';
                    argline += options.windowsVerbatimArguments
                        ? a
                        : this._windowsQuoteCmdArg(a);
                }
                argline += '"';
                return [argline];
            }
        }
        return this.args;
    }
    _endsWith(str, end) {
        return str.endsWith(end);
    }
    _isCmdFile() {
        const upperToolPath = this.toolPath.toUpperCase();
        return (this._endsWith(upperToolPath, '.CMD') ||
            this._endsWith(upperToolPath, '.BAT'));
    }
    _windowsQuoteCmdArg(arg) {
        // for .exe, apply the normal quoting rules that libuv applies
        if (!this._isCmdFile()) {
            return this._uvQuoteCmdArg(arg);
        }
        // otherwise apply quoting rules specific to the cmd.exe command line parser.
        // the libuv rules are generic and are not designed specifically for cmd.exe
        // command line parser.
        //
        // for a detailed description of the cmd.exe command line parser, refer to
        // http://stackoverflow.com/questions/4094699/how-does-the-windows-command-interpreter-cmd-exe-parse-scripts/7970912#7970912
        // need quotes for empty arg
        if (!arg) {
            return '""';
        }
        // determine whether the arg needs to be quoted
        const cmdSpecialChars = [
            ' ',
            '\t',
            '&',
            '(',
            ')',
            '[',
            ']',
            '{',
            '}',
            '^',
            '=',
            ';',
            '!',
            "'",
            '+',
            ',',
            '`',
            '~',
            '|',
            '<',
            '>',
            '"'
        ];
        let needsQuotes = false;
        for (const char of arg) {
            if (cmdSpecialChars.some(x => x === char)) {
                needsQuotes = true;
                break;
            }
        }
        // short-circuit if quotes not needed
        if (!needsQuotes) {
            return arg;
        }
        // the following quoting rules are very similar to the rules that by libuv applies.
        //
        // 1) wrap the string in quotes
        //
        // 2) double-up quotes - i.e. " => ""
        //
        //    this is different from the libuv quoting rules. libuv replaces " with \", which unfortunately
        //    doesn't work well with a cmd.exe command line.
        //
        //    note, replacing " with "" also works well if the arg is passed to a downstream .NET console app.
        //    for example, the command line:
        //          foo.exe "myarg:""my val"""
        //    is parsed by a .NET console app into an arg array:
        //          [ "myarg:\"my val\"" ]
        //    which is the same end result when applying libuv quoting rules. although the actual
        //    command line from libuv quoting rules would look like:
        //          foo.exe "myarg:\"my val\""
        //
        // 3) double-up slashes that precede a quote,
        //    e.g.  hello \world    => "hello \world"
        //          hello\"world    => "hello\\""world"
        //          hello\\"world   => "hello\\\\""world"
        //          hello world\    => "hello world\\"
        //
        //    technically this is not required for a cmd.exe command line, or the batch argument parser.
        //    the reasons for including this as a .cmd quoting rule are:
        //
        //    a) this is optimized for the scenario where the argument is passed from the .cmd file to an
        //       external program. many programs (e.g. .NET console apps) rely on the slash-doubling rule.
        //
        //    b) it's what we've been doing previously (by deferring to node default behavior) and we
        //       haven't heard any complaints about that aspect.
        //
        // note, a weakness of the quoting rules chosen here, is that % is not escaped. in fact, % cannot be
        // escaped when used on the command line directly - even though within a .cmd file % can be escaped
        // by using %%.
        //
        // the saving grace is, on the command line, %var% is left as-is if var is not defined. this contrasts
        // the line parsing rules within a .cmd file, where if var is not defined it is replaced with nothing.
        //
        // one option that was explored was replacing % with ^% - i.e. %var% => ^%var^%. this hack would
        // often work, since it is unlikely that var^ would exist, and the ^ character is removed when the
        // variable is used. the problem, however, is that ^ is not removed when %* is used to pass the args
        // to an external program.
        //
        // an unexplored potential solution for the % escaping problem, is to create a wrapper .cmd file.
        // % can be escaped within a .cmd file.
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\'; // double the slash
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '"'; // double the quote
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _uvQuoteCmdArg(arg) {
        // Tool runner wraps child_process.spawn() and needs to apply the same quoting as
        // Node in certain cases where the undocumented spawn option windowsVerbatimArguments
        // is used.
        //
        // Since this function is a port of quote_cmd_arg from Node 4.x (technically, lib UV,
        // see https://github.com/nodejs/node/blob/v4.x/deps/uv/src/win/process.c for details),
        // pasting copyright notice from Node within this function:
        //
        //      Copyright Joyent, Inc. and other Node contributors. All rights reserved.
        //
        //      Permission is hereby granted, free of charge, to any person obtaining a copy
        //      of this software and associated documentation files (the "Software"), to
        //      deal in the Software without restriction, including without limitation the
        //      rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
        //      sell copies of the Software, and to permit persons to whom the Software is
        //      furnished to do so, subject to the following conditions:
        //
        //      The above copyright notice and this permission notice shall be included in
        //      all copies or substantial portions of the Software.
        //
        //      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        //      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        //      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        //      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        //      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        //      FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
        //      IN THE SOFTWARE.
        if (!arg) {
            // Need double quotation for empty argument
            return '""';
        }
        if (!arg.includes(' ') && !arg.includes('\t') && !arg.includes('"')) {
            // No quotation needed
            return arg;
        }
        if (!arg.includes('"') && !arg.includes('\\')) {
            // No embedded double quotes or backslashes, so I can just wrap
            // quote marks around the whole thing.
            return `"${arg}"`;
        }
        // Expected input/output:
        //   input : hello"world
        //   output: "hello\"world"
        //   input : hello""world
        //   output: "hello\"\"world"
        //   input : hello\world
        //   output: hello\world
        //   input : hello\\world
        //   output: hello\\world
        //   input : hello\"world
        //   output: "hello\\\"world"
        //   input : hello\\"world
        //   output: "hello\\\\\"world"
        //   input : hello world\
        //   output: "hello world\\" - note the comment in libuv actually reads "hello world\"
        //                             but it appears the comment is wrong, it should be "hello world\\"
        let reverse = '"';
        let quoteHit = true;
        for (let i = arg.length; i > 0; i--) {
            // walk the string in reverse
            reverse += arg[i - 1];
            if (quoteHit && arg[i - 1] === '\\') {
                reverse += '\\';
            }
            else if (arg[i - 1] === '"') {
                quoteHit = true;
                reverse += '\\';
            }
            else {
                quoteHit = false;
            }
        }
        reverse += '"';
        return reverse
            .split('')
            .reverse()
            .join('');
    }
    _cloneExecOptions(options) {
        options = options || {};
        const result = {
            cwd: options.cwd || process.cwd(),
            env: options.env || process.env,
            silent: options.silent || false,
            windowsVerbatimArguments: options.windowsVerbatimArguments || false,
            failOnStdErr: options.failOnStdErr || false,
            ignoreReturnCode: options.ignoreReturnCode || false,
            delay: options.delay || 10000
        };
        result.outStream = options.outStream || process.stdout;
        result.errStream = options.errStream || process.stderr;
        return result;
    }
    _getSpawnOptions(options, toolPath) {
        options = options || {};
        const result = {};
        result.cwd = options.cwd;
        result.env = options.env;
        result['windowsVerbatimArguments'] =
            options.windowsVerbatimArguments || this._isCmdFile();
        if (options.windowsVerbatimArguments) {
            result.argv0 = `"${toolPath}"`;
        }
        return result;
    }
    /**
     * Exec a tool.
     * Output will be streamed to the live console.
     * Returns promise with return code
     *
     * @param     tool     path to tool to exec
     * @param     options  optional exec options.  See ExecOptions
     * @returns   number
     */
    exec() {
        return __awaiter(this, void 0, void 0, function* () {
            // root the tool path if it is unrooted and contains relative pathing
            if (!ioUtil.isRooted(this.toolPath) &&
                (this.toolPath.includes('/') ||
                    (IS_WINDOWS && this.toolPath.includes('\\')))) {
                // prefer options.cwd if it is specified, however options.cwd may also need to be rooted
                this.toolPath = path.resolve(process.cwd(), this.options.cwd || process.cwd(), this.toolPath);
            }
            // if the tool is only a file name, then resolve it from the PATH
            // otherwise verify it exists (add extension on Windows if necessary)
            this.toolPath = yield io.which(this.toolPath, true);
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                this._debug(`exec tool: ${this.toolPath}`);
                this._debug('arguments:');
                for (const arg of this.args) {
                    this._debug(`   ${arg}`);
                }
                const optionsNonNull = this._cloneExecOptions(this.options);
                if (!optionsNonNull.silent && optionsNonNull.outStream) {
                    optionsNonNull.outStream.write(this._getCommandString(optionsNonNull) + os.EOL);
                }
                const state = new ExecState(optionsNonNull, this.toolPath);
                state.on('debug', (message) => {
                    this._debug(message);
                });
                if (this.options.cwd && !(yield ioUtil.exists(this.options.cwd))) {
                    return reject(new Error(`The cwd: ${this.options.cwd} does not exist!`));
                }
                const fileName = this._getSpawnFileName();
                const cp = child.spawn(fileName, this._getSpawnArgs(optionsNonNull), this._getSpawnOptions(this.options, fileName));
                let stdbuffer = '';
                if (cp.stdout) {
                    cp.stdout.on('data', (data) => {
                        if (this.options.listeners && this.options.listeners.stdout) {
                            this.options.listeners.stdout(data);
                        }
                        if (!optionsNonNull.silent && optionsNonNull.outStream) {
                            optionsNonNull.outStream.write(data);
                        }
                        stdbuffer = this._processLineBuffer(data, stdbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.stdline) {
                                this.options.listeners.stdline(line);
                            }
                        });
                    });
                }
                let errbuffer = '';
                if (cp.stderr) {
                    cp.stderr.on('data', (data) => {
                        state.processStderr = true;
                        if (this.options.listeners && this.options.listeners.stderr) {
                            this.options.listeners.stderr(data);
                        }
                        if (!optionsNonNull.silent &&
                            optionsNonNull.errStream &&
                            optionsNonNull.outStream) {
                            const s = optionsNonNull.failOnStdErr
                                ? optionsNonNull.errStream
                                : optionsNonNull.outStream;
                            s.write(data);
                        }
                        errbuffer = this._processLineBuffer(data, errbuffer, (line) => {
                            if (this.options.listeners && this.options.listeners.errline) {
                                this.options.listeners.errline(line);
                            }
                        });
                    });
                }
                cp.on('error', (err) => {
                    state.processError = err.message;
                    state.processExited = true;
                    state.processClosed = true;
                    state.CheckComplete();
                });
                cp.on('exit', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    this._debug(`Exit code ${code} received from tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                cp.on('close', (code) => {
                    state.processExitCode = code;
                    state.processExited = true;
                    state.processClosed = true;
                    this._debug(`STDIO streams have closed for tool '${this.toolPath}'`);
                    state.CheckComplete();
                });
                state.on('done', (error, exitCode) => {
                    if (stdbuffer.length > 0) {
                        this.emit('stdline', stdbuffer);
                    }
                    if (errbuffer.length > 0) {
                        this.emit('errline', errbuffer);
                    }
                    cp.removeAllListeners();
                    if (error) {
                        reject(error);
                    }
                    else {
                        resolve(exitCode);
                    }
                });
                if (this.options.input) {
                    if (!cp.stdin) {
                        throw new Error('child process missing stdin');
                    }
                    cp.stdin.end(this.options.input);
                }
            }));
        });
    }
}
exports.ToolRunner = ToolRunner;
/**
 * Convert an arg string to an array of args. Handles escaping
 *
 * @param    argString   string of arguments
 * @returns  string[]    array of arguments
 */
function argStringToArray(argString) {
    const args = [];
    let inQuotes = false;
    let escaped = false;
    let arg = '';
    function append(c) {
        // we only escape double quotes.
        if (escaped && c !== '"') {
            arg += '\\';
        }
        arg += c;
        escaped = false;
    }
    for (let i = 0; i < argString.length; i++) {
        const c = argString.charAt(i);
        if (c === '"') {
            if (!escaped) {
                inQuotes = !inQuotes;
            }
            else {
                append(c);
            }
            continue;
        }
        if (c === '\\' && escaped) {
            append(c);
            continue;
        }
        if (c === '\\' && inQuotes) {
            escaped = true;
            continue;
        }
        if (c === ' ' && !inQuotes) {
            if (arg.length > 0) {
                args.push(arg);
                arg = '';
            }
            continue;
        }
        append(c);
    }
    if (arg.length > 0) {
        args.push(arg.trim());
    }
    return args;
}
exports.argStringToArray = argStringToArray;
class ExecState extends events.EventEmitter {
    constructor(options, toolPath) {
        super();
        this.processClosed = false; // tracks whether the process has exited and stdio is closed
        this.processError = '';
        this.processExitCode = 0;
        this.processExited = false; // tracks whether the process has exited
        this.processStderr = false; // tracks whether stderr was written to
        this.delay = 10000; // 10 seconds
        this.done = false;
        this.timeout = null;
        if (!toolPath) {
            throw new Error('toolPath must not be empty');
        }
        this.options = options;
        this.toolPath = toolPath;
        if (options.delay) {
            this.delay = options.delay;
        }
    }
    CheckComplete() {
        if (this.done) {
            return;
        }
        if (this.processClosed) {
            this._setResult();
        }
        else if (this.processExited) {
            this.timeout = timers_1.setTimeout(ExecState.HandleTimeout, this.delay, this);
        }
    }
    _debug(message) {
        this.emit('debug', message);
    }
    _setResult() {
        // determine whether there is an error
        let error;
        if (this.processExited) {
            if (this.processError) {
                error = new Error(`There was an error when attempting to execute the process '${this.toolPath}'. This may indicate the process failed to start. Error: ${this.processError}`);
            }
            else if (this.processExitCode !== 0 && !this.options.ignoreReturnCode) {
                error = new Error(`The process '${this.toolPath}' failed with exit code ${this.processExitCode}`);
            }
            else if (this.processStderr && this.options.failOnStdErr) {
                error = new Error(`The process '${this.toolPath}' failed because one or more lines were written to the STDERR stream`);
            }
        }
        // clear the timeout
        if (this.timeout) {
            clearTimeout(this.timeout);
            this.timeout = null;
        }
        this.done = true;
        this.emit('done', error, this.processExitCode);
    }
    static HandleTimeout(state) {
        if (state.done) {
            return;
        }
        if (!state.processClosed && state.processExited) {
            const message = `The STDIO streams did not close within ${state.delay /
                1000} seconds of the exit event from process '${state.toolPath}'. This may indicate a child process inherited the STDIO streams and has not yet exited.`;
            state._debug(message);
        }
        state._setResult();
    }
}
//# sourceMappingURL=toolrunner.js.map

/***/ }),

/***/ 4552:
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PersonalAccessTokenCredentialHandler = exports.BearerCredentialHandler = exports.BasicCredentialHandler = void 0;
class BasicCredentialHandler {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`${this.username}:${this.password}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BasicCredentialHandler = BasicCredentialHandler;
class BearerCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Bearer ${this.token}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.BearerCredentialHandler = BearerCredentialHandler;
class PersonalAccessTokenCredentialHandler {
    constructor(token) {
        this.token = token;
    }
    // currently implements pre-authorization
    // TODO: support preAuth = false where it hooks on 401
    prepareRequest(options) {
        if (!options.headers) {
            throw Error('The request has no headers');
        }
        options.headers['Authorization'] = `Basic ${Buffer.from(`PAT:${this.token}`).toString('base64')}`;
    }
    // This handler cannot handle 401
    canHandleAuthentication() {
        return false;
    }
    handleAuthentication() {
        return __awaiter(this, void 0, void 0, function* () {
            throw new Error('not implemented');
        });
    }
}
exports.PersonalAccessTokenCredentialHandler = PersonalAccessTokenCredentialHandler;
//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 4844:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

/* eslint-disable @typescript-eslint/no-explicit-any */
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = exports.isHttps = exports.HttpClientResponse = exports.HttpClientError = exports.getProxyUrl = exports.MediaTypes = exports.Headers = exports.HttpCodes = void 0;
const http = __importStar(__nccwpck_require__(8611));
const https = __importStar(__nccwpck_require__(5692));
const pm = __importStar(__nccwpck_require__(4988));
const tunnel = __importStar(__nccwpck_require__(770));
var HttpCodes;
(function (HttpCodes) {
    HttpCodes[HttpCodes["OK"] = 200] = "OK";
    HttpCodes[HttpCodes["MultipleChoices"] = 300] = "MultipleChoices";
    HttpCodes[HttpCodes["MovedPermanently"] = 301] = "MovedPermanently";
    HttpCodes[HttpCodes["ResourceMoved"] = 302] = "ResourceMoved";
    HttpCodes[HttpCodes["SeeOther"] = 303] = "SeeOther";
    HttpCodes[HttpCodes["NotModified"] = 304] = "NotModified";
    HttpCodes[HttpCodes["UseProxy"] = 305] = "UseProxy";
    HttpCodes[HttpCodes["SwitchProxy"] = 306] = "SwitchProxy";
    HttpCodes[HttpCodes["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    HttpCodes[HttpCodes["PermanentRedirect"] = 308] = "PermanentRedirect";
    HttpCodes[HttpCodes["BadRequest"] = 400] = "BadRequest";
    HttpCodes[HttpCodes["Unauthorized"] = 401] = "Unauthorized";
    HttpCodes[HttpCodes["PaymentRequired"] = 402] = "PaymentRequired";
    HttpCodes[HttpCodes["Forbidden"] = 403] = "Forbidden";
    HttpCodes[HttpCodes["NotFound"] = 404] = "NotFound";
    HttpCodes[HttpCodes["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    HttpCodes[HttpCodes["NotAcceptable"] = 406] = "NotAcceptable";
    HttpCodes[HttpCodes["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    HttpCodes[HttpCodes["RequestTimeout"] = 408] = "RequestTimeout";
    HttpCodes[HttpCodes["Conflict"] = 409] = "Conflict";
    HttpCodes[HttpCodes["Gone"] = 410] = "Gone";
    HttpCodes[HttpCodes["TooManyRequests"] = 429] = "TooManyRequests";
    HttpCodes[HttpCodes["InternalServerError"] = 500] = "InternalServerError";
    HttpCodes[HttpCodes["NotImplemented"] = 501] = "NotImplemented";
    HttpCodes[HttpCodes["BadGateway"] = 502] = "BadGateway";
    HttpCodes[HttpCodes["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    HttpCodes[HttpCodes["GatewayTimeout"] = 504] = "GatewayTimeout";
})(HttpCodes = exports.HttpCodes || (exports.HttpCodes = {}));
var Headers;
(function (Headers) {
    Headers["Accept"] = "accept";
    Headers["ContentType"] = "content-type";
})(Headers = exports.Headers || (exports.Headers = {}));
var MediaTypes;
(function (MediaTypes) {
    MediaTypes["ApplicationJson"] = "application/json";
})(MediaTypes = exports.MediaTypes || (exports.MediaTypes = {}));
/**
 * Returns the proxy URL, depending upon the supplied url and proxy environment variables.
 * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
 */
function getProxyUrl(serverUrl) {
    const proxyUrl = pm.getProxyUrl(new URL(serverUrl));
    return proxyUrl ? proxyUrl.href : '';
}
exports.getProxyUrl = getProxyUrl;
const HttpRedirectCodes = [
    HttpCodes.MovedPermanently,
    HttpCodes.ResourceMoved,
    HttpCodes.SeeOther,
    HttpCodes.TemporaryRedirect,
    HttpCodes.PermanentRedirect
];
const HttpResponseRetryCodes = [
    HttpCodes.BadGateway,
    HttpCodes.ServiceUnavailable,
    HttpCodes.GatewayTimeout
];
const RetryableHttpVerbs = ['OPTIONS', 'GET', 'DELETE', 'HEAD'];
const ExponentialBackoffCeiling = 10;
const ExponentialBackoffTimeSlice = 5;
class HttpClientError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.name = 'HttpClientError';
        this.statusCode = statusCode;
        Object.setPrototypeOf(this, HttpClientError.prototype);
    }
}
exports.HttpClientError = HttpClientError;
class HttpClientResponse {
    constructor(message) {
        this.message = message;
    }
    readBody() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                let output = Buffer.alloc(0);
                this.message.on('data', (chunk) => {
                    output = Buffer.concat([output, chunk]);
                });
                this.message.on('end', () => {
                    resolve(output.toString());
                });
            }));
        });
    }
    readBodyBuffer() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => __awaiter(this, void 0, void 0, function* () {
                const chunks = [];
                this.message.on('data', (chunk) => {
                    chunks.push(chunk);
                });
                this.message.on('end', () => {
                    resolve(Buffer.concat(chunks));
                });
            }));
        });
    }
}
exports.HttpClientResponse = HttpClientResponse;
function isHttps(requestUrl) {
    const parsedUrl = new URL(requestUrl);
    return parsedUrl.protocol === 'https:';
}
exports.isHttps = isHttps;
class HttpClient {
    constructor(userAgent, handlers, requestOptions) {
        this._ignoreSslError = false;
        this._allowRedirects = true;
        this._allowRedirectDowngrade = false;
        this._maxRedirects = 50;
        this._allowRetries = false;
        this._maxRetries = 1;
        this._keepAlive = false;
        this._disposed = false;
        this.userAgent = userAgent;
        this.handlers = handlers || [];
        this.requestOptions = requestOptions;
        if (requestOptions) {
            if (requestOptions.ignoreSslError != null) {
                this._ignoreSslError = requestOptions.ignoreSslError;
            }
            this._socketTimeout = requestOptions.socketTimeout;
            if (requestOptions.allowRedirects != null) {
                this._allowRedirects = requestOptions.allowRedirects;
            }
            if (requestOptions.allowRedirectDowngrade != null) {
                this._allowRedirectDowngrade = requestOptions.allowRedirectDowngrade;
            }
            if (requestOptions.maxRedirects != null) {
                this._maxRedirects = Math.max(requestOptions.maxRedirects, 0);
            }
            if (requestOptions.keepAlive != null) {
                this._keepAlive = requestOptions.keepAlive;
            }
            if (requestOptions.allowRetries != null) {
                this._allowRetries = requestOptions.allowRetries;
            }
            if (requestOptions.maxRetries != null) {
                this._maxRetries = requestOptions.maxRetries;
            }
        }
    }
    options(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('OPTIONS', requestUrl, null, additionalHeaders || {});
        });
    }
    get(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('GET', requestUrl, null, additionalHeaders || {});
        });
    }
    del(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('DELETE', requestUrl, null, additionalHeaders || {});
        });
    }
    post(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('POST', requestUrl, data, additionalHeaders || {});
        });
    }
    patch(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PATCH', requestUrl, data, additionalHeaders || {});
        });
    }
    put(requestUrl, data, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('PUT', requestUrl, data, additionalHeaders || {});
        });
    }
    head(requestUrl, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request('HEAD', requestUrl, null, additionalHeaders || {});
        });
    }
    sendStream(verb, requestUrl, stream, additionalHeaders) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.request(verb, requestUrl, stream, additionalHeaders);
        });
    }
    /**
     * Gets a typed object from an endpoint
     * Be aware that not found returns a null.  Other errors (4xx, 5xx) reject the promise
     */
    getJson(requestUrl, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            const res = yield this.get(requestUrl, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    postJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.post(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    putJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.put(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    patchJson(requestUrl, obj, additionalHeaders = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = JSON.stringify(obj, null, 2);
            additionalHeaders[Headers.Accept] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.Accept, MediaTypes.ApplicationJson);
            additionalHeaders[Headers.ContentType] = this._getExistingOrDefaultHeader(additionalHeaders, Headers.ContentType, MediaTypes.ApplicationJson);
            const res = yield this.patch(requestUrl, data, additionalHeaders);
            return this._processResponse(res, this.requestOptions);
        });
    }
    /**
     * Makes a raw http request.
     * All other methods such as get, post, patch, and request ultimately call this.
     * Prefer get, del, post and patch
     */
    request(verb, requestUrl, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this._disposed) {
                throw new Error('Client has already been disposed.');
            }
            const parsedUrl = new URL(requestUrl);
            let info = this._prepareRequest(verb, parsedUrl, headers);
            // Only perform retries on reads since writes may not be idempotent.
            const maxTries = this._allowRetries && RetryableHttpVerbs.includes(verb)
                ? this._maxRetries + 1
                : 1;
            let numTries = 0;
            let response;
            do {
                response = yield this.requestRaw(info, data);
                // Check if it's an authentication challenge
                if (response &&
                    response.message &&
                    response.message.statusCode === HttpCodes.Unauthorized) {
                    let authenticationHandler;
                    for (const handler of this.handlers) {
                        if (handler.canHandleAuthentication(response)) {
                            authenticationHandler = handler;
                            break;
                        }
                    }
                    if (authenticationHandler) {
                        return authenticationHandler.handleAuthentication(this, info, data);
                    }
                    else {
                        // We have received an unauthorized response but have no handlers to handle it.
                        // Let the response return to the caller.
                        return response;
                    }
                }
                let redirectsRemaining = this._maxRedirects;
                while (response.message.statusCode &&
                    HttpRedirectCodes.includes(response.message.statusCode) &&
                    this._allowRedirects &&
                    redirectsRemaining > 0) {
                    const redirectUrl = response.message.headers['location'];
                    if (!redirectUrl) {
                        // if there's no location to redirect to, we won't
                        break;
                    }
                    const parsedRedirectUrl = new URL(redirectUrl);
                    if (parsedUrl.protocol === 'https:' &&
                        parsedUrl.protocol !== parsedRedirectUrl.protocol &&
                        !this._allowRedirectDowngrade) {
                        throw new Error('Redirect from HTTPS to HTTP protocol. This downgrade is not allowed for security reasons. If you want to allow this behavior, set the allowRedirectDowngrade option to true.');
                    }
                    // we need to finish reading the response before reassigning response
                    // which will leak the open socket.
                    yield response.readBody();
                    // strip authorization header if redirected to a different hostname
                    if (parsedRedirectUrl.hostname !== parsedUrl.hostname) {
                        for (const header in headers) {
                            // header names are case insensitive
                            if (header.toLowerCase() === 'authorization') {
                                delete headers[header];
                            }
                        }
                    }
                    // let's make the request with the new redirectUrl
                    info = this._prepareRequest(verb, parsedRedirectUrl, headers);
                    response = yield this.requestRaw(info, data);
                    redirectsRemaining--;
                }
                if (!response.message.statusCode ||
                    !HttpResponseRetryCodes.includes(response.message.statusCode)) {
                    // If not a retry code, return immediately instead of retrying
                    return response;
                }
                numTries += 1;
                if (numTries < maxTries) {
                    yield response.readBody();
                    yield this._performExponentialBackoff(numTries);
                }
            } while (numTries < maxTries);
            return response;
        });
    }
    /**
     * Needs to be called if keepAlive is set to true in request options.
     */
    dispose() {
        if (this._agent) {
            this._agent.destroy();
        }
        this._disposed = true;
    }
    /**
     * Raw request.
     * @param info
     * @param data
     */
    requestRaw(info, data) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                function callbackForResult(err, res) {
                    if (err) {
                        reject(err);
                    }
                    else if (!res) {
                        // If `err` is not passed, then `res` must be passed.
                        reject(new Error('Unknown error'));
                    }
                    else {
                        resolve(res);
                    }
                }
                this.requestRawWithCallback(info, data, callbackForResult);
            });
        });
    }
    /**
     * Raw request with callback.
     * @param info
     * @param data
     * @param onResult
     */
    requestRawWithCallback(info, data, onResult) {
        if (typeof data === 'string') {
            if (!info.options.headers) {
                info.options.headers = {};
            }
            info.options.headers['Content-Length'] = Buffer.byteLength(data, 'utf8');
        }
        let callbackCalled = false;
        function handleResult(err, res) {
            if (!callbackCalled) {
                callbackCalled = true;
                onResult(err, res);
            }
        }
        const req = info.httpModule.request(info.options, (msg) => {
            const res = new HttpClientResponse(msg);
            handleResult(undefined, res);
        });
        let socket;
        req.on('socket', sock => {
            socket = sock;
        });
        // If we ever get disconnected, we want the socket to timeout eventually
        req.setTimeout(this._socketTimeout || 3 * 60000, () => {
            if (socket) {
                socket.end();
            }
            handleResult(new Error(`Request timeout: ${info.options.path}`));
        });
        req.on('error', function (err) {
            // err has statusCode property
            // res should have headers
            handleResult(err);
        });
        if (data && typeof data === 'string') {
            req.write(data, 'utf8');
        }
        if (data && typeof data !== 'string') {
            data.on('close', function () {
                req.end();
            });
            data.pipe(req);
        }
        else {
            req.end();
        }
    }
    /**
     * Gets an http agent. This function is useful when you need an http agent that handles
     * routing through a proxy server - depending upon the url and proxy environment variables.
     * @param serverUrl  The server URL where the request will be sent. For example, https://api.github.com
     */
    getAgent(serverUrl) {
        const parsedUrl = new URL(serverUrl);
        return this._getAgent(parsedUrl);
    }
    _prepareRequest(method, requestUrl, headers) {
        const info = {};
        info.parsedUrl = requestUrl;
        const usingSsl = info.parsedUrl.protocol === 'https:';
        info.httpModule = usingSsl ? https : http;
        const defaultPort = usingSsl ? 443 : 80;
        info.options = {};
        info.options.host = info.parsedUrl.hostname;
        info.options.port = info.parsedUrl.port
            ? parseInt(info.parsedUrl.port)
            : defaultPort;
        info.options.path =
            (info.parsedUrl.pathname || '') + (info.parsedUrl.search || '');
        info.options.method = method;
        info.options.headers = this._mergeHeaders(headers);
        if (this.userAgent != null) {
            info.options.headers['user-agent'] = this.userAgent;
        }
        info.options.agent = this._getAgent(info.parsedUrl);
        // gives handlers an opportunity to participate
        if (this.handlers) {
            for (const handler of this.handlers) {
                handler.prepareRequest(info.options);
            }
        }
        return info;
    }
    _mergeHeaders(headers) {
        if (this.requestOptions && this.requestOptions.headers) {
            return Object.assign({}, lowercaseKeys(this.requestOptions.headers), lowercaseKeys(headers || {}));
        }
        return lowercaseKeys(headers || {});
    }
    _getExistingOrDefaultHeader(additionalHeaders, header, _default) {
        let clientHeader;
        if (this.requestOptions && this.requestOptions.headers) {
            clientHeader = lowercaseKeys(this.requestOptions.headers)[header];
        }
        return additionalHeaders[header] || clientHeader || _default;
    }
    _getAgent(parsedUrl) {
        let agent;
        const proxyUrl = pm.getProxyUrl(parsedUrl);
        const useProxy = proxyUrl && proxyUrl.hostname;
        if (this._keepAlive && useProxy) {
            agent = this._proxyAgent;
        }
        if (this._keepAlive && !useProxy) {
            agent = this._agent;
        }
        // if agent is already assigned use that agent.
        if (agent) {
            return agent;
        }
        const usingSsl = parsedUrl.protocol === 'https:';
        let maxSockets = 100;
        if (this.requestOptions) {
            maxSockets = this.requestOptions.maxSockets || http.globalAgent.maxSockets;
        }
        // This is `useProxy` again, but we need to check `proxyURl` directly for TypeScripts's flow analysis.
        if (proxyUrl && proxyUrl.hostname) {
            const agentOptions = {
                maxSockets,
                keepAlive: this._keepAlive,
                proxy: Object.assign(Object.assign({}, ((proxyUrl.username || proxyUrl.password) && {
                    proxyAuth: `${proxyUrl.username}:${proxyUrl.password}`
                })), { host: proxyUrl.hostname, port: proxyUrl.port })
            };
            let tunnelAgent;
            const overHttps = proxyUrl.protocol === 'https:';
            if (usingSsl) {
                tunnelAgent = overHttps ? tunnel.httpsOverHttps : tunnel.httpsOverHttp;
            }
            else {
                tunnelAgent = overHttps ? tunnel.httpOverHttps : tunnel.httpOverHttp;
            }
            agent = tunnelAgent(agentOptions);
            this._proxyAgent = agent;
        }
        // if reusing agent across request and tunneling agent isn't assigned create a new agent
        if (this._keepAlive && !agent) {
            const options = { keepAlive: this._keepAlive, maxSockets };
            agent = usingSsl ? new https.Agent(options) : new http.Agent(options);
            this._agent = agent;
        }
        // if not using private agent and tunnel agent isn't setup then use global agent
        if (!agent) {
            agent = usingSsl ? https.globalAgent : http.globalAgent;
        }
        if (usingSsl && this._ignoreSslError) {
            // we don't want to set NODE_TLS_REJECT_UNAUTHORIZED=0 since that will affect request for entire process
            // http.RequestOptions doesn't expose a way to modify RequestOptions.agent.options
            // we have to cast it to any and change it directly
            agent.options = Object.assign(agent.options || {}, {
                rejectUnauthorized: false
            });
        }
        return agent;
    }
    _performExponentialBackoff(retryNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            retryNumber = Math.min(ExponentialBackoffCeiling, retryNumber);
            const ms = ExponentialBackoffTimeSlice * Math.pow(2, retryNumber);
            return new Promise(resolve => setTimeout(() => resolve(), ms));
        });
    }
    _processResponse(res, options) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                const statusCode = res.message.statusCode || 0;
                const response = {
                    statusCode,
                    result: null,
                    headers: {}
                };
                // not found leads to null obj returned
                if (statusCode === HttpCodes.NotFound) {
                    resolve(response);
                }
                // get the result from the body
                function dateTimeDeserializer(key, value) {
                    if (typeof value === 'string') {
                        const a = new Date(value);
                        if (!isNaN(a.valueOf())) {
                            return a;
                        }
                    }
                    return value;
                }
                let obj;
                let contents;
                try {
                    contents = yield res.readBody();
                    if (contents && contents.length > 0) {
                        if (options && options.deserializeDates) {
                            obj = JSON.parse(contents, dateTimeDeserializer);
                        }
                        else {
                            obj = JSON.parse(contents);
                        }
                        response.result = obj;
                    }
                    response.headers = res.message.headers;
                }
                catch (err) {
                    // Invalid resource (contents not json);  leaving result obj null
                }
                // note that 3xx redirects are handled by the http layer.
                if (statusCode > 299) {
                    let msg;
                    // if exception/error in body, attempt to get better error
                    if (obj && obj.message) {
                        msg = obj.message;
                    }
                    else if (contents && contents.length > 0) {
                        // it may be the case that the exception is in the body message as string
                        msg = contents;
                    }
                    else {
                        msg = `Failed request: (${statusCode})`;
                    }
                    const err = new HttpClientError(msg, statusCode);
                    err.result = response.result;
                    reject(err);
                }
                else {
                    resolve(response);
                }
            }));
        });
    }
}
exports.HttpClient = HttpClient;
const lowercaseKeys = (obj) => Object.keys(obj).reduce((c, k) => ((c[k.toLowerCase()] = obj[k]), c), {});
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 4988:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.checkBypass = exports.getProxyUrl = void 0;
function getProxyUrl(reqUrl) {
    const usingSsl = reqUrl.protocol === 'https:';
    if (checkBypass(reqUrl)) {
        return undefined;
    }
    const proxyVar = (() => {
        if (usingSsl) {
            return process.env['https_proxy'] || process.env['HTTPS_PROXY'];
        }
        else {
            return process.env['http_proxy'] || process.env['HTTP_PROXY'];
        }
    })();
    if (proxyVar) {
        try {
            return new URL(proxyVar);
        }
        catch (_a) {
            if (!proxyVar.startsWith('http://') && !proxyVar.startsWith('https://'))
                return new URL(`http://${proxyVar}`);
        }
    }
    else {
        return undefined;
    }
}
exports.getProxyUrl = getProxyUrl;
function checkBypass(reqUrl) {
    if (!reqUrl.hostname) {
        return false;
    }
    const reqHost = reqUrl.hostname;
    if (isLoopbackAddress(reqHost)) {
        return true;
    }
    const noProxy = process.env['no_proxy'] || process.env['NO_PROXY'] || '';
    if (!noProxy) {
        return false;
    }
    // Determine the request port
    let reqPort;
    if (reqUrl.port) {
        reqPort = Number(reqUrl.port);
    }
    else if (reqUrl.protocol === 'http:') {
        reqPort = 80;
    }
    else if (reqUrl.protocol === 'https:') {
        reqPort = 443;
    }
    // Format the request hostname and hostname with port
    const upperReqHosts = [reqUrl.hostname.toUpperCase()];
    if (typeof reqPort === 'number') {
        upperReqHosts.push(`${upperReqHosts[0]}:${reqPort}`);
    }
    // Compare request host against noproxy
    for (const upperNoProxyItem of noProxy
        .split(',')
        .map(x => x.trim().toUpperCase())
        .filter(x => x)) {
        if (upperNoProxyItem === '*' ||
            upperReqHosts.some(x => x === upperNoProxyItem ||
                x.endsWith(`.${upperNoProxyItem}`) ||
                (upperNoProxyItem.startsWith('.') &&
                    x.endsWith(`${upperNoProxyItem}`)))) {
            return true;
        }
    }
    return false;
}
exports.checkBypass = checkBypass;
function isLoopbackAddress(host) {
    const hostLower = host.toLowerCase();
    return (hostLower === 'localhost' ||
        hostLower.startsWith('127.') ||
        hostLower.startsWith('[::1]') ||
        hostLower.startsWith('[0:0:0:0:0:0:0:1]'));
}
//# sourceMappingURL=proxy.js.map

/***/ }),

/***/ 5207:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getCmdPath = exports.tryGetExecutablePath = exports.isRooted = exports.isDirectory = exports.exists = exports.READONLY = exports.UV_FS_O_EXLOCK = exports.IS_WINDOWS = exports.unlink = exports.symlink = exports.stat = exports.rmdir = exports.rm = exports.rename = exports.readlink = exports.readdir = exports.open = exports.mkdir = exports.lstat = exports.copyFile = exports.chmod = void 0;
const fs = __importStar(__nccwpck_require__(9896));
const path = __importStar(__nccwpck_require__(6928));
_a = fs.promises
// export const {open} = 'fs'
, exports.chmod = _a.chmod, exports.copyFile = _a.copyFile, exports.lstat = _a.lstat, exports.mkdir = _a.mkdir, exports.open = _a.open, exports.readdir = _a.readdir, exports.readlink = _a.readlink, exports.rename = _a.rename, exports.rm = _a.rm, exports.rmdir = _a.rmdir, exports.stat = _a.stat, exports.symlink = _a.symlink, exports.unlink = _a.unlink;
// export const {open} = 'fs'
exports.IS_WINDOWS = process.platform === 'win32';
// See https://github.com/nodejs/node/blob/d0153aee367422d0858105abec186da4dff0a0c5/deps/uv/include/uv/win.h#L691
exports.UV_FS_O_EXLOCK = 0x10000000;
exports.READONLY = fs.constants.O_RDONLY;
function exists(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.stat(fsPath);
        }
        catch (err) {
            if (err.code === 'ENOENT') {
                return false;
            }
            throw err;
        }
        return true;
    });
}
exports.exists = exists;
function isDirectory(fsPath, useStat = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const stats = useStat ? yield exports.stat(fsPath) : yield exports.lstat(fsPath);
        return stats.isDirectory();
    });
}
exports.isDirectory = isDirectory;
/**
 * On OSX/Linux, true if path starts with '/'. On Windows, true for paths like:
 * \, \hello, \\hello\share, C:, and C:\hello (and corresponding alternate separator cases).
 */
function isRooted(p) {
    p = normalizeSeparators(p);
    if (!p) {
        throw new Error('isRooted() parameter "p" cannot be empty');
    }
    if (exports.IS_WINDOWS) {
        return (p.startsWith('\\') || /^[A-Z]:/i.test(p) // e.g. \ or \hello or \\hello
        ); // e.g. C: or C:\hello
    }
    return p.startsWith('/');
}
exports.isRooted = isRooted;
/**
 * Best effort attempt to determine whether a file exists and is executable.
 * @param filePath    file path to check
 * @param extensions  additional file extensions to try
 * @return if file exists and is executable, returns the file path. otherwise empty string.
 */
function tryGetExecutablePath(filePath, extensions) {
    return __awaiter(this, void 0, void 0, function* () {
        let stats = undefined;
        try {
            // test file exists
            stats = yield exports.stat(filePath);
        }
        catch (err) {
            if (err.code !== 'ENOENT') {
                // eslint-disable-next-line no-console
                console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
            }
        }
        if (stats && stats.isFile()) {
            if (exports.IS_WINDOWS) {
                // on Windows, test for valid extension
                const upperExt = path.extname(filePath).toUpperCase();
                if (extensions.some(validExt => validExt.toUpperCase() === upperExt)) {
                    return filePath;
                }
            }
            else {
                if (isUnixExecutable(stats)) {
                    return filePath;
                }
            }
        }
        // try each extension
        const originalFilePath = filePath;
        for (const extension of extensions) {
            filePath = originalFilePath + extension;
            stats = undefined;
            try {
                stats = yield exports.stat(filePath);
            }
            catch (err) {
                if (err.code !== 'ENOENT') {
                    // eslint-disable-next-line no-console
                    console.log(`Unexpected error attempting to determine if executable file exists '${filePath}': ${err}`);
                }
            }
            if (stats && stats.isFile()) {
                if (exports.IS_WINDOWS) {
                    // preserve the case of the actual file (since an extension was appended)
                    try {
                        const directory = path.dirname(filePath);
                        const upperName = path.basename(filePath).toUpperCase();
                        for (const actualName of yield exports.readdir(directory)) {
                            if (upperName === actualName.toUpperCase()) {
                                filePath = path.join(directory, actualName);
                                break;
                            }
                        }
                    }
                    catch (err) {
                        // eslint-disable-next-line no-console
                        console.log(`Unexpected error attempting to determine the actual case of the file '${filePath}': ${err}`);
                    }
                    return filePath;
                }
                else {
                    if (isUnixExecutable(stats)) {
                        return filePath;
                    }
                }
            }
        }
        return '';
    });
}
exports.tryGetExecutablePath = tryGetExecutablePath;
function normalizeSeparators(p) {
    p = p || '';
    if (exports.IS_WINDOWS) {
        // convert slashes on Windows
        p = p.replace(/\//g, '\\');
        // remove redundant slashes
        return p.replace(/\\\\+/g, '\\');
    }
    // remove redundant slashes
    return p.replace(/\/\/+/g, '/');
}
// on Mac/Linux, test the execute bit
//     R   W  X  R  W X R W X
//   256 128 64 32 16 8 4 2 1
function isUnixExecutable(stats) {
    return ((stats.mode & 1) > 0 ||
        ((stats.mode & 8) > 0 && stats.gid === process.getgid()) ||
        ((stats.mode & 64) > 0 && stats.uid === process.getuid()));
}
// Get the path of cmd.exe in windows
function getCmdPath() {
    var _a;
    return (_a = process.env['COMSPEC']) !== null && _a !== void 0 ? _a : `cmd.exe`;
}
exports.getCmdPath = getCmdPath;
//# sourceMappingURL=io-util.js.map

/***/ }),

/***/ 4994:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.findInPath = exports.which = exports.mkdirP = exports.rmRF = exports.mv = exports.cp = void 0;
const assert_1 = __nccwpck_require__(2613);
const path = __importStar(__nccwpck_require__(6928));
const ioUtil = __importStar(__nccwpck_require__(5207));
/**
 * Copies a file or folder.
 * Based off of shelljs - https://github.com/shelljs/shelljs/blob/9237f66c52e5daa40458f94f9565e18e8132f5a6/src/cp.js
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See CopyOptions.
 */
function cp(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        const { force, recursive, copySourceDirectory } = readCopyOptions(options);
        const destStat = (yield ioUtil.exists(dest)) ? yield ioUtil.stat(dest) : null;
        // Dest is an existing file, but not forcing
        if (destStat && destStat.isFile() && !force) {
            return;
        }
        // If dest is an existing directory, should copy inside.
        const newDest = destStat && destStat.isDirectory() && copySourceDirectory
            ? path.join(dest, path.basename(source))
            : dest;
        if (!(yield ioUtil.exists(source))) {
            throw new Error(`no such file or directory: ${source}`);
        }
        const sourceStat = yield ioUtil.stat(source);
        if (sourceStat.isDirectory()) {
            if (!recursive) {
                throw new Error(`Failed to copy. ${source} is a directory, but tried to copy without recursive flag.`);
            }
            else {
                yield cpDirRecursive(source, newDest, 0, force);
            }
        }
        else {
            if (path.relative(source, newDest) === '') {
                // a file cannot be copied to itself
                throw new Error(`'${newDest}' and '${source}' are the same file`);
            }
            yield copyFile(source, newDest, force);
        }
    });
}
exports.cp = cp;
/**
 * Moves a path.
 *
 * @param     source    source path
 * @param     dest      destination path
 * @param     options   optional. See MoveOptions.
 */
function mv(source, dest, options = {}) {
    return __awaiter(this, void 0, void 0, function* () {
        if (yield ioUtil.exists(dest)) {
            let destExists = true;
            if (yield ioUtil.isDirectory(dest)) {
                // If dest is directory copy src into dest
                dest = path.join(dest, path.basename(source));
                destExists = yield ioUtil.exists(dest);
            }
            if (destExists) {
                if (options.force == null || options.force) {
                    yield rmRF(dest);
                }
                else {
                    throw new Error('Destination already exists');
                }
            }
        }
        yield mkdirP(path.dirname(dest));
        yield ioUtil.rename(source, dest);
    });
}
exports.mv = mv;
/**
 * Remove a path recursively with force
 *
 * @param inputPath path to remove
 */
function rmRF(inputPath) {
    return __awaiter(this, void 0, void 0, function* () {
        if (ioUtil.IS_WINDOWS) {
            // Check for invalid characters
            // https://docs.microsoft.com/en-us/windows/win32/fileio/naming-a-file
            if (/[*"<>|]/.test(inputPath)) {
                throw new Error('File path must not contain `*`, `"`, `<`, `>` or `|` on Windows');
            }
        }
        try {
            // note if path does not exist, error is silent
            yield ioUtil.rm(inputPath, {
                force: true,
                maxRetries: 3,
                recursive: true,
                retryDelay: 300
            });
        }
        catch (err) {
            throw new Error(`File was unable to be removed ${err}`);
        }
    });
}
exports.rmRF = rmRF;
/**
 * Make a directory.  Creates the full path with folders in between
 * Will throw if it fails
 *
 * @param   fsPath        path to create
 * @returns Promise<void>
 */
function mkdirP(fsPath) {
    return __awaiter(this, void 0, void 0, function* () {
        assert_1.ok(fsPath, 'a path argument must be provided');
        yield ioUtil.mkdir(fsPath, { recursive: true });
    });
}
exports.mkdirP = mkdirP;
/**
 * Returns path of a tool had the tool actually been invoked.  Resolves via paths.
 * If you check and the tool does not exist, it will throw.
 *
 * @param     tool              name of the tool
 * @param     check             whether to check if tool exists
 * @returns   Promise<string>   path to tool
 */
function which(tool, check) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // recursive when check=true
        if (check) {
            const result = yield which(tool, false);
            if (!result) {
                if (ioUtil.IS_WINDOWS) {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also verify the file has a valid extension for an executable file.`);
                }
                else {
                    throw new Error(`Unable to locate executable file: ${tool}. Please verify either the file path exists or the file can be found within a directory specified by the PATH environment variable. Also check the file mode to verify the file is executable.`);
                }
            }
            return result;
        }
        const matches = yield findInPath(tool);
        if (matches && matches.length > 0) {
            return matches[0];
        }
        return '';
    });
}
exports.which = which;
/**
 * Returns a list of all occurrences of the given tool on the system path.
 *
 * @returns   Promise<string[]>  the paths of the tool
 */
function findInPath(tool) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!tool) {
            throw new Error("parameter 'tool' is required");
        }
        // build the list of extensions to try
        const extensions = [];
        if (ioUtil.IS_WINDOWS && process.env['PATHEXT']) {
            for (const extension of process.env['PATHEXT'].split(path.delimiter)) {
                if (extension) {
                    extensions.push(extension);
                }
            }
        }
        // if it's rooted, return it if exists. otherwise return empty.
        if (ioUtil.isRooted(tool)) {
            const filePath = yield ioUtil.tryGetExecutablePath(tool, extensions);
            if (filePath) {
                return [filePath];
            }
            return [];
        }
        // if any path separators, return empty
        if (tool.includes(path.sep)) {
            return [];
        }
        // build the list of directories
        //
        // Note, technically "where" checks the current directory on Windows. From a toolkit perspective,
        // it feels like we should not do this. Checking the current directory seems like more of a use
        // case of a shell, and the which() function exposed by the toolkit should strive for consistency
        // across platforms.
        const directories = [];
        if (process.env.PATH) {
            for (const p of process.env.PATH.split(path.delimiter)) {
                if (p) {
                    directories.push(p);
                }
            }
        }
        // find all matches
        const matches = [];
        for (const directory of directories) {
            const filePath = yield ioUtil.tryGetExecutablePath(path.join(directory, tool), extensions);
            if (filePath) {
                matches.push(filePath);
            }
        }
        return matches;
    });
}
exports.findInPath = findInPath;
function readCopyOptions(options) {
    const force = options.force == null ? true : options.force;
    const recursive = Boolean(options.recursive);
    const copySourceDirectory = options.copySourceDirectory == null
        ? true
        : Boolean(options.copySourceDirectory);
    return { force, recursive, copySourceDirectory };
}
function cpDirRecursive(sourceDir, destDir, currentDepth, force) {
    return __awaiter(this, void 0, void 0, function* () {
        // Ensure there is not a run away recursive copy
        if (currentDepth >= 255)
            return;
        currentDepth++;
        yield mkdirP(destDir);
        const files = yield ioUtil.readdir(sourceDir);
        for (const fileName of files) {
            const srcFile = `${sourceDir}/${fileName}`;
            const destFile = `${destDir}/${fileName}`;
            const srcFileStat = yield ioUtil.lstat(srcFile);
            if (srcFileStat.isDirectory()) {
                // Recurse
                yield cpDirRecursive(srcFile, destFile, currentDepth, force);
            }
            else {
                yield copyFile(srcFile, destFile, force);
            }
        }
        // Change the mode for the newly created directory
        yield ioUtil.chmod(destDir, (yield ioUtil.stat(sourceDir)).mode);
    });
}
// Buffered file copy
function copyFile(srcFile, destFile, force) {
    return __awaiter(this, void 0, void 0, function* () {
        if ((yield ioUtil.lstat(srcFile)).isSymbolicLink()) {
            // unlink/re-link it
            try {
                yield ioUtil.lstat(destFile);
                yield ioUtil.unlink(destFile);
            }
            catch (e) {
                // Try to override file permission
                if (e.code === 'EPERM') {
                    yield ioUtil.chmod(destFile, '0666');
                    yield ioUtil.unlink(destFile);
                }
                // other errors = it doesn't exist, no work to do
            }
            // Copy over symlink
            const symlinkFull = yield ioUtil.readlink(srcFile);
            yield ioUtil.symlink(symlinkFull, destFile, ioUtil.IS_WINDOWS ? 'junction' : null);
        }
        else if (!(yield ioUtil.exists(destFile)) || force) {
            yield ioUtil.copyFile(srcFile, destFile);
        }
    });
}
//# sourceMappingURL=io.js.map

/***/ }),

/***/ 4317:
/***/ (function(__unused_webpack_module, exports, __nccwpck_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getKeyIndexes = exports.hasFlag = exports.exists = exports.list = void 0;
const commands_json_1 = __importDefault(__nccwpck_require__(7613));
/**
 * Redis command list
 *
 * All commands are lowercased.
 */
exports.list = Object.keys(commands_json_1.default);
const flags = {};
exports.list.forEach((commandName) => {
    flags[commandName] = commands_json_1.default[commandName].flags.reduce(function (flags, flag) {
        flags[flag] = true;
        return flags;
    }, {});
});
/**
 * Check if the command exists
 */
function exists(commandName) {
    return Boolean(commands_json_1.default[commandName]);
}
exports.exists = exists;
/**
 * Check if the command has the flag
 *
 * Some of possible flags: readonly, noscript, loading
 */
function hasFlag(commandName, flag) {
    if (!flags[commandName]) {
        throw new Error("Unknown command " + commandName);
    }
    return Boolean(flags[commandName][flag]);
}
exports.hasFlag = hasFlag;
/**
 * Get indexes of keys in the command arguments
 *
 * @example
 * ```javascript
 * getKeyIndexes('set', ['key', 'value']) // [0]
 * getKeyIndexes('mget', ['key1', 'key2']) // [0, 1]
 * ```
 */
function getKeyIndexes(commandName, args, options) {
    const command = commands_json_1.default[commandName];
    if (!command) {
        throw new Error("Unknown command " + commandName);
    }
    if (!Array.isArray(args)) {
        throw new Error("Expect args to be an array");
    }
    const keys = [];
    const parseExternalKey = Boolean(options && options.parseExternalKey);
    const takeDynamicKeys = (args, startIndex) => {
        const keys = [];
        const keyStop = Number(args[startIndex]);
        for (let i = 0; i < keyStop; i++) {
            keys.push(i + startIndex + 1);
        }
        return keys;
    };
    const takeKeyAfterToken = (args, startIndex, token) => {
        for (let i = startIndex; i < args.length - 1; i += 1) {
            if (String(args[i]).toLowerCase() === token.toLowerCase()) {
                return i + 1;
            }
        }
        return null;
    };
    switch (commandName) {
        case "zunionstore":
        case "zinterstore":
        case "zdiffstore":
            keys.push(0, ...takeDynamicKeys(args, 1));
            break;
        case "eval":
        case "evalsha":
        case "eval_ro":
        case "evalsha_ro":
        case "fcall":
        case "fcall_ro":
        case "blmpop":
        case "bzmpop":
            keys.push(...takeDynamicKeys(args, 1));
            break;
        case "sintercard":
        case "lmpop":
        case "zunion":
        case "zinter":
        case "zmpop":
        case "zintercard":
        case "zdiff": {
            keys.push(...takeDynamicKeys(args, 0));
            break;
        }
        case "georadius": {
            keys.push(0);
            const storeKey = takeKeyAfterToken(args, 5, "STORE");
            if (storeKey)
                keys.push(storeKey);
            const distKey = takeKeyAfterToken(args, 5, "STOREDIST");
            if (distKey)
                keys.push(distKey);
            break;
        }
        case "georadiusbymember": {
            keys.push(0);
            const storeKey = takeKeyAfterToken(args, 4, "STORE");
            if (storeKey)
                keys.push(storeKey);
            const distKey = takeKeyAfterToken(args, 4, "STOREDIST");
            if (distKey)
                keys.push(distKey);
            break;
        }
        case "sort":
        case "sort_ro":
            keys.push(0);
            for (let i = 1; i < args.length - 1; i++) {
                let arg = args[i];
                if (typeof arg !== "string") {
                    continue;
                }
                const directive = arg.toUpperCase();
                if (directive === "GET") {
                    i += 1;
                    arg = args[i];
                    if (arg !== "#") {
                        if (parseExternalKey) {
                            keys.push([i, getExternalKeyNameLength(arg)]);
                        }
                        else {
                            keys.push(i);
                        }
                    }
                }
                else if (directive === "BY") {
                    i += 1;
                    if (parseExternalKey) {
                        keys.push([i, getExternalKeyNameLength(args[i])]);
                    }
                    else {
                        keys.push(i);
                    }
                }
                else if (directive === "STORE") {
                    i += 1;
                    keys.push(i);
                }
            }
            break;
        case "migrate":
            if (args[2] === "") {
                for (let i = 5; i < args.length - 1; i++) {
                    const arg = args[i];
                    if (typeof arg === "string" && arg.toUpperCase() === "KEYS") {
                        for (let j = i + 1; j < args.length; j++) {
                            keys.push(j);
                        }
                        break;
                    }
                }
            }
            else {
                keys.push(2);
            }
            break;
        case "xreadgroup":
        case "xread":
            // Keys are 1st half of the args after STREAMS argument.
            for (let i = commandName === "xread" ? 0 : 3; i < args.length - 1; i++) {
                if (String(args[i]).toUpperCase() === "STREAMS") {
                    for (let j = i + 1; j <= i + (args.length - 1 - i) / 2; j++) {
                        keys.push(j);
                    }
                    break;
                }
            }
            break;
        default:
            // Step has to be at least one in this case, otherwise the command does
            // not contain a key.
            if (command.step > 0) {
                const keyStart = command.keyStart - 1;
                const keyStop = command.keyStop > 0
                    ? command.keyStop
                    : args.length + command.keyStop + 1;
                for (let i = keyStart; i < keyStop; i += command.step) {
                    keys.push(i);
                }
            }
            break;
    }
    return keys;
}
exports.getKeyIndexes = getKeyIndexes;
function getExternalKeyNameLength(key) {
    if (typeof key !== "string") {
        key = String(key);
    }
    const hashPos = key.indexOf("->");
    return hashPos === -1 ? key.length : hashPos;
}


/***/ }),

/***/ 8999:
/***/ ((module) => {

/*
 * Copyright 2001-2010 Georges Menie (www.menie.org)
 * Copyright 2010 Salvatore Sanfilippo (adapted to Redis coding style)
 * Copyright 2015 Zihua Li (http://zihua.li) (ported to JavaScript)
 * Copyright 2016 Mike Diarmid (http://github.com/salakar) (re-write for performance, ~700% perf inc)
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the University of California, Berkeley nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE REGENTS AND CONTRIBUTORS ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL THE REGENTS AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* CRC16 implementation according to CCITT standards.
 *
 * Note by @antirez: this is actually the XMODEM CRC 16 algorithm, using the
 * following parameters:
 *
 * Name                       : "XMODEM", also known as "ZMODEM", "CRC-16/ACORN"
 * Width                      : 16 bit
 * Poly                       : 1021 (That is actually x^16 + x^12 + x^5 + 1)
 * Initialization             : 0000
 * Reflect Input byte         : False
 * Reflect Output CRC         : False
 * Xor constant to output CRC : 0000
 * Output for "123456789"     : 31C3
 */

var lookup = [
  0x0000, 0x1021, 0x2042, 0x3063, 0x4084, 0x50a5, 0x60c6, 0x70e7,
  0x8108, 0x9129, 0xa14a, 0xb16b, 0xc18c, 0xd1ad, 0xe1ce, 0xf1ef,
  0x1231, 0x0210, 0x3273, 0x2252, 0x52b5, 0x4294, 0x72f7, 0x62d6,
  0x9339, 0x8318, 0xb37b, 0xa35a, 0xd3bd, 0xc39c, 0xf3ff, 0xe3de,
  0x2462, 0x3443, 0x0420, 0x1401, 0x64e6, 0x74c7, 0x44a4, 0x5485,
  0xa56a, 0xb54b, 0x8528, 0x9509, 0xe5ee, 0xf5cf, 0xc5ac, 0xd58d,
  0x3653, 0x2672, 0x1611, 0x0630, 0x76d7, 0x66f6, 0x5695, 0x46b4,
  0xb75b, 0xa77a, 0x9719, 0x8738, 0xf7df, 0xe7fe, 0xd79d, 0xc7bc,
  0x48c4, 0x58e5, 0x6886, 0x78a7, 0x0840, 0x1861, 0x2802, 0x3823,
  0xc9cc, 0xd9ed, 0xe98e, 0xf9af, 0x8948, 0x9969, 0xa90a, 0xb92b,
  0x5af5, 0x4ad4, 0x7ab7, 0x6a96, 0x1a71, 0x0a50, 0x3a33, 0x2a12,
  0xdbfd, 0xcbdc, 0xfbbf, 0xeb9e, 0x9b79, 0x8b58, 0xbb3b, 0xab1a,
  0x6ca6, 0x7c87, 0x4ce4, 0x5cc5, 0x2c22, 0x3c03, 0x0c60, 0x1c41,
  0xedae, 0xfd8f, 0xcdec, 0xddcd, 0xad2a, 0xbd0b, 0x8d68, 0x9d49,
  0x7e97, 0x6eb6, 0x5ed5, 0x4ef4, 0x3e13, 0x2e32, 0x1e51, 0x0e70,
  0xff9f, 0xefbe, 0xdfdd, 0xcffc, 0xbf1b, 0xaf3a, 0x9f59, 0x8f78,
  0x9188, 0x81a9, 0xb1ca, 0xa1eb, 0xd10c, 0xc12d, 0xf14e, 0xe16f,
  0x1080, 0x00a1, 0x30c2, 0x20e3, 0x5004, 0x4025, 0x7046, 0x6067,
  0x83b9, 0x9398, 0xa3fb, 0xb3da, 0xc33d, 0xd31c, 0xe37f, 0xf35e,
  0x02b1, 0x1290, 0x22f3, 0x32d2, 0x4235, 0x5214, 0x6277, 0x7256,
  0xb5ea, 0xa5cb, 0x95a8, 0x8589, 0xf56e, 0xe54f, 0xd52c, 0xc50d,
  0x34e2, 0x24c3, 0x14a0, 0x0481, 0x7466, 0x6447, 0x5424, 0x4405,
  0xa7db, 0xb7fa, 0x8799, 0x97b8, 0xe75f, 0xf77e, 0xc71d, 0xd73c,
  0x26d3, 0x36f2, 0x0691, 0x16b0, 0x6657, 0x7676, 0x4615, 0x5634,
  0xd94c, 0xc96d, 0xf90e, 0xe92f, 0x99c8, 0x89e9, 0xb98a, 0xa9ab,
  0x5844, 0x4865, 0x7806, 0x6827, 0x18c0, 0x08e1, 0x3882, 0x28a3,
  0xcb7d, 0xdb5c, 0xeb3f, 0xfb1e, 0x8bf9, 0x9bd8, 0xabbb, 0xbb9a,
  0x4a75, 0x5a54, 0x6a37, 0x7a16, 0x0af1, 0x1ad0, 0x2ab3, 0x3a92,
  0xfd2e, 0xed0f, 0xdd6c, 0xcd4d, 0xbdaa, 0xad8b, 0x9de8, 0x8dc9,
  0x7c26, 0x6c07, 0x5c64, 0x4c45, 0x3ca2, 0x2c83, 0x1ce0, 0x0cc1,
  0xef1f, 0xff3e, 0xcf5d, 0xdf7c, 0xaf9b, 0xbfba, 0x8fd9, 0x9ff8,
  0x6e17, 0x7e36, 0x4e55, 0x5e74, 0x2e93, 0x3eb2, 0x0ed1, 0x1ef0
];

/**
 * Convert a string to a UTF8 array - faster than via buffer
 * @param str
 * @returns {Array}
 */
var toUTF8Array = function toUTF8Array(str) {
  var char;
  var i = 0;
  var p = 0;
  var utf8 = [];
  var len = str.length;

  for (; i < len; i++) {
    char = str.charCodeAt(i);
    if (char < 128) {
      utf8[p++] = char;
    } else if (char < 2048) {
      utf8[p++] = (char >> 6) | 192;
      utf8[p++] = (char & 63) | 128;
    } else if (
        ((char & 0xFC00) === 0xD800) && (i + 1) < str.length &&
        ((str.charCodeAt(i + 1) & 0xFC00) === 0xDC00)) {
      char = 0x10000 + ((char & 0x03FF) << 10) + (str.charCodeAt(++i) & 0x03FF);
      utf8[p++] = (char >> 18) | 240;
      utf8[p++] = ((char >> 12) & 63) | 128;
      utf8[p++] = ((char >> 6) & 63) | 128;
      utf8[p++] = (char & 63) | 128;
    } else {
      utf8[p++] = (char >> 12) | 224;
      utf8[p++] = ((char >> 6) & 63) | 128;
      utf8[p++] = (char & 63) | 128;
    }
  }

  return utf8;
};

/**
 * Convert a string into a redis slot hash.
 * @param str
 * @returns {number}
 */
var generate = module.exports = function generate(str) {
  var char;
  var i = 0;
  var start = -1;
  var result = 0;
  var resultHash = 0;
  var utf8 = typeof str === 'string' ? toUTF8Array(str) : str;
  var len = utf8.length;

  while (i < len) {
    char = utf8[i++];
    if (start === -1) {
      if (char === 0x7B) {
        start = i;
      }
    } else if (char !== 0x7D) {
      resultHash = lookup[(char ^ (resultHash >> 8)) & 0xFF] ^ (resultHash << 8);
    } else if (i - 1 !== start) {
      return resultHash & 0x3FFF;
    }

    result = lookup[(char ^ (result >> 8)) & 0xFF] ^ (result << 8);
  }

  return result & 0x3FFF;
};

/**
 * Convert an array of multiple strings into a redis slot hash.
 * Returns -1 if one of the keys is not for the same slot as the others
 * @param keys
 * @returns {number}
 */
module.exports.generateMulti = function generateMulti(keys) {
  var i = 1;
  var len = keys.length;
  var base = generate(keys[0]);

  while (i < len) {
    if (generate(keys[i++]) !== base) return -1;
  }

  return base;
};


/***/ }),

/***/ 6110:
/***/ ((module, exports, __nccwpck_require__) => {

/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};


/***/ }),

/***/ 897:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = __nccwpck_require__(744);
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

module.exports = setup;


/***/ }),

/***/ 2830:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = __nccwpck_require__(6110);
} else {
	module.exports = __nccwpck_require__(5108);
}


/***/ }),

/***/ 5108:
/***/ ((module, exports, __nccwpck_require__) => {

/**
 * Module dependencies.
 */

const tty = __nccwpck_require__(2018);
const util = __nccwpck_require__(9023);

/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util.deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = __nccwpck_require__(1450);

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty.isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util.format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = __nccwpck_require__(897)(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util.inspect(v, this.inspectOpts);
};


/***/ }),

/***/ 9036:
/***/ ((module) => {

"use strict";


/**
 * Custom implementation of a double ended queue.
 */
function Denque(array, options) {
  var options = options || {};
  this._capacity = options.capacity;

  this._head = 0;
  this._tail = 0;

  if (Array.isArray(array)) {
    this._fromArray(array);
  } else {
    this._capacityMask = 0x3;
    this._list = new Array(4);
  }
}

/**
 * --------------
 *  PUBLIC API
 * -------------
 */

/**
 * Returns the item at the specified index from the list.
 * 0 is the first element, 1 is the second, and so on...
 * Elements at negative values are that many from the end: -1 is one before the end
 * (the last element), -2 is two before the end (one before last), etc.
 * @param index
 * @returns {*}
 */
Denque.prototype.peekAt = function peekAt(index) {
  var i = index;
  // expect a number or return undefined
  if ((i !== (i | 0))) {
    return void 0;
  }
  var len = this.size();
  if (i >= len || i < -len) return undefined;
  if (i < 0) i += len;
  i = (this._head + i) & this._capacityMask;
  return this._list[i];
};

/**
 * Alias for peekAt()
 * @param i
 * @returns {*}
 */
Denque.prototype.get = function get(i) {
  return this.peekAt(i);
};

/**
 * Returns the first item in the list without removing it.
 * @returns {*}
 */
Denque.prototype.peek = function peek() {
  if (this._head === this._tail) return undefined;
  return this._list[this._head];
};

/**
 * Alias for peek()
 * @returns {*}
 */
Denque.prototype.peekFront = function peekFront() {
  return this.peek();
};

/**
 * Returns the item that is at the back of the queue without removing it.
 * Uses peekAt(-1)
 */
Denque.prototype.peekBack = function peekBack() {
  return this.peekAt(-1);
};

/**
 * Returns the current length of the queue
 * @return {Number}
 */
Object.defineProperty(Denque.prototype, 'length', {
  get: function length() {
    return this.size();
  }
});

/**
 * Return the number of items on the list, or 0 if empty.
 * @returns {number}
 */
Denque.prototype.size = function size() {
  if (this._head === this._tail) return 0;
  if (this._head < this._tail) return this._tail - this._head;
  else return this._capacityMask + 1 - (this._head - this._tail);
};

/**
 * Add an item at the beginning of the list.
 * @param item
 */
Denque.prototype.unshift = function unshift(item) {
  if (arguments.length === 0) return this.size();
  var len = this._list.length;
  this._head = (this._head - 1 + len) & this._capacityMask;
  this._list[this._head] = item;
  if (this._tail === this._head) this._growArray();
  if (this._capacity && this.size() > this._capacity) this.pop();
  if (this._head < this._tail) return this._tail - this._head;
  else return this._capacityMask + 1 - (this._head - this._tail);
};

/**
 * Remove and return the first item on the list,
 * Returns undefined if the list is empty.
 * @returns {*}
 */
Denque.prototype.shift = function shift() {
  var head = this._head;
  if (head === this._tail) return undefined;
  var item = this._list[head];
  this._list[head] = undefined;
  this._head = (head + 1) & this._capacityMask;
  if (head < 2 && this._tail > 10000 && this._tail <= this._list.length >>> 2) this._shrinkArray();
  return item;
};

/**
 * Add an item to the bottom of the list.
 * @param item
 */
Denque.prototype.push = function push(item) {
  if (arguments.length === 0) return this.size();
  var tail = this._tail;
  this._list[tail] = item;
  this._tail = (tail + 1) & this._capacityMask;
  if (this._tail === this._head) {
    this._growArray();
  }
  if (this._capacity && this.size() > this._capacity) {
    this.shift();
  }
  if (this._head < this._tail) return this._tail - this._head;
  else return this._capacityMask + 1 - (this._head - this._tail);
};

/**
 * Remove and return the last item on the list.
 * Returns undefined if the list is empty.
 * @returns {*}
 */
Denque.prototype.pop = function pop() {
  var tail = this._tail;
  if (tail === this._head) return undefined;
  var len = this._list.length;
  this._tail = (tail - 1 + len) & this._capacityMask;
  var item = this._list[this._tail];
  this._list[this._tail] = undefined;
  if (this._head < 2 && tail > 10000 && tail <= len >>> 2) this._shrinkArray();
  return item;
};

/**
 * Remove and return the item at the specified index from the list.
 * Returns undefined if the list is empty.
 * @param index
 * @returns {*}
 */
Denque.prototype.removeOne = function removeOne(index) {
  var i = index;
  // expect a number or return undefined
  if ((i !== (i | 0))) {
    return void 0;
  }
  if (this._head === this._tail) return void 0;
  var size = this.size();
  var len = this._list.length;
  if (i >= size || i < -size) return void 0;
  if (i < 0) i += size;
  i = (this._head + i) & this._capacityMask;
  var item = this._list[i];
  var k;
  if (index < size / 2) {
    for (k = index; k > 0; k--) {
      this._list[i] = this._list[i = (i - 1 + len) & this._capacityMask];
    }
    this._list[i] = void 0;
    this._head = (this._head + 1 + len) & this._capacityMask;
  } else {
    for (k = size - 1 - index; k > 0; k--) {
      this._list[i] = this._list[i = (i + 1 + len) & this._capacityMask];
    }
    this._list[i] = void 0;
    this._tail = (this._tail - 1 + len) & this._capacityMask;
  }
  return item;
};

/**
 * Remove number of items from the specified index from the list.
 * Returns array of removed items.
 * Returns undefined if the list is empty.
 * @param index
 * @param count
 * @returns {array}
 */
Denque.prototype.remove = function remove(index, count) {
  var i = index;
  var removed;
  var del_count = count;
  // expect a number or return undefined
  if ((i !== (i | 0))) {
    return void 0;
  }
  if (this._head === this._tail) return void 0;
  var size = this.size();
  var len = this._list.length;
  if (i >= size || i < -size || count < 1) return void 0;
  if (i < 0) i += size;
  if (count === 1 || !count) {
    removed = new Array(1);
    removed[0] = this.removeOne(i);
    return removed;
  }
  if (i === 0 && i + count >= size) {
    removed = this.toArray();
    this.clear();
    return removed;
  }
  if (i + count > size) count = size - i;
  var k;
  removed = new Array(count);
  for (k = 0; k < count; k++) {
    removed[k] = this._list[(this._head + i + k) & this._capacityMask];
  }
  i = (this._head + i) & this._capacityMask;
  if (index + count === size) {
    this._tail = (this._tail - count + len) & this._capacityMask;
    for (k = count; k > 0; k--) {
      this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
    }
    return removed;
  }
  if (index === 0) {
    this._head = (this._head + count + len) & this._capacityMask;
    for (k = count - 1; k > 0; k--) {
      this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
    }
    return removed;
  }
  if (i < size / 2) {
    this._head = (this._head + index + count + len) & this._capacityMask;
    for (k = index; k > 0; k--) {
      this.unshift(this._list[i = (i - 1 + len) & this._capacityMask]);
    }
    i = (this._head - 1 + len) & this._capacityMask;
    while (del_count > 0) {
      this._list[i = (i - 1 + len) & this._capacityMask] = void 0;
      del_count--;
    }
    if (index < 0) this._tail = i;
  } else {
    this._tail = i;
    i = (i + count + len) & this._capacityMask;
    for (k = size - (count + index); k > 0; k--) {
      this.push(this._list[i++]);
    }
    i = this._tail;
    while (del_count > 0) {
      this._list[i = (i + 1 + len) & this._capacityMask] = void 0;
      del_count--;
    }
  }
  if (this._head < 2 && this._tail > 10000 && this._tail <= len >>> 2) this._shrinkArray();
  return removed;
};

/**
 * Native splice implementation.
 * Remove number of items from the specified index from the list and/or add new elements.
 * Returns array of removed items or empty array if count == 0.
 * Returns undefined if the list is empty.
 *
 * @param index
 * @param count
 * @param {...*} [elements]
 * @returns {array}
 */
Denque.prototype.splice = function splice(index, count) {
  var i = index;
  // expect a number or return undefined
  if ((i !== (i | 0))) {
    return void 0;
  }
  var size = this.size();
  if (i < 0) i += size;
  if (i > size) return void 0;
  if (arguments.length > 2) {
    var k;
    var temp;
    var removed;
    var arg_len = arguments.length;
    var len = this._list.length;
    var arguments_index = 2;
    if (!size || i < size / 2) {
      temp = new Array(i);
      for (k = 0; k < i; k++) {
        temp[k] = this._list[(this._head + k) & this._capacityMask];
      }
      if (count === 0) {
        removed = [];
        if (i > 0) {
          this._head = (this._head + i + len) & this._capacityMask;
        }
      } else {
        removed = this.remove(i, count);
        this._head = (this._head + i + len) & this._capacityMask;
      }
      while (arg_len > arguments_index) {
        this.unshift(arguments[--arg_len]);
      }
      for (k = i; k > 0; k--) {
        this.unshift(temp[k - 1]);
      }
    } else {
      temp = new Array(size - (i + count));
      var leng = temp.length;
      for (k = 0; k < leng; k++) {
        temp[k] = this._list[(this._head + i + count + k) & this._capacityMask];
      }
      if (count === 0) {
        removed = [];
        if (i != size) {
          this._tail = (this._head + i + len) & this._capacityMask;
        }
      } else {
        removed = this.remove(i, count);
        this._tail = (this._tail - leng + len) & this._capacityMask;
      }
      while (arguments_index < arg_len) {
        this.push(arguments[arguments_index++]);
      }
      for (k = 0; k < leng; k++) {
        this.push(temp[k]);
      }
    }
    return removed;
  } else {
    return this.remove(i, count);
  }
};

/**
 * Soft clear - does not reset capacity.
 */
Denque.prototype.clear = function clear() {
  this._list = new Array(this._list.length);
  this._head = 0;
  this._tail = 0;
};

/**
 * Returns true or false whether the list is empty.
 * @returns {boolean}
 */
Denque.prototype.isEmpty = function isEmpty() {
  return this._head === this._tail;
};

/**
 * Returns an array of all queue items.
 * @returns {Array}
 */
Denque.prototype.toArray = function toArray() {
  return this._copyArray(false);
};

/**
 * -------------
 *   INTERNALS
 * -------------
 */

/**
 * Fills the queue with items from an array
 * For use in the constructor
 * @param array
 * @private
 */
Denque.prototype._fromArray = function _fromArray(array) {
  var length = array.length;
  var capacity = this._nextPowerOf2(length);

  this._list = new Array(capacity);
  this._capacityMask = capacity - 1;
  this._tail = length;

  for (var i = 0; i < length; i++) this._list[i] = array[i];
};

/**
 *
 * @param fullCopy
 * @param size Initialize the array with a specific size. Will default to the current list size
 * @returns {Array}
 * @private
 */
Denque.prototype._copyArray = function _copyArray(fullCopy, size) {
  var src = this._list;
  var capacity = src.length;
  var length = this.length;
  size = size | length;

  // No prealloc requested and the buffer is contiguous
  if (size == length && this._head < this._tail) {
    // Simply do a fast slice copy
    return this._list.slice(this._head, this._tail);
  }

  var dest = new Array(size);

  var k = 0;
  var i;
  if (fullCopy || this._head > this._tail) {
    for (i = this._head; i < capacity; i++) dest[k++] = src[i];
    for (i = 0; i < this._tail; i++) dest[k++] = src[i];
  } else {
    for (i = this._head; i < this._tail; i++) dest[k++] = src[i];
  }

  return dest;
}

/**
 * Grows the internal list array.
 * @private
 */
Denque.prototype._growArray = function _growArray() {
  if (this._head != 0) {
    // double array size and copy existing data, head to end, then beginning to tail.
    var newList = this._copyArray(true, this._list.length << 1);

    this._tail = this._list.length;
    this._head = 0;

    this._list = newList;
  } else {
    this._tail = this._list.length;
    this._list.length <<= 1;
  }

  this._capacityMask = (this._capacityMask << 1) | 1;
};

/**
 * Shrinks the internal list array.
 * @private
 */
Denque.prototype._shrinkArray = function _shrinkArray() {
  this._list.length >>>= 1;
  this._capacityMask >>>= 1;
};

/**
 * Find the next power of 2, at least 4
 * @private
 * @param {number} num 
 * @returns {number}
 */
Denque.prototype._nextPowerOf2 = function _nextPowerOf2(num) {
  var log2 = Math.log(num) / Math.log(2);
  var nextPow2 = 1 << (log2 + 1);

  return Math.max(nextPow2, 4);
}

module.exports = Denque;


/***/ }),

/***/ 3813:
/***/ ((module) => {

"use strict";


module.exports = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};


/***/ }),

/***/ 5017:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commands_1 = __nccwpck_require__(4317);
const calculateSlot = __nccwpck_require__(8999);
const standard_as_callback_1 = __nccwpck_require__(5659);
const utils_1 = __nccwpck_require__(7670);
/**
 * Command instance
 *
 * It's rare that you need to create a Command instance yourself.
 *
 * ```js
 * var infoCommand = new Command('info', null, function (err, result) {
 *   console.log('result', result);
 * });
 *
 * redis.sendCommand(infoCommand);
 *
 * // When no callback provided, Command instance will have a `promise` property,
 * // which will resolve/reject with the result of the command.
 * var getCommand = new Command('get', ['foo']);
 * getCommand.promise.then(function (result) {
 *   console.log('result', result);
 * });
 * ```
 */
class Command {
    /**
     * Creates an instance of Command.
     * @param name Command name
     * @param args An array of command arguments
     * @param options
     * @param callback The callback that handles the response.
     * If omit, the response will be handled via Promise
     */
    constructor(name, args = [], options = {}, callback) {
        this.name = name;
        this.inTransaction = false;
        this.isResolved = false;
        this.transformed = false;
        this.replyEncoding = options.replyEncoding;
        this.errorStack = options.errorStack;
        this.args = args.flat();
        this.callback = callback;
        this.initPromise();
        if (options.keyPrefix) {
            // @ts-expect-error
            const isBufferKeyPrefix = options.keyPrefix instanceof Buffer;
            // @ts-expect-error
            let keyPrefixBuffer = isBufferKeyPrefix
                ? options.keyPrefix
                : null;
            this._iterateKeys((key) => {
                if (key instanceof Buffer) {
                    if (keyPrefixBuffer === null) {
                        keyPrefixBuffer = Buffer.from(options.keyPrefix);
                    }
                    return Buffer.concat([keyPrefixBuffer, key]);
                }
                else if (isBufferKeyPrefix) {
                    // @ts-expect-error
                    return Buffer.concat([options.keyPrefix, Buffer.from(String(key))]);
                }
                return options.keyPrefix + key;
            });
        }
        if (options.readOnly) {
            this.isReadOnly = true;
        }
    }
    /**
     * Check whether the command has the flag
     */
    static checkFlag(flagName, commandName) {
        return !!this.getFlagMap()[flagName][commandName];
    }
    static setArgumentTransformer(name, func) {
        this._transformer.argument[name] = func;
    }
    static setReplyTransformer(name, func) {
        this._transformer.reply[name] = func;
    }
    static getFlagMap() {
        if (!this.flagMap) {
            this.flagMap = Object.keys(Command.FLAGS).reduce((map, flagName) => {
                map[flagName] = {};
                Command.FLAGS[flagName].forEach((commandName) => {
                    map[flagName][commandName] = true;
                });
                return map;
            }, {});
        }
        return this.flagMap;
    }
    getSlot() {
        if (typeof this.slot === "undefined") {
            const key = this.getKeys()[0];
            this.slot = key == null ? null : calculateSlot(key);
        }
        return this.slot;
    }
    getKeys() {
        return this._iterateKeys();
    }
    /**
     * Convert command to writable buffer or string
     */
    toWritable(_socket) {
        let result;
        const commandStr = "*" +
            (this.args.length + 1) +
            "\r\n$" +
            Buffer.byteLength(this.name) +
            "\r\n" +
            this.name +
            "\r\n";
        if (this.bufferMode) {
            const buffers = new MixedBuffers();
            buffers.push(commandStr);
            for (let i = 0; i < this.args.length; ++i) {
                const arg = this.args[i];
                if (arg instanceof Buffer) {
                    if (arg.length === 0) {
                        buffers.push("$0\r\n\r\n");
                    }
                    else {
                        buffers.push("$" + arg.length + "\r\n");
                        buffers.push(arg);
                        buffers.push("\r\n");
                    }
                }
                else {
                    buffers.push("$" +
                        Buffer.byteLength(arg) +
                        "\r\n" +
                        arg +
                        "\r\n");
                }
            }
            result = buffers.toBuffer();
        }
        else {
            result = commandStr;
            for (let i = 0; i < this.args.length; ++i) {
                const arg = this.args[i];
                result +=
                    "$" +
                        Buffer.byteLength(arg) +
                        "\r\n" +
                        arg +
                        "\r\n";
            }
        }
        return result;
    }
    stringifyArguments() {
        for (let i = 0; i < this.args.length; ++i) {
            const arg = this.args[i];
            if (typeof arg === "string") {
                // buffers and strings don't need any transformation
            }
            else if (arg instanceof Buffer) {
                this.bufferMode = true;
            }
            else {
                this.args[i] = (0, utils_1.toArg)(arg);
            }
        }
    }
    /**
     * Convert buffer/buffer[] to string/string[],
     * and apply reply transformer.
     */
    transformReply(result) {
        if (this.replyEncoding) {
            result = (0, utils_1.convertBufferToString)(result, this.replyEncoding);
        }
        const transformer = Command._transformer.reply[this.name];
        if (transformer) {
            result = transformer(result);
        }
        return result;
    }
    /**
     * Set the wait time before terminating the attempt to execute a command
     * and generating an error.
     */
    setTimeout(ms) {
        if (!this._commandTimeoutTimer) {
            this._commandTimeoutTimer = setTimeout(() => {
                if (!this.isResolved) {
                    this.reject(new Error("Command timed out"));
                }
            }, ms);
        }
    }
    initPromise() {
        const promise = new Promise((resolve, reject) => {
            if (!this.transformed) {
                this.transformed = true;
                const transformer = Command._transformer.argument[this.name];
                if (transformer) {
                    this.args = transformer(this.args);
                }
                this.stringifyArguments();
            }
            this.resolve = this._convertValue(resolve);
            if (this.errorStack) {
                this.reject = (err) => {
                    reject((0, utils_1.optimizeErrorStack)(err, this.errorStack.stack, __dirname));
                };
            }
            else {
                this.reject = reject;
            }
        });
        this.promise = (0, standard_as_callback_1.default)(promise, this.callback);
    }
    /**
     * Iterate through the command arguments that are considered keys.
     */
    _iterateKeys(transform = (key) => key) {
        if (typeof this.keys === "undefined") {
            this.keys = [];
            if ((0, commands_1.exists)(this.name)) {
                // @ts-expect-error
                const keyIndexes = (0, commands_1.getKeyIndexes)(this.name, this.args);
                for (const index of keyIndexes) {
                    this.args[index] = transform(this.args[index]);
                    this.keys.push(this.args[index]);
                }
            }
        }
        return this.keys;
    }
    /**
     * Convert the value from buffer to the target encoding.
     */
    _convertValue(resolve) {
        return (value) => {
            try {
                const existingTimer = this._commandTimeoutTimer;
                if (existingTimer) {
                    clearTimeout(existingTimer);
                    delete this._commandTimeoutTimer;
                }
                resolve(this.transformReply(value));
                this.isResolved = true;
            }
            catch (err) {
                this.reject(err);
            }
            return this.promise;
        };
    }
}
exports["default"] = Command;
Command.FLAGS = {
    VALID_IN_SUBSCRIBER_MODE: [
        "subscribe",
        "psubscribe",
        "unsubscribe",
        "punsubscribe",
        "ssubscribe",
        "sunsubscribe",
        "ping",
        "quit",
    ],
    VALID_IN_MONITOR_MODE: ["monitor", "auth"],
    ENTER_SUBSCRIBER_MODE: ["subscribe", "psubscribe", "ssubscribe"],
    EXIT_SUBSCRIBER_MODE: ["unsubscribe", "punsubscribe", "sunsubscribe"],
    WILL_DISCONNECT: ["quit"],
};
Command._transformer = {
    argument: {},
    reply: {},
};
const msetArgumentTransformer = function (args) {
    if (args.length === 1) {
        if (args[0] instanceof Map) {
            return (0, utils_1.convertMapToArray)(args[0]);
        }
        if (typeof args[0] === "object" && args[0] !== null) {
            return (0, utils_1.convertObjectToArray)(args[0]);
        }
    }
    return args;
};
const hsetArgumentTransformer = function (args) {
    if (args.length === 2) {
        if (args[1] instanceof Map) {
            return [args[0]].concat((0, utils_1.convertMapToArray)(args[1]));
        }
        if (typeof args[1] === "object" && args[1] !== null) {
            return [args[0]].concat((0, utils_1.convertObjectToArray)(args[1]));
        }
    }
    return args;
};
Command.setArgumentTransformer("mset", msetArgumentTransformer);
Command.setArgumentTransformer("msetnx", msetArgumentTransformer);
Command.setArgumentTransformer("hset", hsetArgumentTransformer);
Command.setArgumentTransformer("hmset", hsetArgumentTransformer);
Command.setReplyTransformer("hgetall", function (result) {
    if (Array.isArray(result)) {
        const obj = {};
        for (let i = 0; i < result.length; i += 2) {
            const key = result[i];
            const value = result[i + 1];
            if (key in obj) {
                // can only be truthy if the property is special somehow, like '__proto__' or 'constructor'
                // https://github.com/luin/ioredis/issues/1267
                Object.defineProperty(obj, key, {
                    value,
                    configurable: true,
                    enumerable: true,
                    writable: true,
                });
            }
            else {
                obj[key] = value;
            }
        }
        return obj;
    }
    return result;
});
class MixedBuffers {
    constructor() {
        this.length = 0;
        this.items = [];
    }
    push(x) {
        this.length += Buffer.byteLength(x);
        this.items.push(x);
    }
    toBuffer() {
        const result = Buffer.allocUnsafe(this.length);
        let offset = 0;
        for (const item of this.items) {
            const length = Buffer.byteLength(item);
            Buffer.isBuffer(item)
                ? item.copy(result, offset)
                : result.write(item, offset, length);
            offset += length;
        }
        return result;
    }
}


/***/ }),

/***/ 4588:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const Command_1 = __nccwpck_require__(5017);
const utils_1 = __nccwpck_require__(7670);
const RedisParser = __nccwpck_require__(5665);
const SubscriptionSet_1 = __nccwpck_require__(2183);
const debug = (0, utils_1.Debug)("dataHandler");
class DataHandler {
    constructor(redis, parserOptions) {
        this.redis = redis;
        const parser = new RedisParser({
            stringNumbers: parserOptions.stringNumbers,
            returnBuffers: true,
            returnError: (err) => {
                this.returnError(err);
            },
            returnFatalError: (err) => {
                this.returnFatalError(err);
            },
            returnReply: (reply) => {
                this.returnReply(reply);
            },
        });
        redis.stream.on("data", (data) => {
            parser.execute(data);
        });
    }
    returnFatalError(err) {
        err.message += ". Please report this.";
        this.redis.recoverFromFatalError(err, err, { offlineQueue: false });
    }
    returnError(err) {
        const item = this.shiftCommand(err);
        if (!item) {
            return;
        }
        err.command = {
            name: item.command.name,
            args: item.command.args,
        };
        this.redis.handleReconnection(err, item);
    }
    returnReply(reply) {
        if (this.handleMonitorReply(reply)) {
            return;
        }
        if (this.handleSubscriberReply(reply)) {
            return;
        }
        const item = this.shiftCommand(reply);
        if (!item) {
            return;
        }
        if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", item.command.name)) {
            this.redis.condition.subscriber = new SubscriptionSet_1.default();
            this.redis.condition.subscriber.add(item.command.name, reply[1].toString());
            if (!fillSubCommand(item.command, reply[2])) {
                this.redis.commandQueue.unshift(item);
            }
        }
        else if (Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", item.command.name)) {
            if (!fillUnsubCommand(item.command, reply[2])) {
                this.redis.commandQueue.unshift(item);
            }
        }
        else {
            item.command.resolve(reply);
        }
    }
    handleSubscriberReply(reply) {
        if (!this.redis.condition.subscriber) {
            return false;
        }
        const replyType = Array.isArray(reply) ? reply[0].toString() : null;
        debug('receive reply "%s" in subscriber mode', replyType);
        switch (replyType) {
            case "message":
                if (this.redis.listeners("message").length > 0) {
                    // Check if there're listeners to avoid unnecessary `toString()`.
                    this.redis.emit("message", reply[1].toString(), reply[2] ? reply[2].toString() : "");
                }
                this.redis.emit("messageBuffer", reply[1], reply[2]);
                break;
            case "pmessage": {
                const pattern = reply[1].toString();
                if (this.redis.listeners("pmessage").length > 0) {
                    this.redis.emit("pmessage", pattern, reply[2].toString(), reply[3].toString());
                }
                this.redis.emit("pmessageBuffer", pattern, reply[2], reply[3]);
                break;
            }
            case "smessage": {
                if (this.redis.listeners("smessage").length > 0) {
                    this.redis.emit("smessage", reply[1].toString(), reply[2] ? reply[2].toString() : "");
                }
                this.redis.emit("smessageBuffer", reply[1], reply[2]);
                break;
            }
            case "ssubscribe":
            case "subscribe":
            case "psubscribe": {
                const channel = reply[1].toString();
                this.redis.condition.subscriber.add(replyType, channel);
                const item = this.shiftCommand(reply);
                if (!item) {
                    return;
                }
                if (!fillSubCommand(item.command, reply[2])) {
                    this.redis.commandQueue.unshift(item);
                }
                break;
            }
            case "sunsubscribe":
            case "unsubscribe":
            case "punsubscribe": {
                const channel = reply[1] ? reply[1].toString() : null;
                if (channel) {
                    this.redis.condition.subscriber.del(replyType, channel);
                }
                const count = reply[2];
                if (Number(count) === 0) {
                    this.redis.condition.subscriber = false;
                }
                const item = this.shiftCommand(reply);
                if (!item) {
                    return;
                }
                if (!fillUnsubCommand(item.command, count)) {
                    this.redis.commandQueue.unshift(item);
                }
                break;
            }
            default: {
                const item = this.shiftCommand(reply);
                if (!item) {
                    return;
                }
                item.command.resolve(reply);
            }
        }
        return true;
    }
    handleMonitorReply(reply) {
        if (this.redis.status !== "monitoring") {
            return false;
        }
        const replyStr = reply.toString();
        if (replyStr === "OK") {
            // Valid commands in the monitoring mode are AUTH and MONITOR,
            // both of which always reply with 'OK'.
            // So if we got an 'OK', we can make certain that
            // the reply is made to AUTH & MONITOR.
            return false;
        }
        // Since commands sent in the monitoring mode will trigger an exception,
        // any replies we received in the monitoring mode should consider to be
        // realtime monitor data instead of result of commands.
        const len = replyStr.indexOf(" ");
        const timestamp = replyStr.slice(0, len);
        const argIndex = replyStr.indexOf('"');
        const args = replyStr
            .slice(argIndex + 1, -1)
            .split('" "')
            .map((elem) => elem.replace(/\\"/g, '"'));
        const dbAndSource = replyStr.slice(len + 2, argIndex - 2).split(" ");
        this.redis.emit("monitor", timestamp, args, dbAndSource[1], dbAndSource[0]);
        return true;
    }
    shiftCommand(reply) {
        const item = this.redis.commandQueue.shift();
        if (!item) {
            const message = "Command queue state error. If you can reproduce this, please report it.";
            const error = new Error(message +
                (reply instanceof Error
                    ? ` Last error: ${reply.message}`
                    : ` Last reply: ${reply.toString()}`));
            this.redis.emit("error", error);
            return null;
        }
        return item;
    }
}
exports["default"] = DataHandler;
const remainingRepliesMap = new WeakMap();
function fillSubCommand(command, count) {
    let remainingReplies = remainingRepliesMap.has(command)
        ? remainingRepliesMap.get(command)
        : command.args.length;
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
        command.resolve(count);
        remainingRepliesMap.delete(command);
        return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
}
function fillUnsubCommand(command, count) {
    let remainingReplies = remainingRepliesMap.has(command)
        ? remainingRepliesMap.get(command)
        : command.args.length;
    if (remainingReplies === 0) {
        if (Number(count) === 0) {
            remainingRepliesMap.delete(command);
            command.resolve(count);
            return true;
        }
        return false;
    }
    remainingReplies -= 1;
    if (remainingReplies <= 0) {
        command.resolve(count);
        return true;
    }
    remainingRepliesMap.set(command, remainingReplies);
    return false;
}


/***/ }),

/***/ 8940:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const calculateSlot = __nccwpck_require__(8999);
const commands_1 = __nccwpck_require__(4317);
const standard_as_callback_1 = __nccwpck_require__(5659);
const util_1 = __nccwpck_require__(9023);
const Command_1 = __nccwpck_require__(5017);
const utils_1 = __nccwpck_require__(7670);
const Commander_1 = __nccwpck_require__(3240);
/*
  This function derives from the cluster-key-slot implementation.
  Instead of checking that all keys have the same slot, it checks that all slots are served by the same set of nodes.
  If this is satisfied, it returns the first key's slot.
*/
function generateMultiWithNodes(redis, keys) {
    const slot = calculateSlot(keys[0]);
    const target = redis._groupsBySlot[slot];
    for (let i = 1; i < keys.length; i++) {
        if (redis._groupsBySlot[calculateSlot(keys[i])] !== target) {
            return -1;
        }
    }
    return slot;
}
class Pipeline extends Commander_1.default {
    constructor(redis) {
        super();
        this.redis = redis;
        this.isPipeline = true;
        this.replyPending = 0;
        this._queue = [];
        this._result = [];
        this._transactions = 0;
        this._shaToScript = {};
        this.isCluster =
            this.redis.constructor.name === "Cluster" || this.redis.isCluster;
        this.options = redis.options;
        Object.keys(redis.scriptsSet).forEach((name) => {
            const script = redis.scriptsSet[name];
            this._shaToScript[script.sha] = script;
            this[name] = redis[name];
            this[name + "Buffer"] = redis[name + "Buffer"];
        });
        redis.addedBuiltinSet.forEach((name) => {
            this[name] = redis[name];
            this[name + "Buffer"] = redis[name + "Buffer"];
        });
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
        const _this = this;
        Object.defineProperty(this, "length", {
            get: function () {
                return _this._queue.length;
            },
        });
    }
    fillResult(value, position) {
        if (this._queue[position].name === "exec" && Array.isArray(value[1])) {
            const execLength = value[1].length;
            for (let i = 0; i < execLength; i++) {
                if (value[1][i] instanceof Error) {
                    continue;
                }
                const cmd = this._queue[position - (execLength - i)];
                try {
                    value[1][i] = cmd.transformReply(value[1][i]);
                }
                catch (err) {
                    value[1][i] = err;
                }
            }
        }
        this._result[position] = value;
        if (--this.replyPending) {
            return;
        }
        if (this.isCluster) {
            let retriable = true;
            let commonError;
            for (let i = 0; i < this._result.length; ++i) {
                const error = this._result[i][0];
                const command = this._queue[i];
                if (error) {
                    if (command.name === "exec" &&
                        error.message ===
                            "EXECABORT Transaction discarded because of previous errors.") {
                        continue;
                    }
                    if (!commonError) {
                        commonError = {
                            name: error.name,
                            message: error.message,
                        };
                    }
                    else if (commonError.name !== error.name ||
                        commonError.message !== error.message) {
                        retriable = false;
                        break;
                    }
                }
                else if (!command.inTransaction) {
                    const isReadOnly = (0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly");
                    if (!isReadOnly) {
                        retriable = false;
                        break;
                    }
                }
            }
            if (commonError && retriable) {
                const _this = this;
                const errv = commonError.message.split(" ");
                const queue = this._queue;
                let inTransaction = false;
                this._queue = [];
                for (let i = 0; i < queue.length; ++i) {
                    if (errv[0] === "ASK" &&
                        !inTransaction &&
                        queue[i].name !== "asking" &&
                        (!queue[i - 1] || queue[i - 1].name !== "asking")) {
                        const asking = new Command_1.default("asking");
                        asking.ignore = true;
                        this.sendCommand(asking);
                    }
                    queue[i].initPromise();
                    this.sendCommand(queue[i]);
                    inTransaction = queue[i].inTransaction;
                }
                let matched = true;
                if (typeof this.leftRedirections === "undefined") {
                    this.leftRedirections = {};
                }
                const exec = function () {
                    _this.exec();
                };
                const cluster = this.redis;
                cluster.handleError(commonError, this.leftRedirections, {
                    moved: function (_slot, key) {
                        _this.preferKey = key;
                        cluster.slots[errv[1]] = [key];
                        cluster._groupsBySlot[errv[1]] =
                            cluster._groupsIds[cluster.slots[errv[1]].join(";")];
                        cluster.refreshSlotsCache();
                        _this.exec();
                    },
                    ask: function (_slot, key) {
                        _this.preferKey = key;
                        _this.exec();
                    },
                    tryagain: exec,
                    clusterDown: exec,
                    connectionClosed: exec,
                    maxRedirections: () => {
                        matched = false;
                    },
                    defaults: () => {
                        matched = false;
                    },
                });
                if (matched) {
                    return;
                }
            }
        }
        let ignoredCount = 0;
        for (let i = 0; i < this._queue.length - ignoredCount; ++i) {
            if (this._queue[i + ignoredCount].ignore) {
                ignoredCount += 1;
            }
            this._result[i] = this._result[i + ignoredCount];
        }
        this.resolve(this._result.slice(0, this._result.length - ignoredCount));
    }
    sendCommand(command) {
        if (this._transactions > 0) {
            command.inTransaction = true;
        }
        const position = this._queue.length;
        command.pipelineIndex = position;
        command.promise
            .then((result) => {
            this.fillResult([null, result], position);
        })
            .catch((error) => {
            this.fillResult([error], position);
        });
        this._queue.push(command);
        return this;
    }
    addBatch(commands) {
        let command, commandName, args;
        for (let i = 0; i < commands.length; ++i) {
            command = commands[i];
            commandName = command[0];
            args = command.slice(1);
            this[commandName].apply(this, args);
        }
        return this;
    }
}
exports["default"] = Pipeline;
// @ts-expect-error
const multi = Pipeline.prototype.multi;
// @ts-expect-error
Pipeline.prototype.multi = function () {
    this._transactions += 1;
    return multi.apply(this, arguments);
};
// @ts-expect-error
const execBuffer = Pipeline.prototype.execBuffer;
// @ts-expect-error
Pipeline.prototype.execBuffer = (0, util_1.deprecate)(function () {
    if (this._transactions > 0) {
        this._transactions -= 1;
    }
    return execBuffer.apply(this, arguments);
}, "Pipeline#execBuffer: Use Pipeline#exec instead");
// NOTE: To avoid an unhandled promise rejection, this will unconditionally always return this.promise,
// which always has the rejection handled by standard-as-callback
// adding the provided rejection callback.
//
// If a different promise instance were returned, that promise would cause its own unhandled promise rejection
// errors, even if that promise unconditionally resolved to **the resolved value of** this.promise.
Pipeline.prototype.exec = function (callback) {
    // Wait for the cluster to be connected, since we need nodes information before continuing
    if (this.isCluster && !this.redis.slots.length) {
        if (this.redis.status === "wait")
            this.redis.connect().catch(utils_1.noop);
        if (callback && !this.nodeifiedPromise) {
            this.nodeifiedPromise = true;
            (0, standard_as_callback_1.default)(this.promise, callback);
        }
        this.redis.delayUntilReady((err) => {
            if (err) {
                this.reject(err);
                return;
            }
            this.exec(callback);
        });
        return this.promise;
    }
    if (this._transactions > 0) {
        this._transactions -= 1;
        return execBuffer.apply(this, arguments);
    }
    if (!this.nodeifiedPromise) {
        this.nodeifiedPromise = true;
        (0, standard_as_callback_1.default)(this.promise, callback);
    }
    if (!this._queue.length) {
        this.resolve([]);
    }
    let pipelineSlot;
    if (this.isCluster) {
        // List of the first key for each command
        const sampleKeys = [];
        for (let i = 0; i < this._queue.length; i++) {
            const keys = this._queue[i].getKeys();
            if (keys.length) {
                sampleKeys.push(keys[0]);
            }
            // For each command, check that the keys belong to the same slot
            if (keys.length && calculateSlot.generateMulti(keys) < 0) {
                this.reject(new Error("All the keys in a pipeline command should belong to the same slot"));
                return this.promise;
            }
        }
        if (sampleKeys.length) {
            pipelineSlot = generateMultiWithNodes(this.redis, sampleKeys);
            if (pipelineSlot < 0) {
                this.reject(new Error("All keys in the pipeline should belong to the same slots allocation group"));
                return this.promise;
            }
        }
        else {
            // Send the pipeline to a random node
            pipelineSlot = (Math.random() * 16384) | 0;
        }
    }
    const _this = this;
    execPipeline();
    return this.promise;
    function execPipeline() {
        let writePending = (_this.replyPending = _this._queue.length);
        let node;
        if (_this.isCluster) {
            node = {
                slot: pipelineSlot,
                redis: _this.redis.connectionPool.nodes.all[_this.preferKey],
            };
        }
        let data = "";
        let buffers;
        const stream = {
            isPipeline: true,
            destination: _this.isCluster ? node : { redis: _this.redis },
            write(writable) {
                if (typeof writable !== "string") {
                    if (!buffers) {
                        buffers = [];
                    }
                    if (data) {
                        buffers.push(Buffer.from(data, "utf8"));
                        data = "";
                    }
                    buffers.push(writable);
                }
                else {
                    data += writable;
                }
                if (!--writePending) {
                    if (buffers) {
                        if (data) {
                            buffers.push(Buffer.from(data, "utf8"));
                        }
                        stream.destination.redis.stream.write(Buffer.concat(buffers));
                    }
                    else {
                        stream.destination.redis.stream.write(data);
                    }
                    // Reset writePending for resending
                    writePending = _this._queue.length;
                    data = "";
                    buffers = undefined;
                }
            },
        };
        for (let i = 0; i < _this._queue.length; ++i) {
            _this.redis.sendCommand(_this._queue[i], stream, node);
        }
        return _this.promise;
    }
};


/***/ }),

/***/ 5695:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commands_1 = __nccwpck_require__(4317);
const events_1 = __nccwpck_require__(4434);
const standard_as_callback_1 = __nccwpck_require__(5659);
const cluster_1 = __nccwpck_require__(1633);
const Command_1 = __nccwpck_require__(5017);
const connectors_1 = __nccwpck_require__(8053);
const SentinelConnector_1 = __nccwpck_require__(8325);
const eventHandler = __nccwpck_require__(1107);
const RedisOptions_1 = __nccwpck_require__(7669);
const ScanStream_1 = __nccwpck_require__(6443);
const transaction_1 = __nccwpck_require__(5708);
const utils_1 = __nccwpck_require__(7670);
const applyMixin_1 = __nccwpck_require__(6985);
const Commander_1 = __nccwpck_require__(3240);
const lodash_1 = __nccwpck_require__(4893);
const Deque = __nccwpck_require__(9036);
const debug = (0, utils_1.Debug)("redis");
/**
 * This is the major component of ioredis.
 * Use it to connect to a standalone Redis server or Sentinels.
 *
 * ```typescript
 * const redis = new Redis(); // Default port is 6379
 * async function main() {
 *   redis.set("foo", "bar");
 *   redis.get("foo", (err, result) => {
 *     // `result` should be "bar"
 *     console.log(err, result);
 *   });
 *   // Or use Promise
 *   const result = await redis.get("foo");
 * }
 * ```
 */
class Redis extends Commander_1.default {
    constructor(arg1, arg2, arg3) {
        super();
        this.status = "wait";
        /**
         * @ignore
         */
        this.isCluster = false;
        this.reconnectTimeout = null;
        this.connectionEpoch = 0;
        this.retryAttempts = 0;
        this.manuallyClosing = false;
        // Prepare autopipelines structures
        this._autoPipelines = new Map();
        this._runningAutoPipelines = new Set();
        this.parseOptions(arg1, arg2, arg3);
        events_1.EventEmitter.call(this);
        this.resetCommandQueue();
        this.resetOfflineQueue();
        if (this.options.Connector) {
            this.connector = new this.options.Connector(this.options);
        }
        else if (this.options.sentinels) {
            const sentinelConnector = new SentinelConnector_1.default(this.options);
            sentinelConnector.emitter = this;
            this.connector = sentinelConnector;
        }
        else {
            this.connector = new connectors_1.StandaloneConnector(this.options);
        }
        if (this.options.scripts) {
            Object.entries(this.options.scripts).forEach(([name, definition]) => {
                this.defineCommand(name, definition);
            });
        }
        // end(or wait) -> connecting -> connect -> ready -> end
        if (this.options.lazyConnect) {
            this.setStatus("wait");
        }
        else {
            this.connect().catch(lodash_1.noop);
        }
    }
    /**
     * Create a Redis instance.
     * This is the same as `new Redis()` but is included for compatibility with node-redis.
     */
    static createClient(...args) {
        return new Redis(...args);
    }
    get autoPipelineQueueSize() {
        let queued = 0;
        for (const pipeline of this._autoPipelines.values()) {
            queued += pipeline.length;
        }
        return queued;
    }
    /**
     * Create a connection to Redis.
     * This method will be invoked automatically when creating a new Redis instance
     * unless `lazyConnect: true` is passed.
     *
     * When calling this method manually, a Promise is returned, which will
     * be resolved when the connection status is ready.
     */
    connect(callback) {
        const promise = new Promise((resolve, reject) => {
            if (this.status === "connecting" ||
                this.status === "connect" ||
                this.status === "ready") {
                reject(new Error("Redis is already connecting/connected"));
                return;
            }
            this.connectionEpoch += 1;
            this.setStatus("connecting");
            const { options } = this;
            this.condition = {
                select: options.db,
                auth: options.username
                    ? [options.username, options.password]
                    : options.password,
                subscriber: false,
            };
            const _this = this;
            (0, standard_as_callback_1.default)(this.connector.connect(function (type, err) {
                _this.silentEmit(type, err);
            }), function (err, stream) {
                if (err) {
                    _this.flushQueue(err);
                    _this.silentEmit("error", err);
                    reject(err);
                    _this.setStatus("end");
                    return;
                }
                let CONNECT_EVENT = options.tls ? "secureConnect" : "connect";
                if ("sentinels" in options &&
                    options.sentinels &&
                    !options.enableTLSForSentinelMode) {
                    CONNECT_EVENT = "connect";
                }
                _this.stream = stream;
                if (options.noDelay) {
                    stream.setNoDelay(true);
                }
                // Node ignores setKeepAlive before connect, therefore we wait for the event:
                // https://github.com/nodejs/node/issues/31663
                if (typeof options.keepAlive === "number") {
                    if (stream.connecting) {
                        stream.once(CONNECT_EVENT, () => {
                            stream.setKeepAlive(true, options.keepAlive);
                        });
                    }
                    else {
                        stream.setKeepAlive(true, options.keepAlive);
                    }
                }
                if (stream.connecting) {
                    stream.once(CONNECT_EVENT, eventHandler.connectHandler(_this));
                    if (options.connectTimeout) {
                        /*
                         * Typically, Socket#setTimeout(0) will clear the timer
                         * set before. However, in some platforms (Electron 3.x~4.x),
                         * the timer will not be cleared. So we introduce a variable here.
                         *
                         * See https://github.com/electron/electron/issues/14915
                         */
                        let connectTimeoutCleared = false;
                        stream.setTimeout(options.connectTimeout, function () {
                            if (connectTimeoutCleared) {
                                return;
                            }
                            stream.setTimeout(0);
                            stream.destroy();
                            const err = new Error("connect ETIMEDOUT");
                            // @ts-expect-error
                            err.errorno = "ETIMEDOUT";
                            // @ts-expect-error
                            err.code = "ETIMEDOUT";
                            // @ts-expect-error
                            err.syscall = "connect";
                            eventHandler.errorHandler(_this)(err);
                        });
                        stream.once(CONNECT_EVENT, function () {
                            connectTimeoutCleared = true;
                            stream.setTimeout(0);
                        });
                    }
                }
                else if (stream.destroyed) {
                    const firstError = _this.connector.firstError;
                    if (firstError) {
                        process.nextTick(() => {
                            eventHandler.errorHandler(_this)(firstError);
                        });
                    }
                    process.nextTick(eventHandler.closeHandler(_this));
                }
                else {
                    process.nextTick(eventHandler.connectHandler(_this));
                }
                if (!stream.destroyed) {
                    stream.once("error", eventHandler.errorHandler(_this));
                    stream.once("close", eventHandler.closeHandler(_this));
                }
                const connectionReadyHandler = function () {
                    _this.removeListener("close", connectionCloseHandler);
                    resolve();
                };
                var connectionCloseHandler = function () {
                    _this.removeListener("ready", connectionReadyHandler);
                    reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
                };
                _this.once("ready", connectionReadyHandler);
                _this.once("close", connectionCloseHandler);
            });
        });
        return (0, standard_as_callback_1.default)(promise, callback);
    }
    /**
     * Disconnect from Redis.
     *
     * This method closes the connection immediately,
     * and may lose some pending replies that haven't written to client.
     * If you want to wait for the pending replies, use Redis#quit instead.
     */
    disconnect(reconnect = false) {
        if (!reconnect) {
            this.manuallyClosing = true;
        }
        if (this.reconnectTimeout && !reconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        if (this.status === "wait") {
            eventHandler.closeHandler(this)();
        }
        else {
            this.connector.disconnect();
        }
    }
    /**
     * Disconnect from Redis.
     *
     * @deprecated
     */
    end() {
        this.disconnect();
    }
    /**
     * Create a new instance with the same options as the current one.
     *
     * @example
     * ```js
     * var redis = new Redis(6380);
     * var anotherRedis = redis.duplicate();
     * ```
     */
    duplicate(override) {
        return new Redis({ ...this.options, ...override });
    }
    /**
     * Mode of the connection.
     *
     * One of `"normal"`, `"subscriber"`, or `"monitor"`. When the connection is
     * not in `"normal"` mode, certain commands are not allowed.
     */
    get mode() {
        var _a;
        return this.options.monitor
            ? "monitor"
            : ((_a = this.condition) === null || _a === void 0 ? void 0 : _a.subscriber)
                ? "subscriber"
                : "normal";
    }
    /**
     * Listen for all requests received by the server in real time.
     *
     * This command will create a new connection to Redis and send a
     * MONITOR command via the new connection in order to avoid disturbing
     * the current connection.
     *
     * @param callback The callback function. If omit, a promise will be returned.
     * @example
     * ```js
     * var redis = new Redis();
     * redis.monitor(function (err, monitor) {
     *   // Entering monitoring mode.
     *   monitor.on('monitor', function (time, args, source, database) {
     *     console.log(time + ": " + util.inspect(args));
     *   });
     * });
     *
     * // supports promise as well as other commands
     * redis.monitor().then(function (monitor) {
     *   monitor.on('monitor', function (time, args, source, database) {
     *     console.log(time + ": " + util.inspect(args));
     *   });
     * });
     * ```
     */
    monitor(callback) {
        const monitorInstance = this.duplicate({
            monitor: true,
            lazyConnect: false,
        });
        return (0, standard_as_callback_1.default)(new Promise(function (resolve, reject) {
            monitorInstance.once("error", reject);
            monitorInstance.once("monitoring", function () {
                resolve(monitorInstance);
            });
        }), callback);
    }
    /**
     * Send a command to Redis
     *
     * This method is used internally and in most cases you should not
     * use it directly. If you need to send a command that is not supported
     * by the library, you can use the `call` method:
     *
     * ```js
     * const redis = new Redis();
     *
     * redis.call('set', 'foo', 'bar');
     * // or
     * redis.call(['set', 'foo', 'bar']);
     * ```
     *
     * @ignore
     */
    sendCommand(command, stream) {
        var _a, _b;
        if (this.status === "wait") {
            this.connect().catch(lodash_1.noop);
        }
        if (this.status === "end") {
            command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
            return command.promise;
        }
        if (((_a = this.condition) === null || _a === void 0 ? void 0 : _a.subscriber) &&
            !Command_1.default.checkFlag("VALID_IN_SUBSCRIBER_MODE", command.name)) {
            command.reject(new Error("Connection in subscriber mode, only subscriber commands may be used"));
            return command.promise;
        }
        if (typeof this.options.commandTimeout === "number") {
            command.setTimeout(this.options.commandTimeout);
        }
        let writable = this.status === "ready" ||
            (!stream &&
                this.status === "connect" &&
                (0, commands_1.exists)(command.name) &&
                (0, commands_1.hasFlag)(command.name, "loading"));
        if (!this.stream) {
            writable = false;
        }
        else if (!this.stream.writable) {
            writable = false;
            // @ts-expect-error
        }
        else if (this.stream._writableState && this.stream._writableState.ended) {
            // TODO: We should be able to remove this as the PR has already been merged.
            // https://github.com/iojs/io.js/pull/1217
            writable = false;
        }
        if (!writable) {
            if (!this.options.enableOfflineQueue) {
                command.reject(new Error("Stream isn't writeable and enableOfflineQueue options is false"));
                return command.promise;
            }
            if (command.name === "quit" && this.offlineQueue.length === 0) {
                this.disconnect();
                command.resolve(Buffer.from("OK"));
                return command.promise;
            }
            // @ts-expect-error
            if (debug.enabled) {
                debug("queue command[%s]: %d -> %s(%o)", this._getDescription(), this.condition.select, command.name, command.args);
            }
            this.offlineQueue.push({
                command: command,
                stream: stream,
                select: this.condition.select,
            });
        }
        else {
            // @ts-expect-error
            if (debug.enabled) {
                debug("write command[%s]: %d -> %s(%o)", this._getDescription(), (_b = this.condition) === null || _b === void 0 ? void 0 : _b.select, command.name, command.args);
            }
            if (stream) {
                if ("isPipeline" in stream && stream.isPipeline) {
                    stream.write(command.toWritable(stream.destination.redis.stream));
                }
                else {
                    stream.write(command.toWritable(stream));
                }
            }
            else {
                this.stream.write(command.toWritable(this.stream));
            }
            this.commandQueue.push({
                command: command,
                stream: stream,
                select: this.condition.select,
            });
            if (Command_1.default.checkFlag("WILL_DISCONNECT", command.name)) {
                this.manuallyClosing = true;
            }
            if (this.options.socketTimeout !== undefined && this.socketTimeoutTimer === undefined) {
                this.setSocketTimeout();
            }
        }
        if (command.name === "select" && (0, utils_1.isInt)(command.args[0])) {
            const db = parseInt(command.args[0], 10);
            if (this.condition.select !== db) {
                this.condition.select = db;
                this.emit("select", db);
                debug("switch to db [%d]", this.condition.select);
            }
        }
        return command.promise;
    }
    setSocketTimeout() {
        this.socketTimeoutTimer = setTimeout(() => {
            this.stream.destroy(new Error(`Socket timeout. Expecting data, but didn't receive any in ${this.options.socketTimeout}ms.`));
            this.socketTimeoutTimer = undefined;
        }, this.options.socketTimeout);
        // this handler must run after the "data" handler in "DataHandler"
        // so that `this.commandQueue.length` will be updated
        this.stream.once("data", () => {
            clearTimeout(this.socketTimeoutTimer);
            this.socketTimeoutTimer = undefined;
            if (this.commandQueue.length === 0)
                return;
            this.setSocketTimeout();
        });
    }
    scanStream(options) {
        return this.createScanStream("scan", { options });
    }
    scanBufferStream(options) {
        return this.createScanStream("scanBuffer", { options });
    }
    sscanStream(key, options) {
        return this.createScanStream("sscan", { key, options });
    }
    sscanBufferStream(key, options) {
        return this.createScanStream("sscanBuffer", { key, options });
    }
    hscanStream(key, options) {
        return this.createScanStream("hscan", { key, options });
    }
    hscanBufferStream(key, options) {
        return this.createScanStream("hscanBuffer", { key, options });
    }
    zscanStream(key, options) {
        return this.createScanStream("zscan", { key, options });
    }
    zscanBufferStream(key, options) {
        return this.createScanStream("zscanBuffer", { key, options });
    }
    /**
     * Emit only when there's at least one listener.
     *
     * @ignore
     */
    silentEmit(eventName, arg) {
        let error;
        if (eventName === "error") {
            error = arg;
            if (this.status === "end") {
                return;
            }
            if (this.manuallyClosing) {
                // ignore connection related errors when manually disconnecting
                if (error instanceof Error &&
                    (error.message === utils_1.CONNECTION_CLOSED_ERROR_MSG ||
                        // @ts-expect-error
                        error.syscall === "connect" ||
                        // @ts-expect-error
                        error.syscall === "read")) {
                    return;
                }
            }
        }
        if (this.listeners(eventName).length > 0) {
            return this.emit.apply(this, arguments);
        }
        if (error && error instanceof Error) {
            console.error("[ioredis] Unhandled error event:", error.stack);
        }
        return false;
    }
    /**
     * @ignore
     */
    recoverFromFatalError(_commandError, err, options) {
        this.flushQueue(err, options);
        this.silentEmit("error", err);
        this.disconnect(true);
    }
    /**
     * @ignore
     */
    handleReconnection(err, item) {
        var _a;
        let needReconnect = false;
        if (this.options.reconnectOnError) {
            needReconnect = this.options.reconnectOnError(err);
        }
        switch (needReconnect) {
            case 1:
            case true:
                if (this.status !== "reconnecting") {
                    this.disconnect(true);
                }
                item.command.reject(err);
                break;
            case 2:
                if (this.status !== "reconnecting") {
                    this.disconnect(true);
                }
                if (((_a = this.condition) === null || _a === void 0 ? void 0 : _a.select) !== item.select &&
                    item.command.name !== "select") {
                    this.select(item.select);
                }
                // TODO
                // @ts-expect-error
                this.sendCommand(item.command);
                break;
            default:
                item.command.reject(err);
        }
    }
    /**
     * Get description of the connection. Used for debugging.
     */
    _getDescription() {
        let description;
        if ("path" in this.options && this.options.path) {
            description = this.options.path;
        }
        else if (this.stream &&
            this.stream.remoteAddress &&
            this.stream.remotePort) {
            description = this.stream.remoteAddress + ":" + this.stream.remotePort;
        }
        else if ("host" in this.options && this.options.host) {
            description = this.options.host + ":" + this.options.port;
        }
        else {
            // Unexpected
            description = "";
        }
        if (this.options.connectionName) {
            description += ` (${this.options.connectionName})`;
        }
        return description;
    }
    resetCommandQueue() {
        this.commandQueue = new Deque();
    }
    resetOfflineQueue() {
        this.offlineQueue = new Deque();
    }
    parseOptions(...args) {
        const options = {};
        let isTls = false;
        for (let i = 0; i < args.length; ++i) {
            const arg = args[i];
            if (arg === null || typeof arg === "undefined") {
                continue;
            }
            if (typeof arg === "object") {
                (0, lodash_1.defaults)(options, arg);
            }
            else if (typeof arg === "string") {
                (0, lodash_1.defaults)(options, (0, utils_1.parseURL)(arg));
                if (arg.startsWith("rediss://")) {
                    isTls = true;
                }
            }
            else if (typeof arg === "number") {
                options.port = arg;
            }
            else {
                throw new Error("Invalid argument " + arg);
            }
        }
        if (isTls) {
            (0, lodash_1.defaults)(options, { tls: true });
        }
        (0, lodash_1.defaults)(options, Redis.defaultOptions);
        if (typeof options.port === "string") {
            options.port = parseInt(options.port, 10);
        }
        if (typeof options.db === "string") {
            options.db = parseInt(options.db, 10);
        }
        // @ts-expect-error
        this.options = (0, utils_1.resolveTLSProfile)(options);
    }
    /**
     * Change instance's status
     */
    setStatus(status, arg) {
        // @ts-expect-error
        if (debug.enabled) {
            debug("status[%s]: %s -> %s", this._getDescription(), this.status || "[empty]", status);
        }
        this.status = status;
        process.nextTick(this.emit.bind(this, status, arg));
    }
    createScanStream(command, { key, options = {} }) {
        return new ScanStream_1.default({
            objectMode: true,
            key: key,
            redis: this,
            command: command,
            ...options,
        });
    }
    /**
     * Flush offline queue and command queue with error.
     *
     * @param error The error object to send to the commands
     * @param options options
     */
    flushQueue(error, options) {
        options = (0, lodash_1.defaults)({}, options, {
            offlineQueue: true,
            commandQueue: true,
        });
        let item;
        if (options.offlineQueue) {
            while ((item = this.offlineQueue.shift())) {
                item.command.reject(error);
            }
        }
        if (options.commandQueue) {
            if (this.commandQueue.length > 0) {
                if (this.stream) {
                    this.stream.removeAllListeners("data");
                }
                while ((item = this.commandQueue.shift())) {
                    item.command.reject(error);
                }
            }
        }
    }
    /**
     * Check whether Redis has finished loading the persistent data and is able to
     * process commands.
     */
    _readyCheck(callback) {
        const _this = this;
        this.info(function (err, res) {
            if (err) {
                if (err.message && err.message.includes("NOPERM")) {
                    console.warn(`Skipping the ready check because INFO command fails: "${err.message}". You can disable ready check with "enableReadyCheck". More: https://github.com/luin/ioredis/wiki/Disable-ready-check.`);
                    return callback(null, {});
                }
                return callback(err);
            }
            if (typeof res !== "string") {
                return callback(null, res);
            }
            const info = {};
            const lines = res.split("\r\n");
            for (let i = 0; i < lines.length; ++i) {
                const [fieldName, ...fieldValueParts] = lines[i].split(":");
                const fieldValue = fieldValueParts.join(":");
                if (fieldValue) {
                    info[fieldName] = fieldValue;
                }
            }
            if (!info.loading || info.loading === "0") {
                callback(null, info);
            }
            else {
                const loadingEtaMs = (info.loading_eta_seconds || 1) * 1000;
                const retryTime = _this.options.maxLoadingRetryTime &&
                    _this.options.maxLoadingRetryTime < loadingEtaMs
                    ? _this.options.maxLoadingRetryTime
                    : loadingEtaMs;
                debug("Redis server still loading, trying again in " + retryTime + "ms");
                setTimeout(function () {
                    _this._readyCheck(callback);
                }, retryTime);
            }
        }).catch(lodash_1.noop);
    }
}
Redis.Cluster = cluster_1.default;
Redis.Command = Command_1.default;
/**
 * Default options
 */
Redis.defaultOptions = RedisOptions_1.DEFAULT_REDIS_OPTIONS;
(0, applyMixin_1.default)(Redis, events_1.EventEmitter);
(0, transaction_1.addTransactionSupport)(Redis.prototype);
exports["default"] = Redis;


/***/ }),

/***/ 6443:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const stream_1 = __nccwpck_require__(2203);
/**
 * Convenient class to convert the process of scanning keys to a readable stream.
 */
class ScanStream extends stream_1.Readable {
    constructor(opt) {
        super(opt);
        this.opt = opt;
        this._redisCursor = "0";
        this._redisDrained = false;
    }
    _read() {
        if (this._redisDrained) {
            this.push(null);
            return;
        }
        const args = [this._redisCursor];
        if (this.opt.key) {
            args.unshift(this.opt.key);
        }
        if (this.opt.match) {
            args.push("MATCH", this.opt.match);
        }
        if (this.opt.type) {
            args.push("TYPE", this.opt.type);
        }
        if (this.opt.count) {
            args.push("COUNT", String(this.opt.count));
        }
        this.opt.redis[this.opt.command](args, (err, res) => {
            if (err) {
                this.emit("error", err);
                return;
            }
            this._redisCursor = res[0] instanceof Buffer ? res[0].toString() : res[0];
            if (this._redisCursor === "0") {
                this._redisDrained = true;
            }
            this.push(res[1]);
        });
    }
    close() {
        this._redisDrained = true;
    }
}
exports["default"] = ScanStream;


/***/ }),

/***/ 6833:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const crypto_1 = __nccwpck_require__(6982);
const Command_1 = __nccwpck_require__(5017);
const standard_as_callback_1 = __nccwpck_require__(5659);
class Script {
    constructor(lua, numberOfKeys = null, keyPrefix = "", readOnly = false) {
        this.lua = lua;
        this.numberOfKeys = numberOfKeys;
        this.keyPrefix = keyPrefix;
        this.readOnly = readOnly;
        this.sha = (0, crypto_1.createHash)("sha1").update(lua).digest("hex");
        const sha = this.sha;
        const socketHasScriptLoaded = new WeakSet();
        this.Command = class CustomScriptCommand extends Command_1.default {
            toWritable(socket) {
                const origReject = this.reject;
                this.reject = (err) => {
                    if (err.message.indexOf("NOSCRIPT") !== -1) {
                        socketHasScriptLoaded.delete(socket);
                    }
                    origReject.call(this, err);
                };
                if (!socketHasScriptLoaded.has(socket)) {
                    socketHasScriptLoaded.add(socket);
                    this.name = "eval";
                    this.args[0] = lua;
                }
                else if (this.name === "eval") {
                    this.name = "evalsha";
                    this.args[0] = sha;
                }
                return super.toWritable(socket);
            }
        };
    }
    execute(container, args, options, callback) {
        if (typeof this.numberOfKeys === "number") {
            args.unshift(this.numberOfKeys);
        }
        if (this.keyPrefix) {
            options.keyPrefix = this.keyPrefix;
        }
        if (this.readOnly) {
            options.readOnly = true;
        }
        const evalsha = new this.Command("evalsha", [this.sha, ...args], options);
        evalsha.promise = evalsha.promise.catch((err) => {
            if (err.message.indexOf("NOSCRIPT") === -1) {
                throw err;
            }
            // Resend the same custom evalsha command that gets transformed
            // to an eval in case it's not loaded yet on the connection.
            const resend = new this.Command("evalsha", [this.sha, ...args], options);
            const client = container.isPipeline ? container.redis : container;
            return client.sendCommand(resend);
        });
        (0, standard_as_callback_1.default)(evalsha.promise, callback);
        return container.sendCommand(evalsha);
    }
}
exports["default"] = Script;


/***/ }),

/***/ 2183:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Tiny class to simplify dealing with subscription set
 */
class SubscriptionSet {
    constructor() {
        this.set = {
            subscribe: {},
            psubscribe: {},
            ssubscribe: {},
        };
    }
    add(set, channel) {
        this.set[mapSet(set)][channel] = true;
    }
    del(set, channel) {
        delete this.set[mapSet(set)][channel];
    }
    channels(set) {
        return Object.keys(this.set[mapSet(set)]);
    }
    isEmpty() {
        return (this.channels("subscribe").length === 0 &&
            this.channels("psubscribe").length === 0 &&
            this.channels("ssubscribe").length === 0);
    }
}
exports["default"] = SubscriptionSet;
function mapSet(set) {
    if (set === "unsubscribe") {
        return "subscribe";
    }
    if (set === "punsubscribe") {
        return "psubscribe";
    }
    if (set === "sunsubscribe") {
        return "ssubscribe";
    }
    return set;
}


/***/ }),

/***/ 8596:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.executeWithAutoPipelining = exports.getFirstValueInFlattenedArray = exports.shouldUseAutoPipelining = exports.notAllowedAutoPipelineCommands = exports.kCallbacks = exports.kExec = void 0;
const lodash_1 = __nccwpck_require__(4893);
const calculateSlot = __nccwpck_require__(8999);
const standard_as_callback_1 = __nccwpck_require__(5659);
exports.kExec = Symbol("exec");
exports.kCallbacks = Symbol("callbacks");
exports.notAllowedAutoPipelineCommands = [
    "auth",
    "info",
    "script",
    "quit",
    "cluster",
    "pipeline",
    "multi",
    "subscribe",
    "psubscribe",
    "unsubscribe",
    "unpsubscribe",
    "select",
];
function executeAutoPipeline(client, slotKey) {
    /*
      If a pipeline is already executing, keep queueing up commands
      since ioredis won't serve two pipelines at the same time
    */
    if (client._runningAutoPipelines.has(slotKey)) {
        return;
    }
    if (!client._autoPipelines.has(slotKey)) {
        /*
          Rare edge case. Somehow, something has deleted this running autopipeline in an immediate
          call to executeAutoPipeline.
         
          Maybe the callback in the pipeline.exec is sometimes called in the same tick,
          e.g. if redis is disconnected?
        */
        return;
    }
    client._runningAutoPipelines.add(slotKey);
    // Get the pipeline and immediately delete it so that new commands are queued on a new pipeline
    const pipeline = client._autoPipelines.get(slotKey);
    client._autoPipelines.delete(slotKey);
    const callbacks = pipeline[exports.kCallbacks];
    // Stop keeping a reference to callbacks immediately after the callbacks stop being used.
    // This allows the GC to reclaim objects referenced by callbacks, especially with 16384 slots
    // in Redis.Cluster
    pipeline[exports.kCallbacks] = null;
    // Perform the call
    pipeline.exec(function (err, results) {
        client._runningAutoPipelines.delete(slotKey);
        /*
          Invoke all callback in nextTick so the stack is cleared
          and callbacks can throw errors without affecting other callbacks.
        */
        if (err) {
            for (let i = 0; i < callbacks.length; i++) {
                process.nextTick(callbacks[i], err);
            }
        }
        else {
            for (let i = 0; i < callbacks.length; i++) {
                process.nextTick(callbacks[i], ...results[i]);
            }
        }
        // If there is another pipeline on the same node, immediately execute it without waiting for nextTick
        if (client._autoPipelines.has(slotKey)) {
            executeAutoPipeline(client, slotKey);
        }
    });
}
function shouldUseAutoPipelining(client, functionName, commandName) {
    return (functionName &&
        client.options.enableAutoPipelining &&
        !client.isPipeline &&
        !exports.notAllowedAutoPipelineCommands.includes(commandName) &&
        !client.options.autoPipeliningIgnoredCommands.includes(commandName));
}
exports.shouldUseAutoPipelining = shouldUseAutoPipelining;
function getFirstValueInFlattenedArray(args) {
    for (let i = 0; i < args.length; i++) {
        const arg = args[i];
        if (typeof arg === "string") {
            return arg;
        }
        else if (Array.isArray(arg) || (0, lodash_1.isArguments)(arg)) {
            if (arg.length === 0) {
                continue;
            }
            return arg[0];
        }
        const flattened = [arg].flat();
        if (flattened.length > 0) {
            return flattened[0];
        }
    }
    return undefined;
}
exports.getFirstValueInFlattenedArray = getFirstValueInFlattenedArray;
function executeWithAutoPipelining(client, functionName, commandName, args, callback) {
    // On cluster mode let's wait for slots to be available
    if (client.isCluster && !client.slots.length) {
        if (client.status === "wait")
            client.connect().catch(lodash_1.noop);
        return (0, standard_as_callback_1.default)(new Promise(function (resolve, reject) {
            client.delayUntilReady((err) => {
                if (err) {
                    reject(err);
                    return;
                }
                executeWithAutoPipelining(client, functionName, commandName, args, null).then(resolve, reject);
            });
        }), callback);
    }
    // If we have slot information, we can improve routing by grouping slots served by the same subset of nodes
    // Note that the first value in args may be a (possibly empty) array.
    // ioredis will only flatten one level of the array, in the Command constructor.
    const prefix = client.options.keyPrefix || "";
    const slotKey = client.isCluster
        ? client.slots[calculateSlot(`${prefix}${getFirstValueInFlattenedArray(args)}`)].join(",")
        : "main";
    if (!client._autoPipelines.has(slotKey)) {
        const pipeline = client.pipeline();
        pipeline[exports.kExec] = false;
        pipeline[exports.kCallbacks] = [];
        client._autoPipelines.set(slotKey, pipeline);
    }
    const pipeline = client._autoPipelines.get(slotKey);
    /*
      Mark the pipeline as scheduled.
      The symbol will make sure that the pipeline is only scheduled once per tick.
      New commands are appended to an already scheduled pipeline.
    */
    if (!pipeline[exports.kExec]) {
        pipeline[exports.kExec] = true;
        /*
          Deferring with setImmediate so we have a chance to capture multiple
          commands that can be scheduled by I/O events already in the event loop queue.
        */
        setImmediate(executeAutoPipeline, client, slotKey);
    }
    // Create the promise which will execute the command in the pipeline.
    const autoPipelinePromise = new Promise(function (resolve, reject) {
        pipeline[exports.kCallbacks].push(function (err, value) {
            if (err) {
                reject(err);
                return;
            }
            resolve(value);
        });
        if (functionName === "call") {
            args.unshift(commandName);
        }
        pipeline[functionName](...args);
    });
    return (0, standard_as_callback_1.default)(autoPipelinePromise, callback);
}
exports.executeWithAutoPipelining = executeWithAutoPipelining;


/***/ }),

/***/ 1885:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_CLUSTER_OPTIONS = void 0;
const dns_1 = __nccwpck_require__(2250);
exports.DEFAULT_CLUSTER_OPTIONS = {
    clusterRetryStrategy: (times) => Math.min(100 + times * 2, 2000),
    enableOfflineQueue: true,
    enableReadyCheck: true,
    scaleReads: "master",
    maxRedirections: 16,
    retryDelayOnMoved: 0,
    retryDelayOnFailover: 100,
    retryDelayOnClusterDown: 100,
    retryDelayOnTryAgain: 100,
    slotsRefreshTimeout: 1000,
    useSRVRecords: false,
    resolveSrv: dns_1.resolveSrv,
    dnsLookup: dns_1.lookup,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: [],
};


/***/ }),

/***/ 8093:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const util_1 = __nccwpck_require__(6617);
const utils_1 = __nccwpck_require__(7670);
const Redis_1 = __nccwpck_require__(5695);
const debug = (0, utils_1.Debug)("cluster:subscriber");
class ClusterSubscriber {
    constructor(connectionPool, emitter) {
        this.connectionPool = connectionPool;
        this.emitter = emitter;
        this.started = false;
        this.subscriber = null;
        this.onSubscriberEnd = () => {
            if (!this.started) {
                debug("subscriber has disconnected, but ClusterSubscriber is not started, so not reconnecting.");
                return;
            }
            // If the subscriber closes whilst it's still the active connection,
            // we might as well try to connecting to a new node if possible to
            // minimise the number of missed publishes.
            debug("subscriber has disconnected, selecting a new one...");
            this.selectSubscriber();
        };
        // If the current node we're using as the subscriber disappears
        // from the node pool for some reason, we will select a new one
        // to connect to.
        // Note that this event is only triggered if the connection to
        // the node has been used; cluster subscriptions are setup with
        // lazyConnect = true. It's possible for the subscriber node to
        // disappear without this method being called!
        // See https://github.com/luin/ioredis/pull/1589
        this.connectionPool.on("-node", (_, key) => {
            if (!this.started || !this.subscriber) {
                return;
            }
            if ((0, util_1.getNodeKey)(this.subscriber.options) === key) {
                debug("subscriber has left, selecting a new one...");
                this.selectSubscriber();
            }
        });
        this.connectionPool.on("+node", () => {
            if (!this.started || this.subscriber) {
                return;
            }
            debug("a new node is discovered and there is no subscriber, selecting a new one...");
            this.selectSubscriber();
        });
    }
    getInstance() {
        return this.subscriber;
    }
    start() {
        this.started = true;
        this.selectSubscriber();
        debug("started");
    }
    stop() {
        this.started = false;
        if (this.subscriber) {
            this.subscriber.disconnect();
            this.subscriber = null;
        }
        debug("stopped");
    }
    selectSubscriber() {
        const lastActiveSubscriber = this.lastActiveSubscriber;
        // Disconnect the previous subscriber even if there
        // will not be a new one.
        if (lastActiveSubscriber) {
            lastActiveSubscriber.off("end", this.onSubscriberEnd);
            lastActiveSubscriber.disconnect();
        }
        if (this.subscriber) {
            this.subscriber.off("end", this.onSubscriberEnd);
            this.subscriber.disconnect();
        }
        const sampleNode = (0, utils_1.sample)(this.connectionPool.getNodes());
        if (!sampleNode) {
            debug("selecting subscriber failed since there is no node discovered in the cluster yet");
            this.subscriber = null;
            return;
        }
        const { options } = sampleNode;
        debug("selected a subscriber %s:%s", options.host, options.port);
        /*
         * Create a specialized Redis connection for the subscription.
         * Note that auto reconnection is enabled here.
         *
         * `enableReadyCheck` is also enabled because although subscription is allowed
         * while redis is loading data from the disk, we can check if the password
         * provided for the subscriber is correct, and if not, the current subscriber
         * will be disconnected and a new subscriber will be selected.
         */
        this.subscriber = new Redis_1.default({
            port: options.port,
            host: options.host,
            username: options.username,
            password: options.password,
            enableReadyCheck: true,
            connectionName: (0, util_1.getConnectionName)("subscriber", options.connectionName),
            lazyConnect: true,
            tls: options.tls,
            // Don't try to reconnect the subscriber connection. If the connection fails
            // we will get an end event (handled below), at which point we'll pick a new
            // node from the pool and try to connect to that as the subscriber connection.
            retryStrategy: null,
        });
        // Ignore the errors since they're handled in the connection pool.
        this.subscriber.on("error", utils_1.noop);
        // The node we lost connection to may not come back up in a
        // reasonable amount of time (e.g. a slave that's taken down
        // for maintainence), we could potentially miss many published
        // messages so we should reconnect as quickly as possible, to
        // a different node if needed.
        this.subscriber.once("end", this.onSubscriberEnd);
        // Re-subscribe previous channels
        const previousChannels = { subscribe: [], psubscribe: [], ssubscribe: [] };
        if (lastActiveSubscriber) {
            const condition = lastActiveSubscriber.condition || lastActiveSubscriber.prevCondition;
            if (condition && condition.subscriber) {
                previousChannels.subscribe = condition.subscriber.channels("subscribe");
                previousChannels.psubscribe =
                    condition.subscriber.channels("psubscribe");
                previousChannels.ssubscribe =
                    condition.subscriber.channels("ssubscribe");
            }
        }
        if (previousChannels.subscribe.length ||
            previousChannels.psubscribe.length ||
            previousChannels.ssubscribe.length) {
            let pending = 0;
            for (const type of ["subscribe", "psubscribe", "ssubscribe"]) {
                const channels = previousChannels[type];
                if (channels.length) {
                    pending += 1;
                    debug("%s %d channels", type, channels.length);
                    this.subscriber[type](channels)
                        .then(() => {
                        if (!--pending) {
                            this.lastActiveSubscriber = this.subscriber;
                        }
                    })
                        .catch(() => {
                        // TODO: should probably disconnect the subscriber and try again.
                        debug("failed to %s %d channels", type, channels.length);
                    });
                }
            }
        }
        else {
            this.lastActiveSubscriber = this.subscriber;
        }
        for (const event of [
            "message",
            "messageBuffer",
            "smessage",
            "smessageBuffer",
        ]) {
            this.subscriber.on(event, (arg1, arg2) => {
                this.emitter.emit(event, arg1, arg2);
            });
        }
        for (const event of ["pmessage", "pmessageBuffer"]) {
            this.subscriber.on(event, (arg1, arg2, arg3) => {
                this.emitter.emit(event, arg1, arg2, arg3);
            });
        }
    }
}
exports["default"] = ClusterSubscriber;


/***/ }),

/***/ 9107:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __nccwpck_require__(4434);
const utils_1 = __nccwpck_require__(7670);
const util_1 = __nccwpck_require__(6617);
const Redis_1 = __nccwpck_require__(5695);
const debug = (0, utils_1.Debug)("cluster:connectionPool");
class ConnectionPool extends events_1.EventEmitter {
    constructor(redisOptions) {
        super();
        this.redisOptions = redisOptions;
        // master + slave = all
        this.nodes = {
            all: {},
            master: {},
            slave: {},
        };
        this.specifiedOptions = {};
    }
    getNodes(role = "all") {
        const nodes = this.nodes[role];
        return Object.keys(nodes).map((key) => nodes[key]);
    }
    getInstanceByKey(key) {
        return this.nodes.all[key];
    }
    getSampleInstance(role) {
        const keys = Object.keys(this.nodes[role]);
        const sampleKey = (0, utils_1.sample)(keys);
        return this.nodes[role][sampleKey];
    }
    /**
     * Find or create a connection to the node
     */
    findOrCreate(node, readOnly = false) {
        const key = (0, util_1.getNodeKey)(node);
        readOnly = Boolean(readOnly);
        if (this.specifiedOptions[key]) {
            Object.assign(node, this.specifiedOptions[key]);
        }
        else {
            this.specifiedOptions[key] = node;
        }
        let redis;
        if (this.nodes.all[key]) {
            redis = this.nodes.all[key];
            if (redis.options.readOnly !== readOnly) {
                redis.options.readOnly = readOnly;
                debug("Change role of %s to %s", key, readOnly ? "slave" : "master");
                redis[readOnly ? "readonly" : "readwrite"]().catch(utils_1.noop);
                if (readOnly) {
                    delete this.nodes.master[key];
                    this.nodes.slave[key] = redis;
                }
                else {
                    delete this.nodes.slave[key];
                    this.nodes.master[key] = redis;
                }
            }
        }
        else {
            debug("Connecting to %s as %s", key, readOnly ? "slave" : "master");
            redis = new Redis_1.default((0, utils_1.defaults)({
                // Never try to reconnect when a node is lose,
                // instead, waiting for a `MOVED` error and
                // fetch the slots again.
                retryStrategy: null,
                // Offline queue should be enabled so that
                // we don't need to wait for the `ready` event
                // before sending commands to the node.
                enableOfflineQueue: true,
                readOnly: readOnly,
            }, node, this.redisOptions, { lazyConnect: true }));
            this.nodes.all[key] = redis;
            this.nodes[readOnly ? "slave" : "master"][key] = redis;
            redis.once("end", () => {
                this.removeNode(key);
                this.emit("-node", redis, key);
                if (!Object.keys(this.nodes.all).length) {
                    this.emit("drain");
                }
            });
            this.emit("+node", redis, key);
            redis.on("error", function (error) {
                this.emit("nodeError", error, key);
            });
        }
        return redis;
    }
    /**
     * Reset the pool with a set of nodes.
     * The old node will be removed.
     */
    reset(nodes) {
        debug("Reset with %O", nodes);
        const newNodes = {};
        nodes.forEach((node) => {
            const key = (0, util_1.getNodeKey)(node);
            // Don't override the existing (master) node
            // when the current one is slave.
            if (!(node.readOnly && newNodes[key])) {
                newNodes[key] = node;
            }
        });
        Object.keys(this.nodes.all).forEach((key) => {
            if (!newNodes[key]) {
                debug("Disconnect %s because the node does not hold any slot", key);
                this.nodes.all[key].disconnect();
                this.removeNode(key);
            }
        });
        Object.keys(newNodes).forEach((key) => {
            const node = newNodes[key];
            this.findOrCreate(node, node.readOnly);
        });
    }
    /**
     * Remove a node from the pool.
     */
    removeNode(key) {
        const { nodes } = this;
        if (nodes.all[key]) {
            debug("Remove %s from the pool", key);
            delete nodes.all[key];
        }
        delete nodes.master[key];
        delete nodes.slave[key];
    }
}
exports["default"] = ConnectionPool;


/***/ }),

/***/ 3455:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __nccwpck_require__(7670);
const Deque = __nccwpck_require__(9036);
const debug = (0, utils_1.Debug)("delayqueue");
/**
 * Queue that runs items after specified duration
 */
class DelayQueue {
    constructor() {
        this.queues = {};
        this.timeouts = {};
    }
    /**
     * Add a new item to the queue
     *
     * @param bucket bucket name
     * @param item function that will run later
     * @param options
     */
    push(bucket, item, options) {
        const callback = options.callback || process.nextTick;
        if (!this.queues[bucket]) {
            this.queues[bucket] = new Deque();
        }
        const queue = this.queues[bucket];
        queue.push(item);
        if (!this.timeouts[bucket]) {
            this.timeouts[bucket] = setTimeout(() => {
                callback(() => {
                    this.timeouts[bucket] = null;
                    this.execute(bucket);
                });
            }, options.timeout);
        }
    }
    execute(bucket) {
        const queue = this.queues[bucket];
        if (!queue) {
            return;
        }
        const { length } = queue;
        if (!length) {
            return;
        }
        debug("send %d commands in %s queue", length, bucket);
        this.queues[bucket] = null;
        while (queue.length > 0) {
            queue.shift()();
        }
    }
}
exports["default"] = DelayQueue;


/***/ }),

/***/ 1633:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commands_1 = __nccwpck_require__(4317);
const events_1 = __nccwpck_require__(4434);
const redis_errors_1 = __nccwpck_require__(6961);
const standard_as_callback_1 = __nccwpck_require__(5659);
const Command_1 = __nccwpck_require__(5017);
const ClusterAllFailedError_1 = __nccwpck_require__(1784);
const Redis_1 = __nccwpck_require__(5695);
const ScanStream_1 = __nccwpck_require__(6443);
const transaction_1 = __nccwpck_require__(5708);
const utils_1 = __nccwpck_require__(7670);
const applyMixin_1 = __nccwpck_require__(6985);
const Commander_1 = __nccwpck_require__(3240);
const ClusterOptions_1 = __nccwpck_require__(1885);
const ClusterSubscriber_1 = __nccwpck_require__(8093);
const ConnectionPool_1 = __nccwpck_require__(9107);
const DelayQueue_1 = __nccwpck_require__(3455);
const util_1 = __nccwpck_require__(6617);
const Deque = __nccwpck_require__(9036);
const debug = (0, utils_1.Debug)("cluster");
const REJECT_OVERWRITTEN_COMMANDS = new WeakSet();
/**
 * Client for the official Redis Cluster
 */
class Cluster extends Commander_1.default {
    /**
     * Creates an instance of Cluster.
     */
    constructor(startupNodes, options = {}) {
        super();
        this.slots = [];
        /**
         * @ignore
         */
        this._groupsIds = {};
        /**
         * @ignore
         */
        this._groupsBySlot = Array(16384);
        /**
         * @ignore
         */
        this.isCluster = true;
        this.retryAttempts = 0;
        this.delayQueue = new DelayQueue_1.default();
        this.offlineQueue = new Deque();
        this.isRefreshing = false;
        this._refreshSlotsCacheCallbacks = [];
        this._autoPipelines = new Map();
        this._runningAutoPipelines = new Set();
        this._readyDelayedCallbacks = [];
        /**
         * Every time Cluster#connect() is called, this value will be
         * auto-incrementing. The purpose of this value is used for
         * discarding previous connect attampts when creating a new
         * connection.
         */
        this.connectionEpoch = 0;
        events_1.EventEmitter.call(this);
        this.startupNodes = startupNodes;
        this.options = (0, utils_1.defaults)({}, options, ClusterOptions_1.DEFAULT_CLUSTER_OPTIONS, this.options);
        if (this.options.redisOptions &&
            this.options.redisOptions.keyPrefix &&
            !this.options.keyPrefix) {
            this.options.keyPrefix = this.options.redisOptions.keyPrefix;
        }
        // validate options
        if (typeof this.options.scaleReads !== "function" &&
            ["all", "master", "slave"].indexOf(this.options.scaleReads) === -1) {
            throw new Error('Invalid option scaleReads "' +
                this.options.scaleReads +
                '". Expected "all", "master", "slave" or a custom function');
        }
        this.connectionPool = new ConnectionPool_1.default(this.options.redisOptions);
        this.connectionPool.on("-node", (redis, key) => {
            this.emit("-node", redis);
        });
        this.connectionPool.on("+node", (redis) => {
            this.emit("+node", redis);
        });
        this.connectionPool.on("drain", () => {
            this.setStatus("close");
        });
        this.connectionPool.on("nodeError", (error, key) => {
            this.emit("node error", error, key);
        });
        this.subscriber = new ClusterSubscriber_1.default(this.connectionPool, this);
        if (this.options.scripts) {
            Object.entries(this.options.scripts).forEach(([name, definition]) => {
                this.defineCommand(name, definition);
            });
        }
        if (this.options.lazyConnect) {
            this.setStatus("wait");
        }
        else {
            this.connect().catch((err) => {
                debug("connecting failed: %s", err);
            });
        }
    }
    /**
     * Connect to a cluster
     */
    connect() {
        return new Promise((resolve, reject) => {
            if (this.status === "connecting" ||
                this.status === "connect" ||
                this.status === "ready") {
                reject(new Error("Redis is already connecting/connected"));
                return;
            }
            const epoch = ++this.connectionEpoch;
            this.setStatus("connecting");
            this.resolveStartupNodeHostnames()
                .then((nodes) => {
                if (this.connectionEpoch !== epoch) {
                    debug("discard connecting after resolving startup nodes because epoch not match: %d != %d", epoch, this.connectionEpoch);
                    reject(new redis_errors_1.RedisError("Connection is discarded because a new connection is made"));
                    return;
                }
                if (this.status !== "connecting") {
                    debug("discard connecting after resolving startup nodes because the status changed to %s", this.status);
                    reject(new redis_errors_1.RedisError("Connection is aborted"));
                    return;
                }
                this.connectionPool.reset(nodes);
                const readyHandler = () => {
                    this.setStatus("ready");
                    this.retryAttempts = 0;
                    this.executeOfflineCommands();
                    this.resetNodesRefreshInterval();
                    resolve();
                };
                let closeListener = undefined;
                const refreshListener = () => {
                    this.invokeReadyDelayedCallbacks(undefined);
                    this.removeListener("close", closeListener);
                    this.manuallyClosing = false;
                    this.setStatus("connect");
                    if (this.options.enableReadyCheck) {
                        this.readyCheck((err, fail) => {
                            if (err || fail) {
                                debug("Ready check failed (%s). Reconnecting...", err || fail);
                                if (this.status === "connect") {
                                    this.disconnect(true);
                                }
                            }
                            else {
                                readyHandler();
                            }
                        });
                    }
                    else {
                        readyHandler();
                    }
                };
                closeListener = () => {
                    const error = new Error("None of startup nodes is available");
                    this.removeListener("refresh", refreshListener);
                    this.invokeReadyDelayedCallbacks(error);
                    reject(error);
                };
                this.once("refresh", refreshListener);
                this.once("close", closeListener);
                this.once("close", this.handleCloseEvent.bind(this));
                this.refreshSlotsCache((err) => {
                    if (err && err.message === ClusterAllFailedError_1.default.defaultMessage) {
                        Redis_1.default.prototype.silentEmit.call(this, "error", err);
                        this.connectionPool.reset([]);
                    }
                });
                this.subscriber.start();
            })
                .catch((err) => {
                this.setStatus("close");
                this.handleCloseEvent(err);
                this.invokeReadyDelayedCallbacks(err);
                reject(err);
            });
        });
    }
    /**
     * Disconnect from every node in the cluster.
     */
    disconnect(reconnect = false) {
        const status = this.status;
        this.setStatus("disconnecting");
        if (!reconnect) {
            this.manuallyClosing = true;
        }
        if (this.reconnectTimeout && !reconnect) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
            debug("Canceled reconnecting attempts");
        }
        this.clearNodesRefreshInterval();
        this.subscriber.stop();
        if (status === "wait") {
            this.setStatus("close");
            this.handleCloseEvent();
        }
        else {
            this.connectionPool.reset([]);
        }
    }
    /**
     * Quit the cluster gracefully.
     */
    quit(callback) {
        const status = this.status;
        this.setStatus("disconnecting");
        this.manuallyClosing = true;
        if (this.reconnectTimeout) {
            clearTimeout(this.reconnectTimeout);
            this.reconnectTimeout = null;
        }
        this.clearNodesRefreshInterval();
        this.subscriber.stop();
        if (status === "wait") {
            const ret = (0, standard_as_callback_1.default)(Promise.resolve("OK"), callback);
            // use setImmediate to make sure "close" event
            // being emitted after quit() is returned
            setImmediate(function () {
                this.setStatus("close");
                this.handleCloseEvent();
            }.bind(this));
            return ret;
        }
        return (0, standard_as_callback_1.default)(Promise.all(this.nodes().map((node) => node.quit().catch((err) => {
            // Ignore the error caused by disconnecting since
            // we're disconnecting...
            if (err.message === utils_1.CONNECTION_CLOSED_ERROR_MSG) {
                return "OK";
            }
            throw err;
        }))).then(() => "OK"), callback);
    }
    /**
     * Create a new instance with the same startup nodes and options as the current one.
     *
     * @example
     * ```js
     * var cluster = new Redis.Cluster([{ host: "127.0.0.1", port: "30001" }]);
     * var anotherCluster = cluster.duplicate();
     * ```
     */
    duplicate(overrideStartupNodes = [], overrideOptions = {}) {
        const startupNodes = overrideStartupNodes.length > 0
            ? overrideStartupNodes
            : this.startupNodes.slice(0);
        const options = Object.assign({}, this.options, overrideOptions);
        return new Cluster(startupNodes, options);
    }
    /**
     * Get nodes with the specified role
     */
    nodes(role = "all") {
        if (role !== "all" && role !== "master" && role !== "slave") {
            throw new Error('Invalid role "' + role + '". Expected "all", "master" or "slave"');
        }
        return this.connectionPool.getNodes(role);
    }
    /**
     * This is needed in order not to install a listener for each auto pipeline
     *
     * @ignore
     */
    delayUntilReady(callback) {
        this._readyDelayedCallbacks.push(callback);
    }
    /**
     * Get the number of commands queued in automatic pipelines.
     *
     * This is not available (and returns 0) until the cluster is connected and slots information have been received.
     */
    get autoPipelineQueueSize() {
        let queued = 0;
        for (const pipeline of this._autoPipelines.values()) {
            queued += pipeline.length;
        }
        return queued;
    }
    /**
     * Refresh the slot cache
     *
     * @ignore
     */
    refreshSlotsCache(callback) {
        if (callback) {
            this._refreshSlotsCacheCallbacks.push(callback);
        }
        if (this.isRefreshing) {
            return;
        }
        this.isRefreshing = true;
        const _this = this;
        const wrapper = (error) => {
            this.isRefreshing = false;
            for (const callback of this._refreshSlotsCacheCallbacks) {
                callback(error);
            }
            this._refreshSlotsCacheCallbacks = [];
        };
        const nodes = (0, utils_1.shuffle)(this.connectionPool.getNodes());
        let lastNodeError = null;
        function tryNode(index) {
            if (index === nodes.length) {
                const error = new ClusterAllFailedError_1.default(ClusterAllFailedError_1.default.defaultMessage, lastNodeError);
                return wrapper(error);
            }
            const node = nodes[index];
            const key = `${node.options.host}:${node.options.port}`;
            debug("getting slot cache from %s", key);
            _this.getInfoFromNode(node, function (err) {
                switch (_this.status) {
                    case "close":
                    case "end":
                        return wrapper(new Error("Cluster is disconnected."));
                    case "disconnecting":
                        return wrapper(new Error("Cluster is disconnecting."));
                }
                if (err) {
                    _this.emit("node error", err, key);
                    lastNodeError = err;
                    tryNode(index + 1);
                }
                else {
                    _this.emit("refresh");
                    wrapper();
                }
            });
        }
        tryNode(0);
    }
    /**
     * @ignore
     */
    sendCommand(command, stream, node) {
        if (this.status === "wait") {
            this.connect().catch(utils_1.noop);
        }
        if (this.status === "end") {
            command.reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
            return command.promise;
        }
        let to = this.options.scaleReads;
        if (to !== "master") {
            const isCommandReadOnly = command.isReadOnly ||
                ((0, commands_1.exists)(command.name) && (0, commands_1.hasFlag)(command.name, "readonly"));
            if (!isCommandReadOnly) {
                to = "master";
            }
        }
        let targetSlot = node ? node.slot : command.getSlot();
        const ttl = {};
        const _this = this;
        if (!node && !REJECT_OVERWRITTEN_COMMANDS.has(command)) {
            REJECT_OVERWRITTEN_COMMANDS.add(command);
            const reject = command.reject;
            command.reject = function (err) {
                const partialTry = tryConnection.bind(null, true);
                _this.handleError(err, ttl, {
                    moved: function (slot, key) {
                        debug("command %s is moved to %s", command.name, key);
                        targetSlot = Number(slot);
                        if (_this.slots[slot]) {
                            _this.slots[slot][0] = key;
                        }
                        else {
                            _this.slots[slot] = [key];
                        }
                        _this._groupsBySlot[slot] =
                            _this._groupsIds[_this.slots[slot].join(";")];
                        _this.connectionPool.findOrCreate(_this.natMapper(key));
                        tryConnection();
                        debug("refreshing slot caches... (triggered by MOVED error)");
                        _this.refreshSlotsCache();
                    },
                    ask: function (slot, key) {
                        debug("command %s is required to ask %s:%s", command.name, key);
                        const mapped = _this.natMapper(key);
                        _this.connectionPool.findOrCreate(mapped);
                        tryConnection(false, `${mapped.host}:${mapped.port}`);
                    },
                    tryagain: partialTry,
                    clusterDown: partialTry,
                    connectionClosed: partialTry,
                    maxRedirections: function (redirectionError) {
                        reject.call(command, redirectionError);
                    },
                    defaults: function () {
                        reject.call(command, err);
                    },
                });
            };
        }
        tryConnection();
        function tryConnection(random, asking) {
            if (_this.status === "end") {
                command.reject(new redis_errors_1.AbortError("Cluster is ended."));
                return;
            }
            let redis;
            if (_this.status === "ready" || command.name === "cluster") {
                if (node && node.redis) {
                    redis = node.redis;
                }
                else if (Command_1.default.checkFlag("ENTER_SUBSCRIBER_MODE", command.name) ||
                    Command_1.default.checkFlag("EXIT_SUBSCRIBER_MODE", command.name)) {
                    redis = _this.subscriber.getInstance();
                    if (!redis) {
                        command.reject(new redis_errors_1.AbortError("No subscriber for the cluster"));
                        return;
                    }
                }
                else {
                    if (!random) {
                        if (typeof targetSlot === "number" && _this.slots[targetSlot]) {
                            const nodeKeys = _this.slots[targetSlot];
                            if (typeof to === "function") {
                                const nodes = nodeKeys.map(function (key) {
                                    return _this.connectionPool.getInstanceByKey(key);
                                });
                                redis = to(nodes, command);
                                if (Array.isArray(redis)) {
                                    redis = (0, utils_1.sample)(redis);
                                }
                                if (!redis) {
                                    redis = nodes[0];
                                }
                            }
                            else {
                                let key;
                                if (to === "all") {
                                    key = (0, utils_1.sample)(nodeKeys);
                                }
                                else if (to === "slave" && nodeKeys.length > 1) {
                                    key = (0, utils_1.sample)(nodeKeys, 1);
                                }
                                else {
                                    key = nodeKeys[0];
                                }
                                redis = _this.connectionPool.getInstanceByKey(key);
                            }
                        }
                        if (asking) {
                            redis = _this.connectionPool.getInstanceByKey(asking);
                            redis.asking();
                        }
                    }
                    if (!redis) {
                        redis =
                            (typeof to === "function"
                                ? null
                                : _this.connectionPool.getSampleInstance(to)) ||
                                _this.connectionPool.getSampleInstance("all");
                    }
                }
                if (node && !node.redis) {
                    node.redis = redis;
                }
            }
            if (redis) {
                redis.sendCommand(command, stream);
            }
            else if (_this.options.enableOfflineQueue) {
                _this.offlineQueue.push({
                    command: command,
                    stream: stream,
                    node: node,
                });
            }
            else {
                command.reject(new Error("Cluster isn't ready and enableOfflineQueue options is false"));
            }
        }
        return command.promise;
    }
    sscanStream(key, options) {
        return this.createScanStream("sscan", { key, options });
    }
    sscanBufferStream(key, options) {
        return this.createScanStream("sscanBuffer", { key, options });
    }
    hscanStream(key, options) {
        return this.createScanStream("hscan", { key, options });
    }
    hscanBufferStream(key, options) {
        return this.createScanStream("hscanBuffer", { key, options });
    }
    zscanStream(key, options) {
        return this.createScanStream("zscan", { key, options });
    }
    zscanBufferStream(key, options) {
        return this.createScanStream("zscanBuffer", { key, options });
    }
    /**
     * @ignore
     */
    handleError(error, ttl, handlers) {
        if (typeof ttl.value === "undefined") {
            ttl.value = this.options.maxRedirections;
        }
        else {
            ttl.value -= 1;
        }
        if (ttl.value <= 0) {
            handlers.maxRedirections(new Error("Too many Cluster redirections. Last error: " + error));
            return;
        }
        const errv = error.message.split(" ");
        if (errv[0] === "MOVED") {
            const timeout = this.options.retryDelayOnMoved;
            if (timeout && typeof timeout === "number") {
                this.delayQueue.push("moved", handlers.moved.bind(null, errv[1], errv[2]), { timeout });
            }
            else {
                handlers.moved(errv[1], errv[2]);
            }
        }
        else if (errv[0] === "ASK") {
            handlers.ask(errv[1], errv[2]);
        }
        else if (errv[0] === "TRYAGAIN") {
            this.delayQueue.push("tryagain", handlers.tryagain, {
                timeout: this.options.retryDelayOnTryAgain,
            });
        }
        else if (errv[0] === "CLUSTERDOWN" &&
            this.options.retryDelayOnClusterDown > 0) {
            this.delayQueue.push("clusterdown", handlers.connectionClosed, {
                timeout: this.options.retryDelayOnClusterDown,
                callback: this.refreshSlotsCache.bind(this),
            });
        }
        else if (error.message === utils_1.CONNECTION_CLOSED_ERROR_MSG &&
            this.options.retryDelayOnFailover > 0 &&
            this.status === "ready") {
            this.delayQueue.push("failover", handlers.connectionClosed, {
                timeout: this.options.retryDelayOnFailover,
                callback: this.refreshSlotsCache.bind(this),
            });
        }
        else {
            handlers.defaults();
        }
    }
    resetOfflineQueue() {
        this.offlineQueue = new Deque();
    }
    clearNodesRefreshInterval() {
        if (this.slotsTimer) {
            clearTimeout(this.slotsTimer);
            this.slotsTimer = null;
        }
    }
    resetNodesRefreshInterval() {
        if (this.slotsTimer || !this.options.slotsRefreshInterval) {
            return;
        }
        const nextRound = () => {
            this.slotsTimer = setTimeout(() => {
                debug('refreshing slot caches... (triggered by "slotsRefreshInterval" option)');
                this.refreshSlotsCache(() => {
                    nextRound();
                });
            }, this.options.slotsRefreshInterval);
        };
        nextRound();
    }
    /**
     * Change cluster instance's status
     */
    setStatus(status) {
        debug("status: %s -> %s", this.status || "[empty]", status);
        this.status = status;
        process.nextTick(() => {
            this.emit(status);
        });
    }
    /**
     * Called when closed to check whether a reconnection should be made
     */
    handleCloseEvent(reason) {
        if (reason) {
            debug("closed because %s", reason);
        }
        let retryDelay;
        if (!this.manuallyClosing &&
            typeof this.options.clusterRetryStrategy === "function") {
            retryDelay = this.options.clusterRetryStrategy.call(this, ++this.retryAttempts, reason);
        }
        if (typeof retryDelay === "number") {
            this.setStatus("reconnecting");
            this.reconnectTimeout = setTimeout(() => {
                this.reconnectTimeout = null;
                debug("Cluster is disconnected. Retrying after %dms", retryDelay);
                this.connect().catch(function (err) {
                    debug("Got error %s when reconnecting. Ignoring...", err);
                });
            }, retryDelay);
        }
        else {
            this.setStatus("end");
            this.flushQueue(new Error("None of startup nodes is available"));
        }
    }
    /**
     * Flush offline queue with error.
     */
    flushQueue(error) {
        let item;
        while ((item = this.offlineQueue.shift())) {
            item.command.reject(error);
        }
    }
    executeOfflineCommands() {
        if (this.offlineQueue.length) {
            debug("send %d commands in offline queue", this.offlineQueue.length);
            const offlineQueue = this.offlineQueue;
            this.resetOfflineQueue();
            let item;
            while ((item = offlineQueue.shift())) {
                this.sendCommand(item.command, item.stream, item.node);
            }
        }
    }
    natMapper(nodeKey) {
        if (this.options.natMap && typeof this.options.natMap === "object") {
            const key = typeof nodeKey === "string"
                ? nodeKey
                : `${nodeKey.host}:${nodeKey.port}`;
            const mapped = this.options.natMap[key];
            if (mapped) {
                debug("NAT mapping %s -> %O", key, mapped);
                return Object.assign({}, mapped);
            }
        }
        return typeof nodeKey === "string"
            ? (0, util_1.nodeKeyToRedisOptions)(nodeKey)
            : nodeKey;
    }
    getInfoFromNode(redis, callback) {
        if (!redis) {
            return callback(new Error("Node is disconnected"));
        }
        // Use a duplication of the connection to avoid
        // timeouts when the connection is in the blocking
        // mode (e.g. waiting for BLPOP).
        const duplicatedConnection = redis.duplicate({
            enableOfflineQueue: true,
            enableReadyCheck: false,
            retryStrategy: null,
            connectionName: (0, util_1.getConnectionName)("refresher", this.options.redisOptions && this.options.redisOptions.connectionName),
        });
        // Ignore error events since we will handle
        // exceptions for the CLUSTER SLOTS command.
        duplicatedConnection.on("error", utils_1.noop);
        duplicatedConnection.cluster("SLOTS", (0, utils_1.timeout)((err, result) => {
            duplicatedConnection.disconnect();
            if (err) {
                return callback(err);
            }
            if (this.status === "disconnecting" ||
                this.status === "close" ||
                this.status === "end") {
                debug("ignore CLUSTER.SLOTS results (count: %d) since cluster status is %s", result.length, this.status);
                callback();
                return;
            }
            const nodes = [];
            debug("cluster slots result count: %d", result.length);
            for (let i = 0; i < result.length; ++i) {
                const items = result[i];
                const slotRangeStart = items[0];
                const slotRangeEnd = items[1];
                const keys = [];
                for (let j = 2; j < items.length; j++) {
                    if (!items[j][0]) {
                        continue;
                    }
                    const node = this.natMapper({
                        host: items[j][0],
                        port: items[j][1],
                    });
                    node.readOnly = j !== 2;
                    nodes.push(node);
                    keys.push(node.host + ":" + node.port);
                }
                debug("cluster slots result [%d]: slots %d~%d served by %s", i, slotRangeStart, slotRangeEnd, keys);
                for (let slot = slotRangeStart; slot <= slotRangeEnd; slot++) {
                    this.slots[slot] = keys;
                }
            }
            // Assign to each node keys a numeric value to make autopipeline comparison faster.
            this._groupsIds = Object.create(null);
            let j = 0;
            for (let i = 0; i < 16384; i++) {
                const target = (this.slots[i] || []).join(";");
                if (!target.length) {
                    this._groupsBySlot[i] = undefined;
                    continue;
                }
                if (!this._groupsIds[target]) {
                    this._groupsIds[target] = ++j;
                }
                this._groupsBySlot[i] = this._groupsIds[target];
            }
            this.connectionPool.reset(nodes);
            callback();
        }, this.options.slotsRefreshTimeout));
    }
    invokeReadyDelayedCallbacks(err) {
        for (const c of this._readyDelayedCallbacks) {
            process.nextTick(c, err);
        }
        this._readyDelayedCallbacks = [];
    }
    /**
     * Check whether Cluster is able to process commands
     */
    readyCheck(callback) {
        this.cluster("INFO", (err, res) => {
            if (err) {
                return callback(err);
            }
            if (typeof res !== "string") {
                return callback();
            }
            let state;
            const lines = res.split("\r\n");
            for (let i = 0; i < lines.length; ++i) {
                const parts = lines[i].split(":");
                if (parts[0] === "cluster_state") {
                    state = parts[1];
                    break;
                }
            }
            if (state === "fail") {
                debug("cluster state not ok (%s)", state);
                callback(null, state);
            }
            else {
                callback();
            }
        });
    }
    resolveSrv(hostname) {
        return new Promise((resolve, reject) => {
            this.options.resolveSrv(hostname, (err, records) => {
                if (err) {
                    return reject(err);
                }
                const self = this, groupedRecords = (0, util_1.groupSrvRecords)(records), sortedKeys = Object.keys(groupedRecords).sort((a, b) => parseInt(a) - parseInt(b));
                function tryFirstOne(err) {
                    if (!sortedKeys.length) {
                        return reject(err);
                    }
                    const key = sortedKeys[0], group = groupedRecords[key], record = (0, util_1.weightSrvRecords)(group);
                    if (!group.records.length) {
                        sortedKeys.shift();
                    }
                    self.dnsLookup(record.name).then((host) => resolve({
                        host,
                        port: record.port,
                    }), tryFirstOne);
                }
                tryFirstOne();
            });
        });
    }
    dnsLookup(hostname) {
        return new Promise((resolve, reject) => {
            this.options.dnsLookup(hostname, (err, address) => {
                if (err) {
                    debug("failed to resolve hostname %s to IP: %s", hostname, err.message);
                    reject(err);
                }
                else {
                    debug("resolved hostname %s to IP %s", hostname, address);
                    resolve(address);
                }
            });
        });
    }
    /**
     * Normalize startup nodes, and resolving hostnames to IPs.
     *
     * This process happens every time when #connect() is called since
     * #startupNodes and DNS records may chanage.
     */
    async resolveStartupNodeHostnames() {
        if (!Array.isArray(this.startupNodes) || this.startupNodes.length === 0) {
            throw new Error("`startupNodes` should contain at least one node.");
        }
        const startupNodes = (0, util_1.normalizeNodeOptions)(this.startupNodes);
        const hostnames = (0, util_1.getUniqueHostnamesFromOptions)(startupNodes);
        if (hostnames.length === 0) {
            return startupNodes;
        }
        const configs = await Promise.all(hostnames.map((this.options.useSRVRecords ? this.resolveSrv : this.dnsLookup).bind(this)));
        const hostnameToConfig = (0, utils_1.zipMap)(hostnames, configs);
        return startupNodes.map((node) => {
            const config = hostnameToConfig.get(node.host);
            if (!config) {
                return node;
            }
            if (this.options.useSRVRecords) {
                return Object.assign({}, node, config);
            }
            return Object.assign({}, node, { host: config });
        });
    }
    createScanStream(command, { key, options = {} }) {
        return new ScanStream_1.default({
            objectMode: true,
            key: key,
            redis: this,
            command: command,
            ...options,
        });
    }
}
(0, applyMixin_1.default)(Cluster, events_1.EventEmitter);
(0, transaction_1.addTransactionSupport)(Cluster.prototype);
exports["default"] = Cluster;


/***/ }),

/***/ 6617:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getConnectionName = exports.weightSrvRecords = exports.groupSrvRecords = exports.getUniqueHostnamesFromOptions = exports.normalizeNodeOptions = exports.nodeKeyToRedisOptions = exports.getNodeKey = void 0;
const utils_1 = __nccwpck_require__(7670);
const net_1 = __nccwpck_require__(9278);
function getNodeKey(node) {
    node.port = node.port || 6379;
    node.host = node.host || "127.0.0.1";
    return node.host + ":" + node.port;
}
exports.getNodeKey = getNodeKey;
function nodeKeyToRedisOptions(nodeKey) {
    const portIndex = nodeKey.lastIndexOf(":");
    if (portIndex === -1) {
        throw new Error(`Invalid node key ${nodeKey}`);
    }
    return {
        host: nodeKey.slice(0, portIndex),
        port: Number(nodeKey.slice(portIndex + 1)),
    };
}
exports.nodeKeyToRedisOptions = nodeKeyToRedisOptions;
function normalizeNodeOptions(nodes) {
    return nodes.map((node) => {
        const options = {};
        if (typeof node === "object") {
            Object.assign(options, node);
        }
        else if (typeof node === "string") {
            Object.assign(options, (0, utils_1.parseURL)(node));
        }
        else if (typeof node === "number") {
            options.port = node;
        }
        else {
            throw new Error("Invalid argument " + node);
        }
        if (typeof options.port === "string") {
            options.port = parseInt(options.port, 10);
        }
        // Cluster mode only support db 0
        delete options.db;
        if (!options.port) {
            options.port = 6379;
        }
        if (!options.host) {
            options.host = "127.0.0.1";
        }
        return (0, utils_1.resolveTLSProfile)(options);
    });
}
exports.normalizeNodeOptions = normalizeNodeOptions;
function getUniqueHostnamesFromOptions(nodes) {
    const uniqueHostsMap = {};
    nodes.forEach((node) => {
        uniqueHostsMap[node.host] = true;
    });
    return Object.keys(uniqueHostsMap).filter((host) => !(0, net_1.isIP)(host));
}
exports.getUniqueHostnamesFromOptions = getUniqueHostnamesFromOptions;
function groupSrvRecords(records) {
    const recordsByPriority = {};
    for (const record of records) {
        if (!recordsByPriority.hasOwnProperty(record.priority)) {
            recordsByPriority[record.priority] = {
                totalWeight: record.weight,
                records: [record],
            };
        }
        else {
            recordsByPriority[record.priority].totalWeight += record.weight;
            recordsByPriority[record.priority].records.push(record);
        }
    }
    return recordsByPriority;
}
exports.groupSrvRecords = groupSrvRecords;
function weightSrvRecords(recordsGroup) {
    if (recordsGroup.records.length === 1) {
        recordsGroup.totalWeight = 0;
        return recordsGroup.records.shift();
    }
    // + `recordsGroup.records.length` to support `weight` 0
    const random = Math.floor(Math.random() * (recordsGroup.totalWeight + recordsGroup.records.length));
    let total = 0;
    for (const [i, record] of recordsGroup.records.entries()) {
        total += 1 + record.weight;
        if (total > random) {
            recordsGroup.totalWeight -= record.weight;
            recordsGroup.records.splice(i, 1);
            return record;
        }
    }
}
exports.weightSrvRecords = weightSrvRecords;
function getConnectionName(component, nodeConnectionName) {
    const prefix = `ioredis-cluster(${component})`;
    return nodeConnectionName ? `${prefix}:${nodeConnectionName}` : prefix;
}
exports.getConnectionName = getConnectionName;


/***/ }),

/***/ 2348:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __nccwpck_require__(7670);
const debug = (0, utils_1.Debug)("AbstractConnector");
class AbstractConnector {
    constructor(disconnectTimeout) {
        this.connecting = false;
        this.disconnectTimeout = disconnectTimeout;
    }
    check(info) {
        return true;
    }
    disconnect() {
        this.connecting = false;
        if (this.stream) {
            const stream = this.stream; // Make sure callbacks refer to the same instance
            const timeout = setTimeout(() => {
                debug("stream %s:%s still open, destroying it", stream.remoteAddress, stream.remotePort);
                stream.destroy();
            }, this.disconnectTimeout);
            stream.on("close", () => clearTimeout(timeout));
            stream.end();
        }
    }
}
exports["default"] = AbstractConnector;


/***/ }),

/***/ 4037:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FailoverDetector = void 0;
const utils_1 = __nccwpck_require__(7670);
const debug = (0, utils_1.Debug)("FailoverDetector");
const CHANNEL_NAME = "+switch-master";
class FailoverDetector {
    // sentinels can't be used for regular commands after this
    constructor(connector, sentinels) {
        this.isDisconnected = false;
        this.connector = connector;
        this.sentinels = sentinels;
    }
    cleanup() {
        this.isDisconnected = true;
        for (const sentinel of this.sentinels) {
            sentinel.client.disconnect();
        }
    }
    async subscribe() {
        debug("Starting FailoverDetector");
        const promises = [];
        for (const sentinel of this.sentinels) {
            const promise = sentinel.client.subscribe(CHANNEL_NAME).catch((err) => {
                debug("Failed to subscribe to failover messages on sentinel %s:%s (%s)", sentinel.address.host || "127.0.0.1", sentinel.address.port || 26739, err.message);
            });
            promises.push(promise);
            sentinel.client.on("message", (channel) => {
                if (!this.isDisconnected && channel === CHANNEL_NAME) {
                    this.disconnect();
                }
            });
        }
        await Promise.all(promises);
    }
    disconnect() {
        // Avoid disconnecting more than once per failover.
        // A new FailoverDetector will be created after reconnecting.
        this.isDisconnected = true;
        debug("Failover detected, disconnecting");
        // Will call this.cleanup()
        this.connector.disconnect();
    }
}
exports.FailoverDetector = FailoverDetector;


/***/ }),

/***/ 3079:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function isSentinelEql(a, b) {
    return ((a.host || "127.0.0.1") === (b.host || "127.0.0.1") &&
        (a.port || 26379) === (b.port || 26379));
}
class SentinelIterator {
    constructor(sentinels) {
        this.cursor = 0;
        this.sentinels = sentinels.slice(0);
    }
    next() {
        const done = this.cursor >= this.sentinels.length;
        return { done, value: done ? undefined : this.sentinels[this.cursor++] };
    }
    reset(moveCurrentEndpointToFirst) {
        if (moveCurrentEndpointToFirst &&
            this.sentinels.length > 1 &&
            this.cursor !== 1) {
            this.sentinels.unshift(...this.sentinels.splice(this.cursor - 1));
        }
        this.cursor = 0;
    }
    add(sentinel) {
        for (let i = 0; i < this.sentinels.length; i++) {
            if (isSentinelEql(sentinel, this.sentinels[i])) {
                return false;
            }
        }
        this.sentinels.push(sentinel);
        return true;
    }
    toString() {
        return `${JSON.stringify(this.sentinels)} @${this.cursor}`;
    }
}
exports["default"] = SentinelIterator;


/***/ }),

/***/ 8325:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentinelIterator = void 0;
const net_1 = __nccwpck_require__(9278);
const utils_1 = __nccwpck_require__(7670);
const tls_1 = __nccwpck_require__(4756);
const SentinelIterator_1 = __nccwpck_require__(3079);
exports.SentinelIterator = SentinelIterator_1.default;
const AbstractConnector_1 = __nccwpck_require__(2348);
const Redis_1 = __nccwpck_require__(5695);
const FailoverDetector_1 = __nccwpck_require__(4037);
const debug = (0, utils_1.Debug)("SentinelConnector");
class SentinelConnector extends AbstractConnector_1.default {
    constructor(options) {
        super(options.disconnectTimeout);
        this.options = options;
        this.emitter = null;
        this.failoverDetector = null;
        if (!this.options.sentinels.length) {
            throw new Error("Requires at least one sentinel to connect to.");
        }
        if (!this.options.name) {
            throw new Error("Requires the name of master.");
        }
        this.sentinelIterator = new SentinelIterator_1.default(this.options.sentinels);
    }
    check(info) {
        const roleMatches = !info.role || this.options.role === info.role;
        if (!roleMatches) {
            debug("role invalid, expected %s, but got %s", this.options.role, info.role);
            // Start from the next item.
            // Note that `reset` will move the cursor to the previous element,
            // so we advance two steps here.
            this.sentinelIterator.next();
            this.sentinelIterator.next();
            this.sentinelIterator.reset(true);
        }
        return roleMatches;
    }
    disconnect() {
        super.disconnect();
        if (this.failoverDetector) {
            this.failoverDetector.cleanup();
        }
    }
    connect(eventEmitter) {
        this.connecting = true;
        this.retryAttempts = 0;
        let lastError;
        const connectToNext = async () => {
            const endpoint = this.sentinelIterator.next();
            if (endpoint.done) {
                this.sentinelIterator.reset(false);
                const retryDelay = typeof this.options.sentinelRetryStrategy === "function"
                    ? this.options.sentinelRetryStrategy(++this.retryAttempts)
                    : null;
                let errorMsg = typeof retryDelay !== "number"
                    ? "All sentinels are unreachable and retry is disabled."
                    : `All sentinels are unreachable. Retrying from scratch after ${retryDelay}ms.`;
                if (lastError) {
                    errorMsg += ` Last error: ${lastError.message}`;
                }
                debug(errorMsg);
                const error = new Error(errorMsg);
                if (typeof retryDelay === "number") {
                    eventEmitter("error", error);
                    await new Promise((resolve) => setTimeout(resolve, retryDelay));
                    return connectToNext();
                }
                else {
                    throw error;
                }
            }
            let resolved = null;
            let err = null;
            try {
                resolved = await this.resolve(endpoint.value);
            }
            catch (error) {
                err = error;
            }
            if (!this.connecting) {
                throw new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG);
            }
            const endpointAddress = endpoint.value.host + ":" + endpoint.value.port;
            if (resolved) {
                debug("resolved: %s:%s from sentinel %s", resolved.host, resolved.port, endpointAddress);
                if (this.options.enableTLSForSentinelMode && this.options.tls) {
                    Object.assign(resolved, this.options.tls);
                    this.stream = (0, tls_1.connect)(resolved);
                    this.stream.once("secureConnect", this.initFailoverDetector.bind(this));
                }
                else {
                    this.stream = (0, net_1.createConnection)(resolved);
                    this.stream.once("connect", this.initFailoverDetector.bind(this));
                }
                this.stream.once("error", (err) => {
                    this.firstError = err;
                });
                return this.stream;
            }
            else {
                const errorMsg = err
                    ? "failed to connect to sentinel " +
                        endpointAddress +
                        " because " +
                        err.message
                    : "connected to sentinel " +
                        endpointAddress +
                        " successfully, but got an invalid reply: " +
                        resolved;
                debug(errorMsg);
                eventEmitter("sentinelError", new Error(errorMsg));
                if (err) {
                    lastError = err;
                }
                return connectToNext();
            }
        };
        return connectToNext();
    }
    async updateSentinels(client) {
        if (!this.options.updateSentinels) {
            return;
        }
        const result = await client.sentinel("sentinels", this.options.name);
        if (!Array.isArray(result)) {
            return;
        }
        result
            .map(utils_1.packObject)
            .forEach((sentinel) => {
            const flags = sentinel.flags ? sentinel.flags.split(",") : [];
            if (flags.indexOf("disconnected") === -1 &&
                sentinel.ip &&
                sentinel.port) {
                const endpoint = this.sentinelNatResolve(addressResponseToAddress(sentinel));
                if (this.sentinelIterator.add(endpoint)) {
                    debug("adding sentinel %s:%s", endpoint.host, endpoint.port);
                }
            }
        });
        debug("Updated internal sentinels: %s", this.sentinelIterator);
    }
    async resolveMaster(client) {
        const result = await client.sentinel("get-master-addr-by-name", this.options.name);
        await this.updateSentinels(client);
        return this.sentinelNatResolve(Array.isArray(result)
            ? { host: result[0], port: Number(result[1]) }
            : null);
    }
    async resolveSlave(client) {
        const result = await client.sentinel("slaves", this.options.name);
        if (!Array.isArray(result)) {
            return null;
        }
        const availableSlaves = result
            .map(utils_1.packObject)
            .filter((slave) => slave.flags && !slave.flags.match(/(disconnected|s_down|o_down)/));
        return this.sentinelNatResolve(selectPreferredSentinel(availableSlaves, this.options.preferredSlaves));
    }
    sentinelNatResolve(item) {
        if (!item || !this.options.natMap)
            return item;
        return this.options.natMap[`${item.host}:${item.port}`] || item;
    }
    connectToSentinel(endpoint, options) {
        const redis = new Redis_1.default({
            port: endpoint.port || 26379,
            host: endpoint.host,
            username: this.options.sentinelUsername || null,
            password: this.options.sentinelPassword || null,
            family: endpoint.family ||
                // @ts-expect-error
                ("path" in this.options && this.options.path
                    ? undefined
                    : // @ts-expect-error
                        this.options.family),
            tls: this.options.sentinelTLS,
            retryStrategy: null,
            enableReadyCheck: false,
            connectTimeout: this.options.connectTimeout,
            commandTimeout: this.options.sentinelCommandTimeout,
            ...options,
        });
        // @ts-expect-error
        return redis;
    }
    async resolve(endpoint) {
        const client = this.connectToSentinel(endpoint);
        // ignore the errors since resolve* methods will handle them
        client.on("error", noop);
        try {
            if (this.options.role === "slave") {
                return await this.resolveSlave(client);
            }
            else {
                return await this.resolveMaster(client);
            }
        }
        finally {
            client.disconnect();
        }
    }
    async initFailoverDetector() {
        var _a;
        if (!this.options.failoverDetector) {
            return;
        }
        // Move the current sentinel to the first position
        this.sentinelIterator.reset(true);
        const sentinels = [];
        // In case of a large amount of sentinels, limit the number of concurrent connections
        while (sentinels.length < this.options.sentinelMaxConnections) {
            const { done, value } = this.sentinelIterator.next();
            if (done) {
                break;
            }
            const client = this.connectToSentinel(value, {
                lazyConnect: true,
                retryStrategy: this.options.sentinelReconnectStrategy,
            });
            client.on("reconnecting", () => {
                var _a;
                // Tests listen to this event
                (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.emit("sentinelReconnecting");
            });
            sentinels.push({ address: value, client });
        }
        this.sentinelIterator.reset(false);
        if (this.failoverDetector) {
            // Clean up previous detector
            this.failoverDetector.cleanup();
        }
        this.failoverDetector = new FailoverDetector_1.FailoverDetector(this, sentinels);
        await this.failoverDetector.subscribe();
        // Tests listen to this event
        (_a = this.emitter) === null || _a === void 0 ? void 0 : _a.emit("failoverSubscribed");
    }
}
exports["default"] = SentinelConnector;
function selectPreferredSentinel(availableSlaves, preferredSlaves) {
    if (availableSlaves.length === 0) {
        return null;
    }
    let selectedSlave;
    if (typeof preferredSlaves === "function") {
        selectedSlave = preferredSlaves(availableSlaves);
    }
    else if (preferredSlaves !== null && typeof preferredSlaves === "object") {
        const preferredSlavesArray = Array.isArray(preferredSlaves)
            ? preferredSlaves
            : [preferredSlaves];
        // sort by priority
        preferredSlavesArray.sort((a, b) => {
            // default the priority to 1
            if (!a.prio) {
                a.prio = 1;
            }
            if (!b.prio) {
                b.prio = 1;
            }
            // lowest priority first
            if (a.prio < b.prio) {
                return -1;
            }
            if (a.prio > b.prio) {
                return 1;
            }
            return 0;
        });
        // loop over preferred slaves and return the first match
        for (let p = 0; p < preferredSlavesArray.length; p++) {
            for (let a = 0; a < availableSlaves.length; a++) {
                const slave = availableSlaves[a];
                if (slave.ip === preferredSlavesArray[p].ip) {
                    if (slave.port === preferredSlavesArray[p].port) {
                        selectedSlave = slave;
                        break;
                    }
                }
            }
            if (selectedSlave) {
                break;
            }
        }
    }
    // if none of the preferred slaves are available, a random available slave is returned
    if (!selectedSlave) {
        selectedSlave = (0, utils_1.sample)(availableSlaves);
    }
    return addressResponseToAddress(selectedSlave);
}
function addressResponseToAddress(input) {
    return { host: input.ip, port: Number(input.port) };
}
function noop() { }


/***/ }),

/***/ 6359:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const net_1 = __nccwpck_require__(9278);
const tls_1 = __nccwpck_require__(4756);
const utils_1 = __nccwpck_require__(7670);
const AbstractConnector_1 = __nccwpck_require__(2348);
class StandaloneConnector extends AbstractConnector_1.default {
    constructor(options) {
        super(options.disconnectTimeout);
        this.options = options;
    }
    connect(_) {
        const { options } = this;
        this.connecting = true;
        let connectionOptions;
        if ("path" in options && options.path) {
            connectionOptions = {
                path: options.path,
            };
        }
        else {
            connectionOptions = {};
            if ("port" in options && options.port != null) {
                connectionOptions.port = options.port;
            }
            if ("host" in options && options.host != null) {
                connectionOptions.host = options.host;
            }
            if ("family" in options && options.family != null) {
                connectionOptions.family = options.family;
            }
        }
        if (options.tls) {
            Object.assign(connectionOptions, options.tls);
        }
        // TODO:
        // We use native Promise here since other Promise
        // implementation may use different schedulers that
        // cause issue when the stream is resolved in the
        // next tick.
        // Should use the provided promise in the next major
        // version and do not connect before resolved.
        return new Promise((resolve, reject) => {
            process.nextTick(() => {
                if (!this.connecting) {
                    reject(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
                    return;
                }
                try {
                    if (options.tls) {
                        this.stream = (0, tls_1.connect)(connectionOptions);
                    }
                    else {
                        this.stream = (0, net_1.createConnection)(connectionOptions);
                    }
                }
                catch (err) {
                    reject(err);
                    return;
                }
                this.stream.once("error", (err) => {
                    this.firstError = err;
                });
                resolve(this.stream);
            });
        });
    }
}
exports["default"] = StandaloneConnector;


/***/ }),

/***/ 8053:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentinelConnector = exports.StandaloneConnector = void 0;
const StandaloneConnector_1 = __nccwpck_require__(6359);
exports.StandaloneConnector = StandaloneConnector_1.default;
const SentinelConnector_1 = __nccwpck_require__(8325);
exports.SentinelConnector = SentinelConnector_1.default;


/***/ }),

/***/ 4981:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * TLS settings for Redis Cloud. Updated on 2022-08-19.
 */
const RedisCloudCA = `-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIJAKSVpiDswLcwMA0GCSqGSIb3DQEBBQUAMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTAeFw0xMzEwMDExMjE0NTVaFw0yMzA5MjkxMjE0NTVaMD4xFjAUBgNV
BAoMDUdhcmFudGlhIERhdGExJDAiBgNVBAMMG1NTTCBDZXJ0aWZpY2F0aW9uIEF1
dGhvcml0eTCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBALZqkh/DczWP
JnxnHLQ7QL0T4B4CDKWBKCcisriGbA6ZePWVNo4hfKQC6JrzfR+081NeD6VcWUiz
rmd+jtPhIY4c+WVQYm5PKaN6DT1imYdxQw7aqO5j2KUCEh/cznpLxeSHoTxlR34E
QwF28Wl3eg2vc5ct8LjU3eozWVk3gb7alx9mSA2SgmuX5lEQawl++rSjsBStemY2
BDwOpAMXIrdEyP/cVn8mkvi/BDs5M5G+09j0gfhyCzRWMQ7Hn71u1eolRxwVxgi3
TMn+/vTaFSqxKjgck6zuAYjBRPaHe7qLxHNr1So/Mc9nPy+3wHebFwbIcnUojwbp
4nctkWbjb2cCAwEAAaNQME4wHQYDVR0OBBYEFP1whtcrydmW3ZJeuSoKZIKjze3w
MB8GA1UdIwQYMBaAFP1whtcrydmW3ZJeuSoKZIKjze3wMAwGA1UdEwQFMAMBAf8w
DQYJKoZIhvcNAQEFBQADggEBAG2erXhwRAa7+ZOBs0B6X57Hwyd1R4kfmXcs0rta
lbPpvgULSiB+TCbf3EbhJnHGyvdCY1tvlffLjdA7HJ0PCOn+YYLBA0pTU/dyvrN6
Su8NuS5yubnt9mb13nDGYo1rnt0YRfxN+8DM3fXIVr038A30UlPX2Ou1ExFJT0MZ
uFKY6ZvLdI6/1cbgmguMlAhM+DhKyV6Sr5699LM3zqeI816pZmlREETYkGr91q7k
BpXJu/dtHaGxg1ZGu6w/PCsYGUcECWENYD4VQPd8N32JjOfu6vEgoEAwfPP+3oGp
Z4m3ewACcWOAenqflb+cQYC4PsF7qbXDmRaWrbKntOlZ3n0=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIGMTCCBBmgAwIBAgICEAAwDQYJKoZIhvcNAQELBQAwajELMAkGA1UEBhMCVVMx
CzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJzMS0w
KwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwHhcN
MTgwMjI1MTUzNzM3WhcNMjgwMjIzMTUzNzM3WjBfMQswCQYDVQQGEwJVUzELMAkG
A1UECAwCQ0ExEjAQBgNVBAoMCVJlZGlzTGFiczEvMC0GA1UEAwwmUkNQIEludGVy
bWVkaWF0ZSBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkwggIiMA0GCSqGSIb3DQEBAQUA
A4ICDwAwggIKAoICAQDf9dqbxc8Bq7Ctq9rWcxrGNKKHivqLAFpPq02yLPx6fsOv
Tq7GsDChAYBBc4v7Y2Ap9RD5Vs3dIhEANcnolf27QwrG9RMnnvzk8pCvp1o6zSU4
VuOE1W66/O1/7e2rVxyrnTcP7UgK43zNIXu7+tiAqWsO92uSnuMoGPGpeaUm1jym
hjWKtkAwDFSqvHY+XL5qDVBEjeUe+WHkYUg40cAXjusAqgm2hZt29c2wnVrxW25W
P0meNlzHGFdA2AC5z54iRiqj57dTfBTkHoBczQxcyw6hhzxZQ4e5I5zOKjXXEhZN
r0tA3YC14CTabKRus/JmZieyZzRgEy2oti64tmLYTqSlAD78pRL40VNoaSYetXLw
hhNsXCHgWaY6d5bLOc/aIQMAV5oLvZQKvuXAF1IDmhPA+bZbpWipp0zagf1P1H3s
UzsMdn2KM0ejzgotbtNlj5TcrVwpmvE3ktvUAuA+hi3FkVx1US+2Gsp5x4YOzJ7u
P1WPk6ShF0JgnJH2ILdj6kttTWwFzH17keSFICWDfH/+kM+k7Y1v3EXMQXE7y0T9
MjvJskz6d/nv+sQhY04xt64xFMGTnZjlJMzfQNi7zWFLTZnDD0lPowq7l3YiPoTT
t5Xky83lu0KZsZBo0WlWaDG00gLVdtRgVbcuSWxpi5BdLb1kRab66JptWjxwXQID
AQABo4HrMIHoMDoGA1UdHwQzMDEwL6AtoCuGKWh0dHBzOi8vcmwtY2Etc2VydmVy
LnJlZGlzbGFicy5jb20vdjEvY3JsMEYGCCsGAQUFBwEBBDowODA2BggrBgEFBQcw
AYYqaHR0cHM6Ly9ybC1jYS1zZXJ2ZXIucmVkaXNsYWJzLmNvbS92MS9vY3NwMB0G
A1UdDgQWBBQHar5OKvQUpP2qWt6mckzToeCOHDAfBgNVHSMEGDAWgBQi42wH6hM4
L2sujEvLM0/u8lRXTzASBgNVHRMBAf8ECDAGAQH/AgEAMA4GA1UdDwEB/wQEAwIB
hjANBgkqhkiG9w0BAQsFAAOCAgEAirEn/iTsAKyhd+pu2W3Z5NjCko4NPU0EYUbr
AP7+POK2rzjIrJO3nFYQ/LLuC7KCXG+2qwan2SAOGmqWst13Y+WHp44Kae0kaChW
vcYLXXSoGQGC8QuFSNUdaeg3RbMDYFT04dOkqufeWVccoHVxyTSg9eD8LZuHn5jw
7QDLiEECBmIJHk5Eeo2TAZrx4Yx6ufSUX5HeVjlAzqwtAqdt99uCJ/EL8bgpWbe+
XoSpvUv0SEC1I1dCAhCKAvRlIOA6VBcmzg5Am12KzkqTul12/VEFIgzqu0Zy2Jbc
AUPrYVu/+tOGXQaijy7YgwH8P8n3s7ZeUa1VABJHcxrxYduDDJBLZi+MjheUDaZ1
jQRHYevI2tlqeSBqdPKG4zBY5lS0GiAlmuze5oENt0P3XboHoZPHiqcK3VECgTVh
/BkJcuudETSJcZDmQ8YfoKfBzRQNg2sv/hwvUv73Ss51Sco8GEt2lD8uEdib1Q6z
zDT5lXJowSzOD5ZA9OGDjnSRL+2riNtKWKEqvtEG3VBJoBzu9GoxbAc7wIZLxmli
iF5a/Zf5X+UXD3s4TMmy6C4QZJpAA2egsSQCnraWO2ULhh7iXMysSkF/nzVfZn43
iqpaB8++9a37hWq14ZmOv0TJIDz//b2+KC4VFXWQ5W5QC6whsjT+OlG4p5ZYG0jo
616pxqo=
-----END CERTIFICATE-----
-----BEGIN CERTIFICATE-----
MIIFujCCA6KgAwIBAgIJAJ1aTT1lu2ScMA0GCSqGSIb3DQEBCwUAMGoxCzAJBgNV
BAYTAlVTMQswCQYDVQQIDAJDQTELMAkGA1UEBwwCQ0ExEjAQBgNVBAoMCVJlZGlz
TGFiczEtMCsGA1UEAwwkUmVkaXNMYWJzIFJvb3QgQ2VydGlmaWNhdGUgQXV0aG9y
aXR5MB4XDTE4MDIyNTE1MjA0MloXDTM4MDIyMDE1MjA0MlowajELMAkGA1UEBhMC
VVMxCzAJBgNVBAgMAkNBMQswCQYDVQQHDAJDQTESMBAGA1UECgwJUmVkaXNMYWJz
MS0wKwYDVQQDDCRSZWRpc0xhYnMgUm9vdCBDZXJ0aWZpY2F0ZSBBdXRob3JpdHkw
ggIiMA0GCSqGSIb3DQEBAQUAA4ICDwAwggIKAoICAQDLEjXy7YrbN5Waau5cd6g1
G5C2tMmeTpZ0duFAPxNU4oE3RHS5gGiok346fUXuUxbZ6QkuzeN2/2Z+RmRcJhQY
Dm0ZgdG4x59An1TJfnzKKoWj8ISmoHS/TGNBdFzXV7FYNLBuqZouqePI6ReC6Qhl
pp45huV32Q3a6IDrrvx7Wo5ZczEQeFNbCeCOQYNDdTmCyEkHqc2AGo8eoIlSTutT
ULOC7R5gzJVTS0e1hesQ7jmqHjbO+VQS1NAL4/5K6cuTEqUl+XhVhPdLWBXJQ5ag
54qhX4v+ojLzeU1R/Vc6NjMvVtptWY6JihpgplprN0Yh2556ewcXMeturcKgXfGJ
xeYzsjzXerEjrVocX5V8BNrg64NlifzTMKNOOv4fVZszq1SIHR8F9ROrqiOdh8iC
JpUbLpXH9hWCSEO6VRMB2xJoKu3cgl63kF30s77x7wLFMEHiwsQRKxooE1UhgS9K
2sO4TlQ1eWUvFvHSTVDQDlGQ6zu4qjbOpb3Q8bQwoK+ai2alkXVR4Ltxe9QlgYK3
StsnPhruzZGA0wbXdpw0bnM+YdlEm5ffSTpNIfgHeaa7Dtb801FtA71ZlH7A6TaI
SIQuUST9EKmv7xrJyx0W1pGoPOLw5T029aTjnICSLdtV9bLwysrLhIYG5bnPq78B
cS+jZHFGzD7PUVGQD01nOQIDAQABo2MwYTAdBgNVHQ4EFgQUIuNsB+oTOC9rLoxL
yzNP7vJUV08wHwYDVR0jBBgwFoAUIuNsB+oTOC9rLoxLyzNP7vJUV08wDwYDVR0T
AQH/BAUwAwEB/zAOBgNVHQ8BAf8EBAMCAYYwDQYJKoZIhvcNAQELBQADggIBAHfg
z5pMNUAKdMzK1aS1EDdK9yKz4qicILz5czSLj1mC7HKDRy8cVADUxEICis++CsCu
rYOvyCVergHQLREcxPq4rc5Nq1uj6J6649NEeh4WazOOjL4ZfQ1jVznMbGy+fJm3
3Hoelv6jWRG9iqeJZja7/1s6YC6bWymI/OY1e4wUKeNHAo+Vger7MlHV+RuabaX+
hSJ8bJAM59NCM7AgMTQpJCncrcdLeceYniGy5Q/qt2b5mJkQVkIdy4TPGGB+AXDJ
D0q3I/JDRkDUFNFdeW0js7fHdsvCR7O3tJy5zIgEV/o/BCkmJVtuwPYOrw/yOlKj
TY/U7ATAx9VFF6/vYEOMYSmrZlFX+98L6nJtwDqfLB5VTltqZ4H/KBxGE3IRSt9l
FXy40U+LnXzhhW+7VBAvyYX8GEXhHkKU8Gqk1xitrqfBXY74xKgyUSTolFSfFVgj
mcM/X4K45bka+qpkj7Kfv/8D4j6aZekwhN2ly6hhC1SmQ8qjMjpG/mrWOSSHZFmf
ybu9iD2AYHeIOkshIl6xYIa++Q/00/vs46IzAbQyriOi0XxlSMMVtPx0Q3isp+ji
n8Mq9eOuxYOEQ4of8twUkUDd528iwGtEdwf0Q01UyT84S62N8AySl1ZBKXJz6W4F
UhWfa/HQYOAPDdEjNgnVwLI23b8t0TozyCWw7q8h
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIEjzCCA3egAwIBAgIQe55B/ALCKJDZtdNT8kD6hTANBgkqhkiG9w0BAQsFADBM
MSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEGA1UEChMKR2xv
YmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjAeFw0yMjAxMjYxMjAwMDBaFw0y
NTAxMjYwMDAwMDBaMFgxCzAJBgNVBAYTAkJFMRkwFwYDVQQKExBHbG9iYWxTaWdu
IG52LXNhMS4wLAYDVQQDEyVHbG9iYWxTaWduIEF0bGFzIFIzIE9WIFRMUyBDQSAy
MDIyIFEyMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmGmg1LW9b7Lf
8zDD83yBDTEkt+FOxKJZqF4veWc5KZsQj9HfnUS2e5nj/E+JImlGPsQuoiosLuXD
BVBNAMcUFa11buFMGMeEMwiTmCXoXRrXQmH0qjpOfKgYc5gHG3BsRGaRrf7VR4eg
ofNMG9wUBw4/g/TT7+bQJdA4NfE7Y4d5gEryZiBGB/swaX6Jp/8MF4TgUmOWmalK
dZCKyb4sPGQFRTtElk67F7vU+wdGcrcOx1tDcIB0ncjLPMnaFicagl+daWGsKqTh
counQb6QJtYHa91KvCfKWocMxQ7OIbB5UARLPmC4CJ1/f8YFm35ebfzAeULYdGXu
jE9CLor0OwIDAQABo4IBXzCCAVswDgYDVR0PAQH/BAQDAgGGMB0GA1UdJQQWMBQG
CCsGAQUFBwMBBggrBgEFBQcDAjASBgNVHRMBAf8ECDAGAQH/AgEAMB0GA1UdDgQW
BBSH5Zq7a7B/t95GfJWkDBpA8HHqdjAfBgNVHSMEGDAWgBSP8Et/qC5FJK5NUPpj
move4t0bvDB7BggrBgEFBQcBAQRvMG0wLgYIKwYBBQUHMAGGImh0dHA6Ly9vY3Nw
Mi5nbG9iYWxzaWduLmNvbS9yb290cjMwOwYIKwYBBQUHMAKGL2h0dHA6Ly9zZWN1
cmUuZ2xvYmFsc2lnbi5jb20vY2FjZXJ0L3Jvb3QtcjMuY3J0MDYGA1UdHwQvMC0w
K6ApoCeGJWh0dHA6Ly9jcmwuZ2xvYmFsc2lnbi5jb20vcm9vdC1yMy5jcmwwIQYD
VR0gBBowGDAIBgZngQwBAgIwDAYKKwYBBAGgMgoBAjANBgkqhkiG9w0BAQsFAAOC
AQEAKRic9/f+nmhQU/wz04APZLjgG5OgsuUOyUEZjKVhNGDwxGTvKhyXGGAMW2B/
3bRi+aElpXwoxu3pL6fkElbX3B0BeS5LoDtxkyiVEBMZ8m+sXbocwlPyxrPbX6mY
0rVIvnuUeBH8X0L5IwfpNVvKnBIilTbcebfHyXkPezGwz7E1yhUULjJFm2bt0SdX
y+4X/WeiiYIv+fTVgZZgl+/2MKIsu/qdBJc3f3TvJ8nz+Eax1zgZmww+RSQWeOj3
15Iw6Z5FX+NwzY/Ab+9PosR5UosSeq+9HhtaxZttXG1nVh+avYPGYddWmiMT90J5
ZgKnO/Fx2hBgTxhOTMYaD312kg==
-----END CERTIFICATE-----

-----BEGIN CERTIFICATE-----
MIIDXzCCAkegAwIBAgILBAAAAAABIVhTCKIwDQYJKoZIhvcNAQELBQAwTDEgMB4G
A1UECxMXR2xvYmFsU2lnbiBSb290IENBIC0gUjMxEzARBgNVBAoTCkdsb2JhbFNp
Z24xEzARBgNVBAMTCkdsb2JhbFNpZ24wHhcNMDkwMzE4MTAwMDAwWhcNMjkwMzE4
MTAwMDAwWjBMMSAwHgYDVQQLExdHbG9iYWxTaWduIFJvb3QgQ0EgLSBSMzETMBEG
A1UEChMKR2xvYmFsU2lnbjETMBEGA1UEAxMKR2xvYmFsU2lnbjCCASIwDQYJKoZI
hvcNAQEBBQADggEPADCCAQoCggEBAMwldpB5BngiFvXAg7aEyiie/QV2EcWtiHL8
RgJDx7KKnQRfJMsuS+FggkbhUqsMgUdwbN1k0ev1LKMPgj0MK66X17YUhhB5uzsT
gHeMCOFJ0mpiLx9e+pZo34knlTifBtc+ycsmWQ1z3rDI6SYOgxXG71uL0gRgykmm
KPZpO/bLyCiR5Z2KYVc3rHQU3HTgOu5yLy6c+9C7v/U9AOEGM+iCK65TpjoWc4zd
QQ4gOsC0p6Hpsk+QLjJg6VfLuQSSaGjlOCZgdbKfd/+RFO+uIEn8rUAVSNECMWEZ
XriX7613t2Saer9fwRPvm2L7DWzgVGkWqQPabumDk3F2xmmFghcCAwEAAaNCMEAw
DgYDVR0PAQH/BAQDAgEGMA8GA1UdEwEB/wQFMAMBAf8wHQYDVR0OBBYEFI/wS3+o
LkUkrk1Q+mOai97i3Ru8MA0GCSqGSIb3DQEBCwUAA4IBAQBLQNvAUKr+yAzv95ZU
RUm7lgAJQayzE4aGKAczymvmdLm6AC2upArT9fHxD4q/c2dKg8dEe3jgr25sbwMp
jjM5RcOO5LlXbKr8EpbsU8Yt5CRsuZRj+9xTaGdWPoO4zzUhw8lo/s7awlOqzJCK
6fBdRoyV3XpYKBovHd7NADdBj+1EbddTKJd+82cEHhXXipa0095MJ6RMG3NzdvQX
mcIfeg7jLQitChws/zyrVQ4PkX4268NXSb7hLi18YIvDQVETI53O9zJrlAGomecs
Mx86OyXShkDOOyyGeMlhLxS67ttVb9+E7gUJTb0o2HLO02JQZR7rkpeDMdmztcpH
WD9f
-----END CERTIFICATE-----`;
const TLSProfiles = {
    RedisCloudFixed: { ca: RedisCloudCA },
    RedisCloudFlexible: { ca: RedisCloudCA },
};
exports["default"] = TLSProfiles;


/***/ }),

/***/ 1784:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const redis_errors_1 = __nccwpck_require__(6961);
class ClusterAllFailedError extends redis_errors_1.RedisError {
    constructor(message, lastNodeError) {
        super(message);
        this.lastNodeError = lastNodeError;
        Error.captureStackTrace(this, this.constructor);
    }
    get name() {
        return this.constructor.name;
    }
}
exports["default"] = ClusterAllFailedError;
ClusterAllFailedError.defaultMessage = "Failed to refresh slots cache.";


/***/ }),

/***/ 9256:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const redis_errors_1 = __nccwpck_require__(6961);
class MaxRetriesPerRequestError extends redis_errors_1.AbortError {
    constructor(maxRetriesPerRequest) {
        const message = `Reached the max retries per request limit (which is ${maxRetriesPerRequest}). Refer to "maxRetriesPerRequest" option for details.`;
        super(message);
        Error.captureStackTrace(this, this.constructor);
    }
    get name() {
        return this.constructor.name;
    }
}
exports["default"] = MaxRetriesPerRequestError;


/***/ }),

/***/ 4926:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaxRetriesPerRequestError = void 0;
const MaxRetriesPerRequestError_1 = __nccwpck_require__(9256);
exports.MaxRetriesPerRequestError = MaxRetriesPerRequestError_1.default;


/***/ }),

/***/ 7796:
/***/ ((module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.print = exports.ReplyError = exports.SentinelIterator = exports.SentinelConnector = exports.AbstractConnector = exports.Pipeline = exports.ScanStream = exports.Command = exports.Cluster = exports.Redis = exports["default"] = void 0;
exports = module.exports = __nccwpck_require__(5695)["default"];
var Redis_1 = __nccwpck_require__(5695);
Object.defineProperty(exports, "default", ({ enumerable: true, get: function () { return Redis_1.default; } }));
var Redis_2 = __nccwpck_require__(5695);
Object.defineProperty(exports, "Redis", ({ enumerable: true, get: function () { return Redis_2.default; } }));
var cluster_1 = __nccwpck_require__(1633);
Object.defineProperty(exports, "Cluster", ({ enumerable: true, get: function () { return cluster_1.default; } }));
/**
 * @ignore
 */
var Command_1 = __nccwpck_require__(5017);
Object.defineProperty(exports, "Command", ({ enumerable: true, get: function () { return Command_1.default; } }));
/**
 * @ignore
 */
var ScanStream_1 = __nccwpck_require__(6443);
Object.defineProperty(exports, "ScanStream", ({ enumerable: true, get: function () { return ScanStream_1.default; } }));
/**
 * @ignore
 */
var Pipeline_1 = __nccwpck_require__(8940);
Object.defineProperty(exports, "Pipeline", ({ enumerable: true, get: function () { return Pipeline_1.default; } }));
/**
 * @ignore
 */
var AbstractConnector_1 = __nccwpck_require__(2348);
Object.defineProperty(exports, "AbstractConnector", ({ enumerable: true, get: function () { return AbstractConnector_1.default; } }));
/**
 * @ignore
 */
var SentinelConnector_1 = __nccwpck_require__(8325);
Object.defineProperty(exports, "SentinelConnector", ({ enumerable: true, get: function () { return SentinelConnector_1.default; } }));
Object.defineProperty(exports, "SentinelIterator", ({ enumerable: true, get: function () { return SentinelConnector_1.SentinelIterator; } }));
// No TS typings
exports.ReplyError = __nccwpck_require__(6961).ReplyError;
/**
 * @ignore
 */
Object.defineProperty(exports, "Promise", ({
    get() {
        console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
        return Promise;
    },
    set(_lib) {
        console.warn("ioredis v5 does not support plugging third-party Promise library anymore. Native Promise will be used.");
    },
}));
/**
 * @ignore
 */
function print(err, reply) {
    if (err) {
        console.log("Error: " + err);
    }
    else {
        console.log("Reply: " + reply);
    }
}
exports.print = print;


/***/ }),

/***/ 7669:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DEFAULT_REDIS_OPTIONS = void 0;
exports.DEFAULT_REDIS_OPTIONS = {
    // Connection
    port: 6379,
    host: "localhost",
    family: 4,
    connectTimeout: 10000,
    disconnectTimeout: 2000,
    retryStrategy: function (times) {
        return Math.min(times * 50, 2000);
    },
    keepAlive: 0,
    noDelay: true,
    connectionName: null,
    // Sentinel
    sentinels: null,
    name: null,
    role: "master",
    sentinelRetryStrategy: function (times) {
        return Math.min(times * 10, 1000);
    },
    sentinelReconnectStrategy: function () {
        // This strategy only applies when sentinels are used for detecting
        // a failover, not during initial master resolution.
        // The deployment can still function when some of the sentinels are down
        // for a long period of time, so we may not want to attempt reconnection
        // very often. Therefore the default interval is fairly long (1 minute).
        return 60000;
    },
    natMap: null,
    enableTLSForSentinelMode: false,
    updateSentinels: true,
    failoverDetector: false,
    // Status
    username: null,
    password: null,
    db: 0,
    // Others
    enableOfflineQueue: true,
    enableReadyCheck: true,
    autoResubscribe: true,
    autoResendUnfulfilledCommands: true,
    lazyConnect: false,
    keyPrefix: "",
    reconnectOnError: null,
    readOnly: false,
    stringNumbers: false,
    maxRetriesPerRequest: 20,
    maxLoadingRetryTime: 10000,
    enableAutoPipelining: false,
    autoPipeliningIgnoredCommands: [],
    sentinelMaxConnections: 10,
};


/***/ }),

/***/ 1107:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readyHandler = exports.errorHandler = exports.closeHandler = exports.connectHandler = void 0;
const redis_errors_1 = __nccwpck_require__(6961);
const Command_1 = __nccwpck_require__(5017);
const errors_1 = __nccwpck_require__(4926);
const utils_1 = __nccwpck_require__(7670);
const DataHandler_1 = __nccwpck_require__(4588);
const debug = (0, utils_1.Debug)("connection");
function connectHandler(self) {
    return function () {
        self.setStatus("connect");
        self.resetCommandQueue();
        // AUTH command should be processed before any other commands
        let flushed = false;
        const { connectionEpoch } = self;
        if (self.condition.auth) {
            self.auth(self.condition.auth, function (err) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (err.message.indexOf("no password is set") !== -1) {
                        console.warn("[WARN] Redis server does not require a password, but a password was supplied.");
                    }
                    else if (err.message.indexOf("without any password configured for the default user") !== -1) {
                        console.warn("[WARN] This Redis server's `default` user does not require a password, but a password was supplied");
                    }
                    else if (err.message.indexOf("wrong number of arguments for 'auth' command") !== -1) {
                        console.warn(`[ERROR] The server returned "wrong number of arguments for 'auth' command". You are probably passing both username and password to Redis version 5 or below. You should only pass the 'password' option for Redis version 5 and under.`);
                    }
                    else {
                        flushed = true;
                        self.recoverFromFatalError(err, err);
                    }
                }
            });
        }
        if (self.condition.select) {
            self.select(self.condition.select).catch((err) => {
                // If the node is in cluster mode, select is disallowed.
                // In this case, reconnect won't help.
                self.silentEmit("error", err);
            });
        }
        if (!self.options.enableReadyCheck) {
            exports.readyHandler(self)();
        }
        /*
          No need to keep the reference of DataHandler here
          because we don't need to do the cleanup.
          `Stream#end()` will remove all listeners for us.
        */
        new DataHandler_1.default(self, {
            stringNumbers: self.options.stringNumbers,
        });
        if (self.options.enableReadyCheck) {
            self._readyCheck(function (err, info) {
                if (connectionEpoch !== self.connectionEpoch) {
                    return;
                }
                if (err) {
                    if (!flushed) {
                        self.recoverFromFatalError(new Error("Ready check failed: " + err.message), err);
                    }
                }
                else {
                    if (self.connector.check(info)) {
                        exports.readyHandler(self)();
                    }
                    else {
                        self.disconnect(true);
                    }
                }
            });
        }
    };
}
exports.connectHandler = connectHandler;
function abortError(command) {
    const err = new redis_errors_1.AbortError("Command aborted due to connection close");
    err.command = {
        name: command.name,
        args: command.args,
    };
    return err;
}
// If a contiguous set of pipeline commands starts from index zero then they
// can be safely reattempted. If however we have a chain of pipelined commands
// starting at index 1 or more it means we received a partial response before
// the connection close and those pipelined commands must be aborted. For
// example, if the queue looks like this: [2, 3, 4, 0, 1, 2] then after
// aborting and purging we'll have a queue that looks like this: [0, 1, 2]
function abortIncompletePipelines(commandQueue) {
    var _a;
    let expectedIndex = 0;
    for (let i = 0; i < commandQueue.length;) {
        const command = (_a = commandQueue.peekAt(i)) === null || _a === void 0 ? void 0 : _a.command;
        const pipelineIndex = command.pipelineIndex;
        if (pipelineIndex === undefined || pipelineIndex === 0) {
            expectedIndex = 0;
        }
        if (pipelineIndex !== undefined && pipelineIndex !== expectedIndex++) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            continue;
        }
        i++;
    }
}
// If only a partial transaction result was received before connection close,
// we have to abort any transaction fragments that may have ended up in the
// offline queue
function abortTransactionFragments(commandQueue) {
    var _a;
    for (let i = 0; i < commandQueue.length;) {
        const command = (_a = commandQueue.peekAt(i)) === null || _a === void 0 ? void 0 : _a.command;
        if (command.name === "multi") {
            break;
        }
        if (command.name === "exec") {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
            break;
        }
        if (command.inTransaction) {
            commandQueue.remove(i, 1);
            command.reject(abortError(command));
        }
        else {
            i++;
        }
    }
}
function closeHandler(self) {
    return function () {
        const prevStatus = self.status;
        self.setStatus("close");
        if (self.commandQueue.length) {
            abortIncompletePipelines(self.commandQueue);
        }
        if (self.offlineQueue.length) {
            abortTransactionFragments(self.offlineQueue);
        }
        if (prevStatus === "ready") {
            if (!self.prevCondition) {
                self.prevCondition = self.condition;
            }
            if (self.commandQueue.length) {
                self.prevCommandQueue = self.commandQueue;
            }
        }
        if (self.manuallyClosing) {
            self.manuallyClosing = false;
            debug("skip reconnecting since the connection is manually closed.");
            return close();
        }
        if (typeof self.options.retryStrategy !== "function") {
            debug("skip reconnecting because `retryStrategy` is not a function");
            return close();
        }
        const retryDelay = self.options.retryStrategy(++self.retryAttempts);
        if (typeof retryDelay !== "number") {
            debug("skip reconnecting because `retryStrategy` doesn't return a number");
            return close();
        }
        debug("reconnect in %sms", retryDelay);
        self.setStatus("reconnecting", retryDelay);
        self.reconnectTimeout = setTimeout(function () {
            self.reconnectTimeout = null;
            self.connect().catch(utils_1.noop);
        }, retryDelay);
        const { maxRetriesPerRequest } = self.options;
        if (typeof maxRetriesPerRequest === "number") {
            if (maxRetriesPerRequest < 0) {
                debug("maxRetriesPerRequest is negative, ignoring...");
            }
            else {
                const remainder = self.retryAttempts % (maxRetriesPerRequest + 1);
                if (remainder === 0) {
                    debug("reach maxRetriesPerRequest limitation, flushing command queue...");
                    self.flushQueue(new errors_1.MaxRetriesPerRequestError(maxRetriesPerRequest));
                }
            }
        }
    };
    function close() {
        self.setStatus("end");
        self.flushQueue(new Error(utils_1.CONNECTION_CLOSED_ERROR_MSG));
    }
}
exports.closeHandler = closeHandler;
function errorHandler(self) {
    return function (error) {
        debug("error: %s", error);
        self.silentEmit("error", error);
    };
}
exports.errorHandler = errorHandler;
function readyHandler(self) {
    return function () {
        self.setStatus("ready");
        self.retryAttempts = 0;
        if (self.options.monitor) {
            self.call("monitor").then(() => self.setStatus("monitoring"), (error) => self.emit("error", error));
            const { sendCommand } = self;
            self.sendCommand = function (command) {
                if (Command_1.default.checkFlag("VALID_IN_MONITOR_MODE", command.name)) {
                    return sendCommand.call(self, command);
                }
                command.reject(new Error("Connection is in monitoring mode, can't process commands."));
                return command.promise;
            };
            self.once("close", function () {
                delete self.sendCommand;
            });
            return;
        }
        const finalSelect = self.prevCondition
            ? self.prevCondition.select
            : self.condition.select;
        if (self.options.connectionName) {
            debug("set the connection name [%s]", self.options.connectionName);
            self.client("setname", self.options.connectionName).catch(utils_1.noop);
        }
        if (self.options.readOnly) {
            debug("set the connection to readonly mode");
            self.readonly().catch(utils_1.noop);
        }
        if (self.prevCondition) {
            const condition = self.prevCondition;
            self.prevCondition = null;
            if (condition.subscriber && self.options.autoResubscribe) {
                // We re-select the previous db first since
                // `SELECT` command is not valid in sub mode.
                if (self.condition.select !== finalSelect) {
                    debug("connect to db [%d]", finalSelect);
                    self.select(finalSelect);
                }
                const subscribeChannels = condition.subscriber.channels("subscribe");
                if (subscribeChannels.length) {
                    debug("subscribe %d channels", subscribeChannels.length);
                    self.subscribe(subscribeChannels);
                }
                const psubscribeChannels = condition.subscriber.channels("psubscribe");
                if (psubscribeChannels.length) {
                    debug("psubscribe %d channels", psubscribeChannels.length);
                    self.psubscribe(psubscribeChannels);
                }
                const ssubscribeChannels = condition.subscriber.channels("ssubscribe");
                if (ssubscribeChannels.length) {
                    debug("ssubscribe %d channels", ssubscribeChannels.length);
                    self.ssubscribe(ssubscribeChannels);
                }
            }
        }
        if (self.prevCommandQueue) {
            if (self.options.autoResendUnfulfilledCommands) {
                debug("resend %d unfulfilled commands", self.prevCommandQueue.length);
                while (self.prevCommandQueue.length > 0) {
                    const item = self.prevCommandQueue.shift();
                    if (item.select !== self.condition.select &&
                        item.command.name !== "select") {
                        self.select(item.select);
                    }
                    self.sendCommand(item.command, item.stream);
                }
            }
            else {
                self.prevCommandQueue = null;
            }
        }
        if (self.offlineQueue.length) {
            debug("send %d commands in offline queue", self.offlineQueue.length);
            const offlineQueue = self.offlineQueue;
            self.resetOfflineQueue();
            while (offlineQueue.length > 0) {
                const item = offlineQueue.shift();
                if (item.select !== self.condition.select &&
                    item.command.name !== "select") {
                    self.select(item.select);
                }
                self.sendCommand(item.command, item.stream);
            }
        }
        if (self.condition.select !== finalSelect) {
            debug("connect to db [%d]", finalSelect);
            self.select(finalSelect);
        }
    };
}
exports.readyHandler = readyHandler;


/***/ }),

/***/ 5708:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.addTransactionSupport = void 0;
const utils_1 = __nccwpck_require__(7670);
const standard_as_callback_1 = __nccwpck_require__(5659);
const Pipeline_1 = __nccwpck_require__(8940);
function addTransactionSupport(redis) {
    redis.pipeline = function (commands) {
        const pipeline = new Pipeline_1.default(this);
        if (Array.isArray(commands)) {
            pipeline.addBatch(commands);
        }
        return pipeline;
    };
    const { multi } = redis;
    redis.multi = function (commands, options) {
        if (typeof options === "undefined" && !Array.isArray(commands)) {
            options = commands;
            commands = null;
        }
        if (options && options.pipeline === false) {
            return multi.call(this);
        }
        const pipeline = new Pipeline_1.default(this);
        // @ts-expect-error
        pipeline.multi();
        if (Array.isArray(commands)) {
            pipeline.addBatch(commands);
        }
        const exec = pipeline.exec;
        pipeline.exec = function (callback) {
            // Wait for the cluster to be connected, since we need nodes information before continuing
            if (this.isCluster && !this.redis.slots.length) {
                if (this.redis.status === "wait")
                    this.redis.connect().catch(utils_1.noop);
                return (0, standard_as_callback_1.default)(new Promise((resolve, reject) => {
                    this.redis.delayUntilReady((err) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        this.exec(pipeline).then(resolve, reject);
                    });
                }), callback);
            }
            if (this._transactions > 0) {
                exec.call(pipeline);
            }
            // Returns directly when the pipeline
            // has been called multiple times (retries).
            if (this.nodeifiedPromise) {
                return exec.call(pipeline);
            }
            const promise = exec.call(pipeline);
            return (0, standard_as_callback_1.default)(promise.then(function (result) {
                const execResult = result[result.length - 1];
                if (typeof execResult === "undefined") {
                    throw new Error("Pipeline cannot be used to send any commands when the `exec()` has been called on it.");
                }
                if (execResult[0]) {
                    execResult[0].previousErrors = [];
                    for (let i = 0; i < result.length - 1; ++i) {
                        if (result[i][0]) {
                            execResult[0].previousErrors.push(result[i][0]);
                        }
                    }
                    throw execResult[0];
                }
                return (0, utils_1.wrapMultiResult)(execResult[1]);
            }), callback);
        };
        // @ts-expect-error
        const { execBuffer } = pipeline;
        // @ts-expect-error
        pipeline.execBuffer = function (callback) {
            if (this._transactions > 0) {
                execBuffer.call(pipeline);
            }
            return pipeline.exec(callback);
        };
        return pipeline;
    };
    const { exec } = redis;
    redis.exec = function (callback) {
        return (0, standard_as_callback_1.default)(exec.call(this).then(function (results) {
            if (Array.isArray(results)) {
                results = (0, utils_1.wrapMultiResult)(results);
            }
            return results;
        }), callback);
    };
}
exports.addTransactionSupport = addTransactionSupport;


/***/ }),

/***/ 3240:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const commands_1 = __nccwpck_require__(4317);
const autoPipelining_1 = __nccwpck_require__(8596);
const Command_1 = __nccwpck_require__(5017);
const Script_1 = __nccwpck_require__(6833);
// eslint-disable-next-line @typescript-eslint/no-unused-vars
class Commander {
    constructor() {
        this.options = {};
        /**
         * @ignore
         */
        this.scriptsSet = {};
        /**
         * @ignore
         */
        this.addedBuiltinSet = new Set();
    }
    /**
     * Return supported builtin commands
     */
    getBuiltinCommands() {
        return commands.slice(0);
    }
    /**
     * Create a builtin command
     */
    createBuiltinCommand(commandName) {
        return {
            string: generateFunction(null, commandName, "utf8"),
            buffer: generateFunction(null, commandName, null),
        };
    }
    /**
     * Create add builtin command
     */
    addBuiltinCommand(commandName) {
        this.addedBuiltinSet.add(commandName);
        this[commandName] = generateFunction(commandName, commandName, "utf8");
        this[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
    }
    /**
     * Define a custom command using lua script
     */
    defineCommand(name, definition) {
        const script = new Script_1.default(definition.lua, definition.numberOfKeys, this.options.keyPrefix, definition.readOnly);
        this.scriptsSet[name] = script;
        this[name] = generateScriptingFunction(name, name, script, "utf8");
        this[name + "Buffer"] = generateScriptingFunction(name + "Buffer", name, script, null);
    }
    /**
     * @ignore
     */
    sendCommand(command, stream, node) {
        throw new Error('"sendCommand" is not implemented');
    }
}
const commands = commands_1.list.filter((command) => command !== "monitor");
commands.push("sentinel");
commands.forEach(function (commandName) {
    Commander.prototype[commandName] = generateFunction(commandName, commandName, "utf8");
    Commander.prototype[commandName + "Buffer"] = generateFunction(commandName + "Buffer", commandName, null);
});
Commander.prototype.call = generateFunction("call", "utf8");
Commander.prototype.callBuffer = generateFunction("callBuffer", null);
// @ts-expect-error
Commander.prototype.send_command = Commander.prototype.call;
function generateFunction(functionName, _commandName, _encoding) {
    if (typeof _encoding === "undefined") {
        _encoding = _commandName;
        _commandName = null;
    }
    return function (...args) {
        const commandName = (_commandName || args.shift());
        let callback = args[args.length - 1];
        if (typeof callback === "function") {
            args.pop();
        }
        else {
            callback = undefined;
        }
        const options = {
            errorStack: this.options.showFriendlyErrorStack ? new Error() : undefined,
            keyPrefix: this.options.keyPrefix,
            replyEncoding: _encoding,
        };
        // No auto pipeline, use regular command sending
        if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
            return this.sendCommand(
            // @ts-expect-error
            new Command_1.default(commandName, args, options, callback));
        }
        // Create a new pipeline and make sure it's scheduled
        return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, 
        // @ts-expect-error
        args, callback);
    };
}
function generateScriptingFunction(functionName, commandName, script, encoding) {
    return function (...args) {
        const callback = typeof args[args.length - 1] === "function" ? args.pop() : undefined;
        const options = {
            replyEncoding: encoding,
        };
        if (this.options.showFriendlyErrorStack) {
            options.errorStack = new Error();
        }
        // No auto pipeline, use regular command sending
        if (!(0, autoPipelining_1.shouldUseAutoPipelining)(this, functionName, commandName)) {
            return script.execute(this, args, options, callback);
        }
        // Create a new pipeline and make sure it's scheduled
        return (0, autoPipelining_1.executeWithAutoPipelining)(this, functionName, commandName, args, callback);
    };
}
exports["default"] = Commander;


/***/ }),

/***/ 6985:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
function applyMixin(derivedConstructor, mixinConstructor) {
    Object.getOwnPropertyNames(mixinConstructor.prototype).forEach((name) => {
        Object.defineProperty(derivedConstructor.prototype, name, Object.getOwnPropertyDescriptor(mixinConstructor.prototype, name));
    });
}
exports["default"] = applyMixin;


/***/ }),

/***/ 7633:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.genRedactedString = exports.getStringValue = exports.MAX_ARGUMENT_LENGTH = void 0;
const debug_1 = __nccwpck_require__(2830);
const MAX_ARGUMENT_LENGTH = 200;
exports.MAX_ARGUMENT_LENGTH = MAX_ARGUMENT_LENGTH;
const NAMESPACE_PREFIX = "ioredis";
/**
 * helper function that tried to get a string value for
 * arbitrary "debug" arg
 */
function getStringValue(v) {
    if (v === null) {
        return;
    }
    switch (typeof v) {
        case "boolean":
            return;
        case "number":
            return;
        case "object":
            if (Buffer.isBuffer(v)) {
                return v.toString("hex");
            }
            if (Array.isArray(v)) {
                return v.join(",");
            }
            try {
                return JSON.stringify(v);
            }
            catch (e) {
                return;
            }
        case "string":
            return v;
    }
}
exports.getStringValue = getStringValue;
/**
 * helper function that redacts a string representation of a "debug" arg
 */
function genRedactedString(str, maxLen) {
    const { length } = str;
    return length <= maxLen
        ? str
        : str.slice(0, maxLen) + ' ... <REDACTED full-length="' + length + '">';
}
exports.genRedactedString = genRedactedString;
/**
 * a wrapper for the `debug` module, used to generate
 * "debug functions" that trim the values in their output
 */
function genDebugFunction(namespace) {
    const fn = (0, debug_1.default)(`${NAMESPACE_PREFIX}:${namespace}`);
    function wrappedDebug(...args) {
        if (!fn.enabled) {
            return; // no-op
        }
        // we skip the first arg because that is the message
        for (let i = 1; i < args.length; i++) {
            const str = getStringValue(args[i]);
            if (typeof str === "string" && str.length > MAX_ARGUMENT_LENGTH) {
                args[i] = genRedactedString(str, MAX_ARGUMENT_LENGTH);
            }
        }
        return fn.apply(null, args);
    }
    Object.defineProperties(wrappedDebug, {
        namespace: {
            get() {
                return fn.namespace;
            },
        },
        enabled: {
            get() {
                return fn.enabled;
            },
        },
        destroy: {
            get() {
                return fn.destroy;
            },
        },
        log: {
            get() {
                return fn.log;
            },
            set(l) {
                fn.log = l;
            },
        },
    });
    return wrappedDebug;
}
exports["default"] = genDebugFunction;


/***/ }),

/***/ 7670:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.noop = exports.defaults = exports.Debug = exports.zipMap = exports.CONNECTION_CLOSED_ERROR_MSG = exports.shuffle = exports.sample = exports.resolveTLSProfile = exports.parseURL = exports.optimizeErrorStack = exports.toArg = exports.convertMapToArray = exports.convertObjectToArray = exports.timeout = exports.packObject = exports.isInt = exports.wrapMultiResult = exports.convertBufferToString = void 0;
const url_1 = __nccwpck_require__(7016);
const lodash_1 = __nccwpck_require__(4893);
Object.defineProperty(exports, "defaults", ({ enumerable: true, get: function () { return lodash_1.defaults; } }));
Object.defineProperty(exports, "noop", ({ enumerable: true, get: function () { return lodash_1.noop; } }));
const debug_1 = __nccwpck_require__(7633);
exports.Debug = debug_1.default;
const TLSProfiles_1 = __nccwpck_require__(4981);
/**
 * Convert a buffer to string, supports buffer array
 *
 * @example
 * ```js
 * const input = [Buffer.from('foo'), [Buffer.from('bar')]]
 * const res = convertBufferToString(input, 'utf8')
 * expect(res).to.eql(['foo', ['bar']])
 * ```
 */
function convertBufferToString(value, encoding) {
    if (value instanceof Buffer) {
        return value.toString(encoding);
    }
    if (Array.isArray(value)) {
        const length = value.length;
        const res = Array(length);
        for (let i = 0; i < length; ++i) {
            res[i] =
                value[i] instanceof Buffer && encoding === "utf8"
                    ? value[i].toString()
                    : convertBufferToString(value[i], encoding);
        }
        return res;
    }
    return value;
}
exports.convertBufferToString = convertBufferToString;
/**
 * Convert a list of results to node-style
 *
 * @example
 * ```js
 * const input = ['a', 'b', new Error('c'), 'd']
 * const output = exports.wrapMultiResult(input)
 * expect(output).to.eql([[null, 'a'], [null, 'b'], [new Error('c')], [null, 'd'])
 * ```
 */
function wrapMultiResult(arr) {
    // When using WATCH/EXEC transactions, the EXEC will return
    // a null instead of an array
    if (!arr) {
        return null;
    }
    const result = [];
    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        const item = arr[i];
        if (item instanceof Error) {
            result.push([item]);
        }
        else {
            result.push([null, item]);
        }
    }
    return result;
}
exports.wrapMultiResult = wrapMultiResult;
/**
 * Detect if the argument is a int
 * @example
 * ```js
 * > isInt('123')
 * true
 * > isInt('123.3')
 * false
 * > isInt('1x')
 * false
 * > isInt(123)
 * true
 * > isInt(true)
 * false
 * ```
 */
function isInt(value) {
    const x = parseFloat(value);
    return !isNaN(value) && (x | 0) === x;
}
exports.isInt = isInt;
/**
 * Pack an array to an Object
 *
 * @example
 * ```js
 * > packObject(['a', 'b', 'c', 'd'])
 * { a: 'b', c: 'd' }
 * ```
 */
function packObject(array) {
    const result = {};
    const length = array.length;
    for (let i = 1; i < length; i += 2) {
        result[array[i - 1]] = array[i];
    }
    return result;
}
exports.packObject = packObject;
/**
 * Return a callback with timeout
 */
function timeout(callback, timeout) {
    let timer = null;
    const run = function () {
        if (timer) {
            clearTimeout(timer);
            timer = null;
            callback.apply(this, arguments);
        }
    };
    timer = setTimeout(run, timeout, new Error("timeout"));
    return run;
}
exports.timeout = timeout;
/**
 * Convert an object to an array
 * @example
 * ```js
 * > convertObjectToArray({ a: '1' })
 * ['a', '1']
 * ```
 */
function convertObjectToArray(obj) {
    const result = [];
    const keys = Object.keys(obj); // Object.entries requires node 7+
    for (let i = 0, l = keys.length; i < l; i++) {
        result.push(keys[i], obj[keys[i]]);
    }
    return result;
}
exports.convertObjectToArray = convertObjectToArray;
/**
 * Convert a map to an array
 * @example
 * ```js
 * > convertMapToArray(new Map([[1, '2']]))
 * [1, '2']
 * ```
 */
function convertMapToArray(map) {
    const result = [];
    let pos = 0;
    map.forEach(function (value, key) {
        result[pos] = key;
        result[pos + 1] = value;
        pos += 2;
    });
    return result;
}
exports.convertMapToArray = convertMapToArray;
/**
 * Convert a non-string arg to a string
 */
function toArg(arg) {
    if (arg === null || typeof arg === "undefined") {
        return "";
    }
    return String(arg);
}
exports.toArg = toArg;
/**
 * Optimize error stack
 *
 * @param error actually error
 * @param friendlyStack the stack that more meaningful
 * @param filterPath only show stacks with the specified path
 */
function optimizeErrorStack(error, friendlyStack, filterPath) {
    const stacks = friendlyStack.split("\n");
    let lines = "";
    let i;
    for (i = 1; i < stacks.length; ++i) {
        if (stacks[i].indexOf(filterPath) === -1) {
            break;
        }
    }
    for (let j = i; j < stacks.length; ++j) {
        lines += "\n" + stacks[j];
    }
    if (error.stack) {
        const pos = error.stack.indexOf("\n");
        error.stack = error.stack.slice(0, pos) + lines;
    }
    return error;
}
exports.optimizeErrorStack = optimizeErrorStack;
/**
 * Parse the redis protocol url
 */
function parseURL(url) {
    if (isInt(url)) {
        return { port: url };
    }
    let parsed = (0, url_1.parse)(url, true, true);
    if (!parsed.slashes && url[0] !== "/") {
        url = "//" + url;
        parsed = (0, url_1.parse)(url, true, true);
    }
    const options = parsed.query || {};
    const result = {};
    if (parsed.auth) {
        const index = parsed.auth.indexOf(":");
        result.username = index === -1 ? parsed.auth : parsed.auth.slice(0, index);
        result.password = index === -1 ? "" : parsed.auth.slice(index + 1);
    }
    if (parsed.pathname) {
        if (parsed.protocol === "redis:" || parsed.protocol === "rediss:") {
            if (parsed.pathname.length > 1) {
                result.db = parsed.pathname.slice(1);
            }
        }
        else {
            result.path = parsed.pathname;
        }
    }
    if (parsed.host) {
        result.host = parsed.hostname;
    }
    if (parsed.port) {
        result.port = parsed.port;
    }
    if (typeof options.family === "string") {
        const intFamily = Number.parseInt(options.family, 10);
        if (!Number.isNaN(intFamily)) {
            result.family = intFamily;
        }
    }
    (0, lodash_1.defaults)(result, options);
    return result;
}
exports.parseURL = parseURL;
/**
 * Resolve TLS profile shortcut in connection options
 */
function resolveTLSProfile(options) {
    let tls = options === null || options === void 0 ? void 0 : options.tls;
    if (typeof tls === "string")
        tls = { profile: tls };
    const profile = TLSProfiles_1.default[tls === null || tls === void 0 ? void 0 : tls.profile];
    if (profile) {
        tls = Object.assign({}, profile, tls);
        delete tls.profile;
        options = Object.assign({}, options, { tls });
    }
    return options;
}
exports.resolveTLSProfile = resolveTLSProfile;
/**
 * Get a random element from `array`
 */
function sample(array, from = 0) {
    const length = array.length;
    if (from >= length) {
        return null;
    }
    return array[from + Math.floor(Math.random() * (length - from))];
}
exports.sample = sample;
/**
 * Shuffle the array using the Fisher-Yates Shuffle.
 * This method will mutate the original array.
 */
function shuffle(array) {
    let counter = array.length;
    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        const index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        [array[counter], array[index]] = [array[index], array[counter]];
    }
    return array;
}
exports.shuffle = shuffle;
/**
 * Error message for connection being disconnected
 */
exports.CONNECTION_CLOSED_ERROR_MSG = "Connection is closed.";
function zipMap(keys, values) {
    const map = new Map();
    keys.forEach((key, index) => {
        map.set(key, values[index]);
    });
    return map;
}
exports.zipMap = zipMap;


/***/ }),

/***/ 4893:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isArguments = exports.defaults = exports.noop = void 0;
const defaults = __nccwpck_require__(7623);
exports.defaults = defaults;
const isArguments = __nccwpck_require__(2191);
exports.isArguments = isArguments;
function noop() { }
exports.noop = noop;


/***/ }),

/***/ 7623:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  // Safari 9 makes `arguments.length` enumerable in strict mode.
  var result = (isArray(value) || isArguments(value))
    ? baseTimes(value.length, String)
    : [];

  var length = result.length,
      skipIndexes = !!length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Used by `_.defaults` to customize its `_.assignIn` use.
 *
 * @private
 * @param {*} objValue The destination value.
 * @param {*} srcValue The source value.
 * @param {string} key The key of the property to assign.
 * @param {Object} object The parent object of `objValue`.
 * @returns {*} Returns the value to assign.
 */
function assignInDefaults(objValue, srcValue, key, object) {
  if (objValue === undefined ||
      (eq(objValue, objectProto[key]) && !hasOwnProperty.call(object, key))) {
    return srcValue;
  }
  return objValue;
}

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    object[key] = value;
  }
}

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    assignValue(object, key, newValue === undefined ? source[key] : newValue);
  }
  return object;
}

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * This method is like `_.assignIn` except that it accepts `customizer`
 * which is invoked to produce the assigned values. If `customizer` returns
 * `undefined`, assignment is handled by the method instead. The `customizer`
 * is invoked with five arguments: (objValue, srcValue, key, object, source).
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extendWith
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} sources The source objects.
 * @param {Function} [customizer] The function to customize assigned values.
 * @returns {Object} Returns `object`.
 * @see _.assignWith
 * @example
 *
 * function customizer(objValue, srcValue) {
 *   return _.isUndefined(objValue) ? srcValue : objValue;
 * }
 *
 * var defaults = _.partialRight(_.assignInWith, customizer);
 *
 * defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var assignInWith = createAssigner(function(object, source, srcIndex, customizer) {
  copyObject(source, keysIn(source), object, customizer);
});

/**
 * Assigns own and inherited enumerable string keyed properties of source
 * objects to the destination object for all destination properties that
 * resolve to `undefined`. Source objects are applied from left to right.
 * Once a property is set, additional values of the same property are ignored.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.defaultsDeep
 * @example
 *
 * _.defaults({ 'a': 1 }, { 'b': 2 }, { 'a': 3 });
 * // => { 'a': 1, 'b': 2 }
 */
var defaults = baseRest(function(args) {
  args.push(undefined, assignInDefaults);
  return apply(assignInWith, undefined, args);
});

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = defaults;


/***/ }),

/***/ 2191:
/***/ ((module) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

module.exports = isArguments;


/***/ }),

/***/ 744:
/***/ ((module) => {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}


/***/ }),

/***/ 4470:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

const { EventEmitter } = __nccwpck_require__(4434);

class AbortSignal {
  constructor() {
    this.eventEmitter = new EventEmitter();
    this.onabort = null;
    this.aborted = false;
    this.reason = undefined;
  }
  toString() {
    return "[object AbortSignal]";
  }
  get [Symbol.toStringTag]() {
    return "AbortSignal";
  }
  removeEventListener(name, handler) {
    this.eventEmitter.removeListener(name, handler);
  }
  addEventListener(name, handler) {
    this.eventEmitter.on(name, handler);
  }
  dispatchEvent(type) {
    const event = { type, target: this };
    const handlerName = `on${type}`;

    if (typeof this[handlerName] === "function") this[handlerName](event);

    this.eventEmitter.emit(type, event);
  }
  throwIfAborted() {
    if (this.aborted) {
      throw this.reason;
    }
  }
  static abort(reason) {
    const controller = new AbortController();
    controller.abort();
    return controller.signal;
  }
  static timeout(time) {
    const controller = new AbortController();
    setTimeout(() => controller.abort(new Error("TimeoutError")), time);
    return controller.signal;
  }
}
class AbortController {
  constructor() {
    this.signal = new AbortSignal();
  }
  abort(reason) {
    if (this.signal.aborted) return;

    this.signal.aborted = true;

    if (reason) this.signal.reason = reason;
    else this.signal.reason = new Error("AbortError");

    this.signal.dispatchEvent("abort");
  }
  toString() {
    return "[object AbortController]";
  }
  get [Symbol.toStringTag]() {
    return "AbortController";
  }
}

module.exports = { AbortController, AbortSignal };


/***/ }),

/***/ 6961:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const Errors = process.version.charCodeAt(1) < 55 && process.version.charCodeAt(2) === 46
  ? __nccwpck_require__(9236) // Node.js < 7
  : __nccwpck_require__(5854)

module.exports = Errors


/***/ }),

/***/ 5854:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const assert = __nccwpck_require__(2613)

class RedisError extends Error {
  get name () {
    return this.constructor.name
  }
}

class ParserError extends RedisError {
  constructor (message, buffer, offset) {
    assert(buffer)
    assert.strictEqual(typeof offset, 'number')

    const tmp = Error.stackTraceLimit
    Error.stackTraceLimit = 2
    super(message)
    Error.stackTraceLimit = tmp
    this.offset = offset
    this.buffer = buffer
  }

  get name () {
    return this.constructor.name
  }
}

class ReplyError extends RedisError {
  constructor (message) {
    const tmp = Error.stackTraceLimit
    Error.stackTraceLimit = 2
    super(message)
    Error.stackTraceLimit = tmp
  }
  get name () {
    return this.constructor.name
  }
}

class AbortError extends RedisError {
  get name () {
    return this.constructor.name
  }
}

class InterruptError extends AbortError {
  get name () {
    return this.constructor.name
  }
}

module.exports = {
  RedisError,
  ParserError,
  ReplyError,
  AbortError,
  InterruptError
}


/***/ }),

/***/ 9236:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const assert = __nccwpck_require__(2613)
const util = __nccwpck_require__(9023)

// RedisError

function RedisError (message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  })
  Error.captureStackTrace(this, this.constructor)
}

util.inherits(RedisError, Error)

Object.defineProperty(RedisError.prototype, 'name', {
  value: 'RedisError',
  configurable: true,
  writable: true
})

// ParserError

function ParserError (message, buffer, offset) {
  assert(buffer)
  assert.strictEqual(typeof offset, 'number')

  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  })

  const tmp = Error.stackTraceLimit
  Error.stackTraceLimit = 2
  Error.captureStackTrace(this, this.constructor)
  Error.stackTraceLimit = tmp
  this.offset = offset
  this.buffer = buffer
}

util.inherits(ParserError, RedisError)

Object.defineProperty(ParserError.prototype, 'name', {
  value: 'ParserError',
  configurable: true,
  writable: true
})

// ReplyError

function ReplyError (message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  })
  const tmp = Error.stackTraceLimit
  Error.stackTraceLimit = 2
  Error.captureStackTrace(this, this.constructor)
  Error.stackTraceLimit = tmp
}

util.inherits(ReplyError, RedisError)

Object.defineProperty(ReplyError.prototype, 'name', {
  value: 'ReplyError',
  configurable: true,
  writable: true
})

// AbortError

function AbortError (message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  })
  Error.captureStackTrace(this, this.constructor)
}

util.inherits(AbortError, RedisError)

Object.defineProperty(AbortError.prototype, 'name', {
  value: 'AbortError',
  configurable: true,
  writable: true
})

// InterruptError

function InterruptError (message) {
  Object.defineProperty(this, 'message', {
    value: message || '',
    configurable: true,
    writable: true
  })
  Error.captureStackTrace(this, this.constructor)
}

util.inherits(InterruptError, AbortError)

Object.defineProperty(InterruptError.prototype, 'name', {
  value: 'InterruptError',
  configurable: true,
  writable: true
})

module.exports = {
  RedisError,
  ParserError,
  ReplyError,
  AbortError,
  InterruptError
}


/***/ }),

/***/ 5665:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


module.exports = __nccwpck_require__(2486)


/***/ }),

/***/ 2486:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";


const Buffer = (__nccwpck_require__(181).Buffer)
const StringDecoder = (__nccwpck_require__(3193).StringDecoder)
const decoder = new StringDecoder()
const errors = __nccwpck_require__(6961)
const ReplyError = errors.ReplyError
const ParserError = errors.ParserError
var bufferPool = Buffer.allocUnsafe(32 * 1024)
var bufferOffset = 0
var interval = null
var counter = 0
var notDecreased = 0

/**
 * Used for integer numbers only
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number}
 */
function parseSimpleNumbers (parser) {
  const length = parser.buffer.length - 1
  var offset = parser.offset
  var number = 0
  var sign = 1

  if (parser.buffer[offset] === 45) {
    sign = -1
    offset++
  }

  while (offset < length) {
    const c1 = parser.buffer[offset++]
    if (c1 === 13) { // \r\n
      parser.offset = offset + 1
      return sign * number
    }
    number = (number * 10) + (c1 - 48)
  }
}

/**
 * Used for integer numbers in case of the returnNumbers option
 *
 * Reading the string as parts of n SMI is more efficient than
 * using a string directly.
 *
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|string}
 */
function parseStringNumbers (parser) {
  const length = parser.buffer.length - 1
  var offset = parser.offset
  var number = 0
  var res = ''

  if (parser.buffer[offset] === 45) {
    res += '-'
    offset++
  }

  while (offset < length) {
    var c1 = parser.buffer[offset++]
    if (c1 === 13) { // \r\n
      parser.offset = offset + 1
      if (number !== 0) {
        res += number
      }
      return res
    } else if (number > 429496728) {
      res += (number * 10) + (c1 - 48)
      number = 0
    } else if (c1 === 48 && number === 0) {
      res += 0
    } else {
      number = (number * 10) + (c1 - 48)
    }
  }
}

/**
 * Parse a '+' redis simple string response but forward the offsets
 * onto convertBufferRange to generate a string.
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|string|Buffer}
 */
function parseSimpleString (parser) {
  const start = parser.offset
  const buffer = parser.buffer
  const length = buffer.length - 1
  var offset = start

  while (offset < length) {
    if (buffer[offset++] === 13) { // \r\n
      parser.offset = offset + 1
      if (parser.optionReturnBuffers === true) {
        return parser.buffer.slice(start, offset - 1)
      }
      return parser.buffer.toString('utf8', start, offset - 1)
    }
  }
}

/**
 * Returns the read length
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number}
 */
function parseLength (parser) {
  const length = parser.buffer.length - 1
  var offset = parser.offset
  var number = 0

  while (offset < length) {
    const c1 = parser.buffer[offset++]
    if (c1 === 13) {
      parser.offset = offset + 1
      return number
    }
    number = (number * 10) + (c1 - 48)
  }
}

/**
 * Parse a ':' redis integer response
 *
 * If stringNumbers is activated the parser always returns numbers as string
 * This is important for big numbers (number > Math.pow(2, 53)) as js numbers
 * are 64bit floating point numbers with reduced precision
 *
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|number|string}
 */
function parseInteger (parser) {
  if (parser.optionStringNumbers === true) {
    return parseStringNumbers(parser)
  }
  return parseSimpleNumbers(parser)
}

/**
 * Parse a '$' redis bulk string response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|null|string}
 */
function parseBulkString (parser) {
  const length = parseLength(parser)
  if (length === undefined) {
    return
  }
  if (length < 0) {
    return null
  }
  const offset = parser.offset + length
  if (offset + 2 > parser.buffer.length) {
    parser.bigStrSize = offset + 2
    parser.totalChunkSize = parser.buffer.length
    parser.bufferCache.push(parser.buffer)
    return
  }
  const start = parser.offset
  parser.offset = offset + 2
  if (parser.optionReturnBuffers === true) {
    return parser.buffer.slice(start, offset)
  }
  return parser.buffer.toString('utf8', start, offset)
}

/**
 * Parse a '-' redis error response
 * @param {JavascriptRedisParser} parser
 * @returns {ReplyError}
 */
function parseError (parser) {
  var string = parseSimpleString(parser)
  if (string !== undefined) {
    if (parser.optionReturnBuffers === true) {
      string = string.toString()
    }
    return new ReplyError(string)
  }
}

/**
 * Parsing error handler, resets parser buffer
 * @param {JavascriptRedisParser} parser
 * @param {number} type
 * @returns {undefined}
 */
function handleError (parser, type) {
  const err = new ParserError(
    'Protocol error, got ' + JSON.stringify(String.fromCharCode(type)) + ' as reply type byte',
    JSON.stringify(parser.buffer),
    parser.offset
  )
  parser.buffer = null
  parser.returnFatalError(err)
}

/**
 * Parse a '*' redis array response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|null|any[]}
 */
function parseArray (parser) {
  const length = parseLength(parser)
  if (length === undefined) {
    return
  }
  if (length < 0) {
    return null
  }
  const responses = new Array(length)
  return parseArrayElements(parser, responses, 0)
}

/**
 * Push a partly parsed array to the stack
 *
 * @param {JavascriptRedisParser} parser
 * @param {any[]} array
 * @param {number} pos
 * @returns {undefined}
 */
function pushArrayCache (parser, array, pos) {
  parser.arrayCache.push(array)
  parser.arrayPos.push(pos)
}

/**
 * Parse chunked redis array response
 * @param {JavascriptRedisParser} parser
 * @returns {undefined|any[]}
 */
function parseArrayChunks (parser) {
  const tmp = parser.arrayCache.pop()
  var pos = parser.arrayPos.pop()
  if (parser.arrayCache.length) {
    const res = parseArrayChunks(parser)
    if (res === undefined) {
      pushArrayCache(parser, tmp, pos)
      return
    }
    tmp[pos++] = res
  }
  return parseArrayElements(parser, tmp, pos)
}

/**
 * Parse redis array response elements
 * @param {JavascriptRedisParser} parser
 * @param {Array} responses
 * @param {number} i
 * @returns {undefined|null|any[]}
 */
function parseArrayElements (parser, responses, i) {
  const bufferLength = parser.buffer.length
  while (i < responses.length) {
    const offset = parser.offset
    if (parser.offset >= bufferLength) {
      pushArrayCache(parser, responses, i)
      return
    }
    const response = parseType(parser, parser.buffer[parser.offset++])
    if (response === undefined) {
      if (!(parser.arrayCache.length || parser.bufferCache.length)) {
        parser.offset = offset
      }
      pushArrayCache(parser, responses, i)
      return
    }
    responses[i] = response
    i++
  }

  return responses
}

/**
 * Called the appropriate parser for the specified type.
 *
 * 36: $
 * 43: +
 * 42: *
 * 58: :
 * 45: -
 *
 * @param {JavascriptRedisParser} parser
 * @param {number} type
 * @returns {*}
 */
function parseType (parser, type) {
  switch (type) {
    case 36:
      return parseBulkString(parser)
    case 43:
      return parseSimpleString(parser)
    case 42:
      return parseArray(parser)
    case 58:
      return parseInteger(parser)
    case 45:
      return parseError(parser)
    default:
      return handleError(parser, type)
  }
}

/**
 * Decrease the bufferPool size over time
 *
 * Balance between increasing and decreasing the bufferPool.
 * Decrease the bufferPool by 10% by removing the first 10% of the current pool.
 * @returns {undefined}
 */
function decreaseBufferPool () {
  if (bufferPool.length > 50 * 1024) {
    if (counter === 1 || notDecreased > counter * 2) {
      const minSliceLen = Math.floor(bufferPool.length / 10)
      const sliceLength = minSliceLen < bufferOffset
        ? bufferOffset
        : minSliceLen
      bufferOffset = 0
      bufferPool = bufferPool.slice(sliceLength, bufferPool.length)
    } else {
      notDecreased++
      counter--
    }
  } else {
    clearInterval(interval)
    counter = 0
    notDecreased = 0
    interval = null
  }
}

/**
 * Check if the requested size fits in the current bufferPool.
 * If it does not, reset and increase the bufferPool accordingly.
 *
 * @param {number} length
 * @returns {undefined}
 */
function resizeBuffer (length) {
  if (bufferPool.length < length + bufferOffset) {
    const multiplier = length > 1024 * 1024 * 75 ? 2 : 3
    if (bufferOffset > 1024 * 1024 * 111) {
      bufferOffset = 1024 * 1024 * 50
    }
    bufferPool = Buffer.allocUnsafe(length * multiplier + bufferOffset)
    bufferOffset = 0
    counter++
    if (interval === null) {
      interval = setInterval(decreaseBufferPool, 50)
    }
  }
}

/**
 * Concat a bulk string containing multiple chunks
 *
 * Notes:
 * 1) The first chunk might contain the whole bulk string including the \r
 * 2) We are only safe to fully add up elements that are neither the first nor any of the last two elements
 *
 * @param {JavascriptRedisParser} parser
 * @returns {String}
 */
function concatBulkString (parser) {
  const list = parser.bufferCache
  const oldOffset = parser.offset
  var chunks = list.length
  var offset = parser.bigStrSize - parser.totalChunkSize
  parser.offset = offset
  if (offset <= 2) {
    if (chunks === 2) {
      return list[0].toString('utf8', oldOffset, list[0].length + offset - 2)
    }
    chunks--
    offset = list[list.length - 2].length + offset
  }
  var res = decoder.write(list[0].slice(oldOffset))
  for (var i = 1; i < chunks - 1; i++) {
    res += decoder.write(list[i])
  }
  res += decoder.end(list[i].slice(0, offset - 2))
  return res
}

/**
 * Concat the collected chunks from parser.bufferCache.
 *
 * Increases the bufferPool size beforehand if necessary.
 *
 * @param {JavascriptRedisParser} parser
 * @returns {Buffer}
 */
function concatBulkBuffer (parser) {
  const list = parser.bufferCache
  const oldOffset = parser.offset
  const length = parser.bigStrSize - oldOffset - 2
  var chunks = list.length
  var offset = parser.bigStrSize - parser.totalChunkSize
  parser.offset = offset
  if (offset <= 2) {
    if (chunks === 2) {
      return list[0].slice(oldOffset, list[0].length + offset - 2)
    }
    chunks--
    offset = list[list.length - 2].length + offset
  }
  resizeBuffer(length)
  const start = bufferOffset
  list[0].copy(bufferPool, start, oldOffset, list[0].length)
  bufferOffset += list[0].length - oldOffset
  for (var i = 1; i < chunks - 1; i++) {
    list[i].copy(bufferPool, bufferOffset)
    bufferOffset += list[i].length
  }
  list[i].copy(bufferPool, bufferOffset, 0, offset - 2)
  bufferOffset += offset - 2
  return bufferPool.slice(start, bufferOffset)
}

class JavascriptRedisParser {
  /**
   * Javascript Redis Parser constructor
   * @param {{returnError: Function, returnReply: Function, returnFatalError?: Function, returnBuffers: boolean, stringNumbers: boolean }} options
   * @constructor
   */
  constructor (options) {
    if (!options) {
      throw new TypeError('Options are mandatory.')
    }
    if (typeof options.returnError !== 'function' || typeof options.returnReply !== 'function') {
      throw new TypeError('The returnReply and returnError options have to be functions.')
    }
    this.setReturnBuffers(!!options.returnBuffers)
    this.setStringNumbers(!!options.stringNumbers)
    this.returnError = options.returnError
    this.returnFatalError = options.returnFatalError || options.returnError
    this.returnReply = options.returnReply
    this.reset()
  }

  /**
   * Reset the parser values to the initial state
   *
   * @returns {undefined}
   */
  reset () {
    this.offset = 0
    this.buffer = null
    this.bigStrSize = 0
    this.totalChunkSize = 0
    this.bufferCache = []
    this.arrayCache = []
    this.arrayPos = []
  }

  /**
   * Set the returnBuffers option
   *
   * @param {boolean} returnBuffers
   * @returns {undefined}
   */
  setReturnBuffers (returnBuffers) {
    if (typeof returnBuffers !== 'boolean') {
      throw new TypeError('The returnBuffers argument has to be a boolean')
    }
    this.optionReturnBuffers = returnBuffers
  }

  /**
   * Set the stringNumbers option
   *
   * @param {boolean} stringNumbers
   * @returns {undefined}
   */
  setStringNumbers (stringNumbers) {
    if (typeof stringNumbers !== 'boolean') {
      throw new TypeError('The stringNumbers argument has to be a boolean')
    }
    this.optionStringNumbers = stringNumbers
  }

  /**
   * Parse the redis buffer
   * @param {Buffer} buffer
   * @returns {undefined}
   */
  execute (buffer) {
    if (this.buffer === null) {
      this.buffer = buffer
      this.offset = 0
    } else if (this.bigStrSize === 0) {
      const oldLength = this.buffer.length
      const remainingLength = oldLength - this.offset
      const newBuffer = Buffer.allocUnsafe(remainingLength + buffer.length)
      this.buffer.copy(newBuffer, 0, this.offset, oldLength)
      buffer.copy(newBuffer, remainingLength, 0, buffer.length)
      this.buffer = newBuffer
      this.offset = 0
      if (this.arrayCache.length) {
        const arr = parseArrayChunks(this)
        if (arr === undefined) {
          return
        }
        this.returnReply(arr)
      }
    } else if (this.totalChunkSize + buffer.length >= this.bigStrSize) {
      this.bufferCache.push(buffer)
      var tmp = this.optionReturnBuffers ? concatBulkBuffer(this) : concatBulkString(this)
      this.bigStrSize = 0
      this.bufferCache = []
      this.buffer = buffer
      if (this.arrayCache.length) {
        this.arrayCache[0][this.arrayPos[0]++] = tmp
        tmp = parseArrayChunks(this)
        if (tmp === undefined) {
          return
        }
      }
      this.returnReply(tmp)
    } else {
      this.bufferCache.push(buffer)
      this.totalChunkSize += buffer.length
      return
    }

    while (this.offset < this.buffer.length) {
      const offset = this.offset
      const type = this.buffer[this.offset++]
      const response = parseType(this, type)
      if (response === undefined) {
        if (!(this.arrayCache.length || this.bufferCache.length)) {
          this.offset = offset
        }
        return
      }

      if (type === 45) {
        this.returnError(response)
      } else {
        this.returnReply(response)
      }
    }

    this.buffer = null
  }
}

module.exports = JavascriptRedisParser


/***/ }),

/***/ 5659:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const utils_1 = __nccwpck_require__(2630);
function throwLater(e) {
    setTimeout(function () {
        throw e;
    }, 0);
}
function asCallback(promise, nodeback, options) {
    if (typeof nodeback === "function") {
        promise.then((val) => {
            let ret;
            if (options !== undefined &&
                Object(options).spread &&
                Array.isArray(val)) {
                ret = utils_1.tryCatch(nodeback).apply(undefined, [null].concat(val));
            }
            else {
                ret =
                    val === undefined
                        ? utils_1.tryCatch(nodeback)(null)
                        : utils_1.tryCatch(nodeback)(null, val);
            }
            if (ret === utils_1.errorObj) {
                throwLater(ret.e);
            }
        }, (cause) => {
            if (!cause) {
                const newReason = new Error(cause + "");
                Object.assign(newReason, { cause });
                cause = newReason;
            }
            const ret = utils_1.tryCatch(nodeback)(cause);
            if (ret === utils_1.errorObj) {
                throwLater(ret.e);
            }
        });
    }
    return promise;
}
exports["default"] = asCallback;


/***/ }),

/***/ 2630:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.tryCatch = exports.errorObj = void 0;
//Try catch is not supported in optimizing
//compiler, so it is isolated
exports.errorObj = { e: {} };
let tryCatchTarget;
function tryCatcher(err, val) {
    try {
        const target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    }
    catch (e) {
        exports.errorObj.e = e;
        return exports.errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}
exports.tryCatch = tryCatch;


/***/ }),

/***/ 1450:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

"use strict";

const os = __nccwpck_require__(857);
const tty = __nccwpck_require__(2018);
const hasFlag = __nccwpck_require__(3813);

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os.release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

module.exports = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty.isatty(1))),
	stderr: translateLevel(supportsColor(true, tty.isatty(2)))
};


/***/ }),

/***/ 770:
/***/ ((module, __unused_webpack_exports, __nccwpck_require__) => {

module.exports = __nccwpck_require__(218);


/***/ }),

/***/ 218:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";


var net = __nccwpck_require__(9278);
var tls = __nccwpck_require__(4756);
var http = __nccwpck_require__(8611);
var https = __nccwpck_require__(5692);
var events = __nccwpck_require__(4434);
var assert = __nccwpck_require__(2613);
var util = __nccwpck_require__(9023);


exports.httpOverHttp = httpOverHttp;
exports.httpsOverHttp = httpsOverHttp;
exports.httpOverHttps = httpOverHttps;
exports.httpsOverHttps = httpsOverHttps;


function httpOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  return agent;
}

function httpsOverHttp(options) {
  var agent = new TunnelingAgent(options);
  agent.request = http.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}

function httpOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  return agent;
}

function httpsOverHttps(options) {
  var agent = new TunnelingAgent(options);
  agent.request = https.request;
  agent.createSocket = createSecureSocket;
  agent.defaultPort = 443;
  return agent;
}


function TunnelingAgent(options) {
  var self = this;
  self.options = options || {};
  self.proxyOptions = self.options.proxy || {};
  self.maxSockets = self.options.maxSockets || http.Agent.defaultMaxSockets;
  self.requests = [];
  self.sockets = [];

  self.on('free', function onFree(socket, host, port, localAddress) {
    var options = toOptions(host, port, localAddress);
    for (var i = 0, len = self.requests.length; i < len; ++i) {
      var pending = self.requests[i];
      if (pending.host === options.host && pending.port === options.port) {
        // Detect the request to connect same origin server,
        // reuse the connection.
        self.requests.splice(i, 1);
        pending.request.onSocket(socket);
        return;
      }
    }
    socket.destroy();
    self.removeSocket(socket);
  });
}
util.inherits(TunnelingAgent, events.EventEmitter);

TunnelingAgent.prototype.addRequest = function addRequest(req, host, port, localAddress) {
  var self = this;
  var options = mergeOptions({request: req}, self.options, toOptions(host, port, localAddress));

  if (self.sockets.length >= this.maxSockets) {
    // We are over limit so we'll add it to the queue.
    self.requests.push(options);
    return;
  }

  // If we are under maxSockets create a new one.
  self.createSocket(options, function(socket) {
    socket.on('free', onFree);
    socket.on('close', onCloseOrRemove);
    socket.on('agentRemove', onCloseOrRemove);
    req.onSocket(socket);

    function onFree() {
      self.emit('free', socket, options);
    }

    function onCloseOrRemove(err) {
      self.removeSocket(socket);
      socket.removeListener('free', onFree);
      socket.removeListener('close', onCloseOrRemove);
      socket.removeListener('agentRemove', onCloseOrRemove);
    }
  });
};

TunnelingAgent.prototype.createSocket = function createSocket(options, cb) {
  var self = this;
  var placeholder = {};
  self.sockets.push(placeholder);

  var connectOptions = mergeOptions({}, self.proxyOptions, {
    method: 'CONNECT',
    path: options.host + ':' + options.port,
    agent: false,
    headers: {
      host: options.host + ':' + options.port
    }
  });
  if (options.localAddress) {
    connectOptions.localAddress = options.localAddress;
  }
  if (connectOptions.proxyAuth) {
    connectOptions.headers = connectOptions.headers || {};
    connectOptions.headers['Proxy-Authorization'] = 'Basic ' +
        new Buffer(connectOptions.proxyAuth).toString('base64');
  }

  debug('making CONNECT request');
  var connectReq = self.request(connectOptions);
  connectReq.useChunkedEncodingByDefault = false; // for v0.6
  connectReq.once('response', onResponse); // for v0.6
  connectReq.once('upgrade', onUpgrade);   // for v0.6
  connectReq.once('connect', onConnect);   // for v0.7 or later
  connectReq.once('error', onError);
  connectReq.end();

  function onResponse(res) {
    // Very hacky. This is necessary to avoid http-parser leaks.
    res.upgrade = true;
  }

  function onUpgrade(res, socket, head) {
    // Hacky.
    process.nextTick(function() {
      onConnect(res, socket, head);
    });
  }

  function onConnect(res, socket, head) {
    connectReq.removeAllListeners();
    socket.removeAllListeners();

    if (res.statusCode !== 200) {
      debug('tunneling socket could not be established, statusCode=%d',
        res.statusCode);
      socket.destroy();
      var error = new Error('tunneling socket could not be established, ' +
        'statusCode=' + res.statusCode);
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    if (head.length > 0) {
      debug('got illegal response body from proxy');
      socket.destroy();
      var error = new Error('got illegal response body from proxy');
      error.code = 'ECONNRESET';
      options.request.emit('error', error);
      self.removeSocket(placeholder);
      return;
    }
    debug('tunneling connection has established');
    self.sockets[self.sockets.indexOf(placeholder)] = socket;
    return cb(socket);
  }

  function onError(cause) {
    connectReq.removeAllListeners();

    debug('tunneling socket could not be established, cause=%s\n',
          cause.message, cause.stack);
    var error = new Error('tunneling socket could not be established, ' +
                          'cause=' + cause.message);
    error.code = 'ECONNRESET';
    options.request.emit('error', error);
    self.removeSocket(placeholder);
  }
};

TunnelingAgent.prototype.removeSocket = function removeSocket(socket) {
  var pos = this.sockets.indexOf(socket)
  if (pos === -1) {
    return;
  }
  this.sockets.splice(pos, 1);

  var pending = this.requests.shift();
  if (pending) {
    // If we have pending requests and a socket gets closed a new one
    // needs to be created to take over in the pool for the one that closed.
    this.createSocket(pending, function(socket) {
      pending.request.onSocket(socket);
    });
  }
};

function createSecureSocket(options, cb) {
  var self = this;
  TunnelingAgent.prototype.createSocket.call(self, options, function(socket) {
    var hostHeader = options.request.getHeader('host');
    var tlsOptions = mergeOptions({}, self.options, {
      socket: socket,
      servername: hostHeader ? hostHeader.replace(/:.*$/, '') : options.host
    });

    // 0 is dummy port for v0.6
    var secureSocket = tls.connect(0, tlsOptions);
    self.sockets[self.sockets.indexOf(socket)] = secureSocket;
    cb(secureSocket);
  });
}


function toOptions(host, port, localAddress) {
  if (typeof host === 'string') { // since v0.10
    return {
      host: host,
      port: port,
      localAddress: localAddress
    };
  }
  return host; // for v0.11 or later
}

function mergeOptions(target) {
  for (var i = 1, len = arguments.length; i < len; ++i) {
    var overrides = arguments[i];
    if (typeof overrides === 'object') {
      var keys = Object.keys(overrides);
      for (var j = 0, keyLen = keys.length; j < keyLen; ++j) {
        var k = keys[j];
        if (overrides[k] !== undefined) {
          target[k] = overrides[k];
        }
      }
    }
  }
  return target;
}


var debug;
if (process.env.NODE_DEBUG && /\btunnel\b/.test(process.env.NODE_DEBUG)) {
  debug = function() {
    var args = Array.prototype.slice.call(arguments);
    if (typeof args[0] === 'string') {
      args[0] = 'TUNNEL: ' + args[0];
    } else {
      args.unshift('TUNNEL:');
    }
    console.error.apply(console, args);
  }
} else {
  debug = function() {};
}
exports.debug = debug; // for test


/***/ }),

/***/ 1745:
/***/ ((__unused_webpack_module, __webpack_exports__, __nccwpck_require__) => {

"use strict";
__nccwpck_require__.r(__webpack_exports__);
/* harmony export */ __nccwpck_require__.d(__webpack_exports__, {
/* harmony export */   run: () => (/* binding */ run)
/* harmony export */ });
const core = __nccwpck_require__(7484)
const { default: Redlock } = __nccwpck_require__(8085)
const Client = __nccwpck_require__(7796)

const validActions = ['auto', 'lock', 'unlock']

const defaultRedisPort = 6379

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
async function run() {
  const isPost = !!core.getState('isPost')
  if (!isPost) {
    // Save state for later usage by post step
    core.saveState('isPost', 'true')
  }

  const action = core.getInput('action')
  if (!validActions.includes(action)) {
    return core.setFailed(
      `"action" should specify one of ${validActions.join(', ')}`
    )
  }
  if (isPost && action !== 'auto') {
    // No action to perform on post step if not 'auto' - so early return
    core.info('Nothing to cleanup.')
    return
  }

  const hostsStr = core.getInput('hosts')
  if (hostsStr === '') {
    return core.setFailed(`"hosts" should include at least 1 host`)
  }
  const hosts = hostsStr.split(',').map(e => e.trim())

  let name = core.getInput('name')
  if (name === '') {
    return core.setFailed('"name" of the lock must be specified')
  }

  const concurrencyStr = core.getInput('concurrency')
  if (!Number.isInteger(+concurrencyStr) || Number(concurrencyStr) <= 0) {
    return core.setFailed(`"concurrency" should be a positive integer`)
  }
  const concurrency = +concurrencyStr

  const retryCountStr = core.getInput('retry-count')
  if (!Number.isInteger(+retryCountStr) || Number(retryCountStr) <= 0) {
    return core.setFailed(`"retry-count" should be a positive integer`)
  }
  const retryCount = Number(retryCountStr)

  const retryDelayMsStr = core.getInput('retry-delay-ms')
  if (!Number.isInteger(+retryDelayMsStr) || Number(retryDelayMsStr) <= 0) {
    return core.setFailed(`"retry-delay-ms" should be a positive integer`)
  }
  const retryDelayMs = Number(retryDelayMsStr)

  const retryJitterMsStr = core.getInput('retry-jitter-ms')
  if (!Number.isInteger(+retryJitterMsStr) || Number(retryJitterMsStr) <= 0) {
    return core.setFailed(`"retry-jitter-ms" should be a positive integer`)
  }
  const retryJitterMs = Number(retryJitterMsStr)

  const clients = hosts.map(host => {
    const parts = host.split(':')
    switch (parts.length) {
      case 1:
        return new Client({ host: parts[0], port: defaultRedisPort })
      case 2:
        return new Client({ host: parts[0], port: +parts[1] })
      default:
        throw new Error(`unexpected host format: ${host}`)
    }
  })

  const redlock = new Redlock(clients)

  try {
    if ((action === 'lock' && !isPost) || (action === 'auto' && !isPost)) {
      const durationSecondsStr = core.getInput('duration-seconds')
      if (
        !Number.isInteger(+durationSecondsStr) ||
        Number(durationSecondsStr) <= 0
      ) {
        return core.setFailed(`"duration-seconds" should be a positive integer`)
      }
      const durationSeconds = Number(durationSecondsStr)

      try {
        core.info(`Trying to acquire lock (name=${name}) ...`)
        const start = performance.now()
        const [rName, lock] = await acquire(
          redlock,
          name,
          durationSeconds,
          concurrency,
          {
            retryCount,
            retryDelay: retryDelayMs,
            retryJitter: retryJitterMs
          }
        )
        const end = performance.now()
        core.info(
          `Successfully acquired lock after ${round((end - start) / 1000, 3)} s.`
        )
        core.info(`Lock name=${rName}, value=${lock.value}`)

        if (action === 'lock') {
          core.setOutput('name', rName)
          core.setOutput('value', lock.value)
        } else {
          // Pass value to post step
          core.saveState('name', rName)
          core.saveState('value', lock.value)
        }
      } catch (e) {
        console.trace(e)
        return core.setFailed('Failed to acquire lock')
      }
    }

    if ((action === 'unlock' && !isPost) || (action === 'auto' && isPost)) {
      let value = core.getInput('value')
      if (action === 'unlock' && value === '') {
        return core.setFailed(
          `"value" should be specified if action is "unlock"`
        )
      }
      if (action !== 'unlock' && value !== '') {
        return core.setFailed(
          `"value" should not be specified if action is not "unlock"`
        )
      }
      // Get name and value from main step if this is 'auto'
      if (action === 'auto' && isPost) {
        name = core.getState('name')
        if (name === '') {
          core.info(
            `name state not found, maybe lock acquisition was not successful?`
          )
          return
        }
        value = core.getState('value')
        if (value === '') {
          core.info(
            `value state not found, maybe lock acquisition was not successful?`
          )
          return
        }
      }

      core.info(`Releasing lock ...`)
      core.info(`Lock name=${name}, value=${value}`)

      try {
        await redlock.release(
          {
            redlock,
            resources: [name],
            value,
            attempts: [],
            expiration: 0
          },
          { retryCount: 0 }
        )
        core.info('Successfully released lock.')
      } catch (e) {
        console.trace(e)
        core.error('Failed to release lock')
        if (action === 'unlock') {
          return core.setFailed('Failed to release lock')
        }
        // If this was 'auto', do not report as failed in post step
      }
    }
  } finally {
    for (const client of clients) {
      client.disconnect()
    }
  }
}

/**
 * @param {string} name
 * @param {number} idx
 * @param {number} concurrency
 * @returns {string}
 */
const resourceName = (name, idx, concurrency) => {
  if (concurrency === 1) return name
  return `${name}-${idx}`
}

/**
 * @param {import('redlock').default} redlock
 * @param {string} name
 * @param {number} durationSeconds
 * @param {number} concurrency
 * @param {Partial<import('redlock').Settings>} settings
 * @return {Promise<[string, import('redlock').Lock]>}
 */
const acquire = async (
  redlock,
  name,
  durationSeconds,
  concurrency,
  settings
) => {
  let err
  for (let retry = 0; retry < settings.retryCount; retry++) {
    // Try to acquire any of the lock
    for (let idx = 0; idx < concurrency; idx++) {
      try {
        const rName = resourceName(name, idx, concurrency)
        return [
          rName,
          await redlock.acquire([rName], durationSeconds * 1000, {
            retryCount: 0
          })
        ]
      } catch (e) {
        err = e
      }
    }

    // Sleep and try again
    if (retry === settings.retryCount - 1) break
    const jitterMs = Math.round((Math.random() * 2 - 1) * settings.retryJitter)
    await sleep(settings.retryDelay + jitterMs)
  }

  // Failed to acquire lock in specified retry count
  throw err
}

const round = (n, places) =>
  Math.round(n * Math.pow(10, places)) / Math.pow(10, places)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))


/***/ }),

/***/ 2613:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 181:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 5317:
/***/ ((module) => {

"use strict";
module.exports = require("child_process");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 2250:
/***/ ((module) => {

"use strict";
module.exports = require("dns");

/***/ }),

/***/ 4434:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 9278:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 3193:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 3557:
/***/ ((module) => {

"use strict";
module.exports = require("timers");

/***/ }),

/***/ 4756:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 2018:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 7016:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 8085:
/***/ ((__unused_webpack_module, exports, __nccwpck_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Lock = exports.ExecutionError = exports.ResourceLockedError = void 0;
const crypto_1 = __nccwpck_require__(6982);
const events_1 = __nccwpck_require__(4434);
// AbortController became available as a global in node version 16. Once version
// 14 reaches its end-of-life, this can be removed.
const node_abort_controller_1 = __nccwpck_require__(4470);
// Define script constants.
const ACQUIRE_SCRIPT = `
  -- Return 0 if an entry already exists.
  for i, key in ipairs(KEYS) do
    if redis.call("exists", key) == 1 then
      return 0
    end
  end

  -- Create an entry for each provided key.
  for i, key in ipairs(KEYS) do
    redis.call("set", key, ARGV[1], "PX", ARGV[2])
  end

  -- Return the number of entries added.
  return #KEYS
`;
const EXTEND_SCRIPT = `
  -- Return 0 if an entry exists with a *different* lock value.
  for i, key in ipairs(KEYS) do
    if redis.call("get", key) ~= ARGV[1] then
      return 0
    end
  end

  -- Update the entry for each provided key.
  for i, key in ipairs(KEYS) do
    redis.call("set", key, ARGV[1], "PX", ARGV[2])
  end

  -- Return the number of entries updated.
  return #KEYS
`;
const RELEASE_SCRIPT = `
  local count = 0
  for i, key in ipairs(KEYS) do
    -- Only remove entries for *this* lock value.
    if redis.call("get", key) == ARGV[1] then
      redis.pcall("del", key)
      count = count + 1
    end
  end

  -- Return the number of entries removed.
  return count
`;
// Define default settings.
const defaultSettings = {
    driftFactor: 0.01,
    retryCount: 10,
    retryDelay: 200,
    retryJitter: 100,
    automaticExtensionThreshold: 500,
};
// Modifyng this object is forbidden.
Object.freeze(defaultSettings);
/*
 * This error indicates a failure due to the existence of another lock for one
 * or more of the requested resources.
 */
class ResourceLockedError extends Error {
    constructor(message) {
        super();
        this.message = message;
        this.name = "ResourceLockedError";
    }
}
exports.ResourceLockedError = ResourceLockedError;
/*
 * This error indicates a failure of an operation to pass with a quorum.
 */
class ExecutionError extends Error {
    constructor(message, attempts) {
        super();
        this.message = message;
        this.attempts = attempts;
        this.name = "ExecutionError";
    }
}
exports.ExecutionError = ExecutionError;
/*
 * An object of this type is returned when a resource is successfully locked. It
 * contains convenience methods `release` and `extend` which perform the
 * associated Redlock method on itself.
 */
class Lock {
    constructor(redlock, resources, value, attempts, expiration) {
        this.redlock = redlock;
        this.resources = resources;
        this.value = value;
        this.attempts = attempts;
        this.expiration = expiration;
    }
    async release() {
        return this.redlock.release(this);
    }
    async extend(duration) {
        return this.redlock.extend(this, duration);
    }
}
exports.Lock = Lock;
/**
 * A redlock object is instantiated with an array of at least one redis client
 * and an optional `options` object. Properties of the Redlock object should NOT
 * be changed after it is first used, as doing so could have unintended
 * consequences for live locks.
 */
class Redlock extends events_1.EventEmitter {
    constructor(clients, settings = {}, scripts = {}) {
        super();
        // Prevent crashes on error events.
        this.on("error", () => {
            // Because redlock is designed for high availability, it does not care if
            // a minority of redis instances/clusters fail at an operation.
            //
            // However, it can be helpful to monitor and log such cases. Redlock emits
            // an "error" event whenever it encounters an error, even if the error is
            // ignored in its normal operation.
            //
            // This function serves to prevent node's default behavior of crashing
            // when an "error" event is emitted in the absence of listeners.
        });
        // Create a new array of client, to ensure no accidental mutation.
        this.clients = new Set(clients);
        if (this.clients.size === 0) {
            throw new Error("Redlock must be instantiated with at least one redis client.");
        }
        // Customize the settings for this instance.
        this.settings = {
            driftFactor: typeof settings.driftFactor === "number"
                ? settings.driftFactor
                : defaultSettings.driftFactor,
            retryCount: typeof settings.retryCount === "number"
                ? settings.retryCount
                : defaultSettings.retryCount,
            retryDelay: typeof settings.retryDelay === "number"
                ? settings.retryDelay
                : defaultSettings.retryDelay,
            retryJitter: typeof settings.retryJitter === "number"
                ? settings.retryJitter
                : defaultSettings.retryJitter,
            automaticExtensionThreshold: typeof settings.automaticExtensionThreshold === "number"
                ? settings.automaticExtensionThreshold
                : defaultSettings.automaticExtensionThreshold,
        };
        // Use custom scripts and script modifiers.
        const acquireScript = typeof scripts.acquireScript === "function"
            ? scripts.acquireScript(ACQUIRE_SCRIPT)
            : ACQUIRE_SCRIPT;
        const extendScript = typeof scripts.extendScript === "function"
            ? scripts.extendScript(EXTEND_SCRIPT)
            : EXTEND_SCRIPT;
        const releaseScript = typeof scripts.releaseScript === "function"
            ? scripts.releaseScript(RELEASE_SCRIPT)
            : RELEASE_SCRIPT;
        this.scripts = {
            acquireScript: {
                value: acquireScript,
                hash: this._hash(acquireScript),
            },
            extendScript: {
                value: extendScript,
                hash: this._hash(extendScript),
            },
            releaseScript: {
                value: releaseScript,
                hash: this._hash(releaseScript),
            },
        };
    }
    /**
     * Generate a sha1 hash compatible with redis evalsha.
     */
    _hash(value) {
        return (0, crypto_1.createHash)("sha1").update(value).digest("hex");
    }
    /**
     * Generate a cryptographically random string.
     */
    _random() {
        return (0, crypto_1.randomBytes)(16).toString("hex");
    }
    /**
     * This method runs `.quit()` on all client connections.
     */
    async quit() {
        const results = [];
        for (const client of this.clients) {
            results.push(client.quit());
        }
        await Promise.all(results);
    }
    /**
     * This method acquires a locks on the resources for the duration specified by
     * the `duration`.
     */
    async acquire(resources, duration, settings) {
        var _a;
        if (Math.floor(duration) !== duration) {
            throw new Error("Duration must be an integer value in milliseconds.");
        }
        const start = Date.now();
        const value = this._random();
        try {
            const { attempts } = await this._execute(this.scripts.acquireScript, resources, [value, duration], settings);
            // Add 2 milliseconds to the drift to account for Redis expires precision,
            // which is 1 ms, plus the configured allowable drift factor.
            const drift = Math.round(((_a = settings === null || settings === void 0 ? void 0 : settings.driftFactor) !== null && _a !== void 0 ? _a : this.settings.driftFactor) * duration) + 2;
            return new Lock(this, resources, value, attempts, start + duration - drift);
        }
        catch (error) {
            // If there was an error acquiring the lock, release any partial lock
            // state that may exist on a minority of clients.
            await this._execute(this.scripts.releaseScript, resources, [value], {
                retryCount: 0,
            }).catch(() => {
                // Any error here will be ignored.
            });
            throw error;
        }
    }
    /**
     * This method unlocks the provided lock from all servers still persisting it.
     * It will fail with an error if it is unable to release the lock on a quorum
     * of nodes, but will make no attempt to restore the lock in the case of a
     * failure to release. It is safe to re-attempt a release or to ignore the
     * error, as the lock will automatically expire after its timeout.
     */
    async release(lock, settings) {
        // Immediately invalidate the lock.
        lock.expiration = 0;
        // Attempt to release the lock.
        return this._execute(this.scripts.releaseScript, lock.resources, [lock.value], settings);
    }
    /**
     * This method extends a valid lock by the provided `duration`.
     */
    async extend(existing, duration, settings) {
        var _a;
        if (Math.floor(duration) !== duration) {
            throw new Error("Duration must be an integer value in milliseconds.");
        }
        const start = Date.now();
        // The lock has already expired.
        if (existing.expiration < Date.now()) {
            throw new ExecutionError("Cannot extend an already-expired lock.", []);
        }
        const { attempts } = await this._execute(this.scripts.extendScript, existing.resources, [existing.value, duration], settings);
        // Invalidate the existing lock.
        existing.expiration = 0;
        // Add 2 milliseconds to the drift to account for Redis expires precision,
        // which is 1 ms, plus the configured allowable drift factor.
        const drift = Math.round(((_a = settings === null || settings === void 0 ? void 0 : settings.driftFactor) !== null && _a !== void 0 ? _a : this.settings.driftFactor) * duration) + 2;
        const replacement = new Lock(this, existing.resources, existing.value, attempts, start + duration - drift);
        return replacement;
    }
    /**
     * Execute a script on all clients. The resulting promise is resolved or
     * rejected as soon as this quorum is reached; the resolution or rejection
     * will contains a `stats` property that is resolved once all votes are in.
     */
    async _execute(script, keys, args, _settings) {
        const settings = _settings
            ? {
                ...this.settings,
                ..._settings,
            }
            : this.settings;
        // For the purpose of easy config serialization, we treat a retryCount of
        // -1 a equivalent to Infinity.
        const maxAttempts = settings.retryCount === -1 ? Infinity : settings.retryCount + 1;
        const attempts = [];
        while (true) {
            const { vote, stats } = await this._attemptOperation(script, keys, args);
            attempts.push(stats);
            // The operation achieved a quorum in favor.
            if (vote === "for") {
                return { attempts };
            }
            // Wait before reattempting.
            if (attempts.length < maxAttempts) {
                await new Promise((resolve) => {
                    setTimeout(resolve, Math.max(0, settings.retryDelay +
                        Math.floor((Math.random() * 2 - 1) * settings.retryJitter)), undefined);
                });
            }
            else {
                throw new ExecutionError("The operation was unable to achieve a quorum during its retry window.", attempts);
            }
        }
    }
    async _attemptOperation(script, keys, args) {
        return await new Promise((resolve) => {
            const clientResults = [];
            for (const client of this.clients) {
                clientResults.push(this._attemptOperationOnClient(client, script, keys, args));
            }
            const stats = {
                membershipSize: clientResults.length,
                quorumSize: Math.floor(clientResults.length / 2) + 1,
                votesFor: new Set(),
                votesAgainst: new Map(),
            };
            let done;
            const statsPromise = new Promise((resolve) => {
                done = () => resolve(stats);
            });
            // This is the expected flow for all successful and unsuccessful requests.
            const onResultResolve = (clientResult) => {
                switch (clientResult.vote) {
                    case "for":
                        stats.votesFor.add(clientResult.client);
                        break;
                    case "against":
                        stats.votesAgainst.set(clientResult.client, clientResult.error);
                        break;
                }
                // A quorum has determined a success.
                if (stats.votesFor.size === stats.quorumSize) {
                    resolve({
                        vote: "for",
                        stats: statsPromise,
                    });
                }
                // A quorum has determined a failure.
                if (stats.votesAgainst.size === stats.quorumSize) {
                    resolve({
                        vote: "against",
                        stats: statsPromise,
                    });
                }
                // All votes are in.
                if (stats.votesFor.size + stats.votesAgainst.size ===
                    stats.membershipSize) {
                    done();
                }
            };
            // This is unexpected and should crash to prevent undefined behavior.
            const onResultReject = (error) => {
                throw error;
            };
            for (const result of clientResults) {
                result.then(onResultResolve, onResultReject);
            }
        });
    }
    async _attemptOperationOnClient(client, script, keys, args) {
        try {
            let result;
            try {
                // Attempt to evaluate the script by its hash.
                const shaResult = (await client.evalsha(script.hash, keys.length, [
                    ...keys,
                    ...args,
                ]));
                if (typeof shaResult !== "number") {
                    throw new Error(`Unexpected result of type ${typeof shaResult} returned from redis.`);
                }
                result = shaResult;
            }
            catch (error) {
                // If the redis server does not already have the script cached,
                // reattempt the request with the script's raw text.
                if (!(error instanceof Error) ||
                    !error.message.startsWith("NOSCRIPT")) {
                    throw error;
                }
                const rawResult = (await client.eval(script.value, keys.length, [
                    ...keys,
                    ...args,
                ]));
                if (typeof rawResult !== "number") {
                    throw new Error(`Unexpected result of type ${typeof rawResult} returned from redis.`);
                }
                result = rawResult;
            }
            // One or more of the resources was already locked.
            if (result !== keys.length) {
                throw new ResourceLockedError(`The operation was applied to: ${result} of the ${keys.length} requested resources.`);
            }
            return {
                vote: "for",
                client,
                value: result,
            };
        }
        catch (error) {
            if (!(error instanceof Error)) {
                throw new Error(`Unexpected type ${typeof error} thrown with value: ${error}`);
            }
            // Emit the error on the redlock instance for observability.
            this.emit("error", error);
            return {
                vote: "against",
                client,
                error,
            };
        }
    }
    async using(resources, duration, settingsOrRoutine, optionalRoutine) {
        if (Math.floor(duration) !== duration) {
            throw new Error("Duration must be an integer value in milliseconds.");
        }
        const settings = settingsOrRoutine && typeof settingsOrRoutine !== "function"
            ? {
                ...this.settings,
                ...settingsOrRoutine,
            }
            : this.settings;
        const routine = optionalRoutine !== null && optionalRoutine !== void 0 ? optionalRoutine : settingsOrRoutine;
        if (typeof routine !== "function") {
            throw new Error("INVARIANT: routine is not a function.");
        }
        if (settings.automaticExtensionThreshold > duration - 100) {
            throw new Error("A lock `duration` must be at least 100ms greater than the `automaticExtensionThreshold` setting.");
        }
        // The AbortController/AbortSignal pattern allows the routine to be notified
        // of a failure to extend the lock, and subsequent expiration. In the event
        // of an abort, the error object will be made available at `signal.error`.
        const controller = typeof AbortController === "undefined"
            ? new node_abort_controller_1.AbortController()
            : new AbortController();
        const signal = controller.signal;
        function queue() {
            timeout = setTimeout(() => (extension = extend()), lock.expiration - Date.now() - settings.automaticExtensionThreshold);
        }
        async function extend() {
            timeout = undefined;
            try {
                lock = await lock.extend(duration);
                queue();
            }
            catch (error) {
                if (!(error instanceof Error)) {
                    throw new Error(`Unexpected thrown ${typeof error}: ${error}.`);
                }
                if (lock.expiration > Date.now()) {
                    return (extension = extend());
                }
                signal.error = error instanceof Error ? error : new Error(`${error}`);
                controller.abort();
            }
        }
        let timeout;
        let extension;
        let lock = await this.acquire(resources, duration, settings);
        queue();
        try {
            return await routine(signal);
        }
        finally {
            // Clean up the timer.
            if (timeout) {
                clearTimeout(timeout);
                timeout = undefined;
            }
            // Wait for an in-flight extension to finish.
            if (extension) {
                await extension.catch(() => {
                    // An error here doesn't matter at all, because the routine has
                    // already completed, and a release will be attempted regardless. The
                    // only reason for waiting here is to prevent possible contention
                    // between the extension and release.
                });
            }
            await lock.release();
        }
    }
}
exports["default"] = Redlock;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7613:
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"acl":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"append":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"asking":{"arity":1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"auth":{"arity":-2,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"bgrewriteaof":{"arity":1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bgsave":{"arity":-1,"flags":["admin","noscript","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"bitcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"bitfield":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"bitfield_ro":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"bitop":{"arity":-4,"flags":["write","denyoom"],"keyStart":2,"keyStop":-1,"step":1},"bitpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"blmove":{"arity":6,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"blmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"blpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpop":{"arity":-3,"flags":["write","noscript","blocking"],"keyStart":1,"keyStop":-2,"step":1},"brpoplpush":{"arity":4,"flags":["write","denyoom","noscript","blocking"],"keyStart":1,"keyStop":2,"step":1},"bzmpop":{"arity":-5,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"bzpopmax":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"bzpopmin":{"arity":-3,"flags":["write","noscript","blocking","fast"],"keyStart":1,"keyStop":-2,"step":1},"client":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"cluster":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"command":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"config":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"copy":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"dbsize":{"arity":1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"debug":{"arity":-2,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"decr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"decrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"del":{"arity":-2,"flags":["write"],"keyStart":1,"keyStop":-1,"step":1},"discard":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"dump":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"echo":{"arity":2,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"eval":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"eval_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"evalsha_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"exec":{"arity":1,"flags":["noscript","loading","stale","skip_slowlog"],"keyStart":0,"keyStop":0,"step":0},"exists":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"expire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"expiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"failover":{"arity":-1,"flags":["admin","noscript","stale"],"keyStart":0,"keyStop":0,"step":0},"fcall":{"arity":-3,"flags":["noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"fcall_ro":{"arity":-3,"flags":["readonly","noscript","stale","skip_monitor","no_mandatory_keys","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"flushall":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"flushdb":{"arity":-1,"flags":["write"],"keyStart":0,"keyStop":0,"step":0},"function":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"geoadd":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"geodist":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geohash":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geopos":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadius":{"arity":-6,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadius_ro":{"arity":-6,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember":{"arity":-5,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"georadiusbymember_ro":{"arity":-5,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearch":{"arity":-7,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"geosearchstore":{"arity":-8,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"get":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getbit":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"getdel":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getex":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"getrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"getset":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"hello":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"hexists":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hget":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hgetall":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hincrbyfloat":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hkeys":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmget":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hmset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hrandfield":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"hset":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hsetnx":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"hstrlen":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"hvals":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"incr":{"arity":2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrby":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"incrbyfloat":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"info":{"arity":-1,"flags":["loading","stale"],"keyStart":0,"keyStop":0,"step":0},"keys":{"arity":2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"lastsave":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"latency":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"lcs":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":2,"step":1},"lindex":{"arity":3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"linsert":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"llen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"lmove":{"arity":5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"lmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"lolwut":{"arity":-1,"flags":["readonly","fast"],"keyStart":0,"keyStop":0,"step":0},"lpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"lpos":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"lrange":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"lrem":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"lset":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"ltrim":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"memory":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"mget":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"migrate":{"arity":-6,"flags":["write","movablekeys"],"keyStart":3,"keyStop":3,"step":1},"module":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"monitor":{"arity":1,"flags":["admin","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"move":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"mset":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"msetnx":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":2},"multi":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"object":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"persist":{"arity":2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpire":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpireat":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"pexpiretime":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"pfadd":{"arity":-2,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"pfcount":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"pfdebug":{"arity":3,"flags":["write","denyoom","admin"],"keyStart":2,"keyStop":2,"step":1},"pfmerge":{"arity":-2,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"pfselftest":{"arity":1,"flags":["admin"],"keyStart":0,"keyStop":0,"step":0},"ping":{"arity":-1,"flags":["fast"],"keyStart":0,"keyStop":0,"step":0},"psetex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"psubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"psync":{"arity":-3,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"pttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"publish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"pubsub":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"punsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"quit":{"arity":-1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"randomkey":{"arity":1,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"readonly":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"readwrite":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rename":{"arity":3,"flags":["write"],"keyStart":1,"keyStop":2,"step":1},"renamenx":{"arity":3,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"replconf":{"arity":-1,"flags":["admin","noscript","loading","stale","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"replicaof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"reset":{"arity":1,"flags":["noscript","loading","stale","fast","no_auth","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"restore":{"arity":-4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"restore-asking":{"arity":-4,"flags":["write","denyoom","asking"],"keyStart":1,"keyStop":1,"step":1},"role":{"arity":1,"flags":["noscript","loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"rpop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"rpoplpush":{"arity":3,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"rpush":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"rpushx":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"sadd":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"save":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"scan":{"arity":-2,"flags":["readonly"],"keyStart":0,"keyStop":0,"step":0},"scard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"script":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"sdiff":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sdiffstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"select":{"arity":2,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"set":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setbit":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setex":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"setnx":{"arity":3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"setrange":{"arity":4,"flags":["write","denyoom"],"keyStart":1,"keyStop":1,"step":1},"shutdown":{"arity":-1,"flags":["admin","noscript","loading","stale","no_multi","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"sinter":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"sinterstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sismember":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"slaveof":{"arity":3,"flags":["admin","noscript","stale","no_async_loading"],"keyStart":0,"keyStop":0,"step":0},"slowlog":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"smembers":{"arity":2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"smismember":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"smove":{"arity":4,"flags":["write","fast"],"keyStart":1,"keyStop":2,"step":1},"sort":{"arity":-2,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"sort_ro":{"arity":-2,"flags":["readonly","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"spop":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"spublish":{"arity":3,"flags":["pubsub","loading","stale","fast"],"keyStart":1,"keyStop":1,"step":1},"srandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"srem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"sscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"ssubscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"strlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"subscribe":{"arity":-2,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"substr":{"arity":4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"sunion":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":-1,"step":1},"sunionstore":{"arity":-3,"flags":["write","denyoom"],"keyStart":1,"keyStop":-1,"step":1},"sunsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":1,"keyStop":-1,"step":1},"swapdb":{"arity":3,"flags":["write","fast"],"keyStart":0,"keyStop":0,"step":0},"sync":{"arity":1,"flags":["admin","noscript","no_async_loading","no_multi"],"keyStart":0,"keyStop":0,"step":0},"time":{"arity":1,"flags":["loading","stale","fast"],"keyStart":0,"keyStop":0,"step":0},"touch":{"arity":-2,"flags":["readonly","fast"],"keyStart":1,"keyStop":-1,"step":1},"ttl":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"type":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"unlink":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":-1,"step":1},"unsubscribe":{"arity":-1,"flags":["pubsub","noscript","loading","stale"],"keyStart":0,"keyStop":0,"step":0},"unwatch":{"arity":1,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":0,"keyStop":0,"step":0},"wait":{"arity":3,"flags":["noscript"],"keyStart":0,"keyStop":0,"step":0},"watch":{"arity":-2,"flags":["noscript","loading","stale","fast","allow_busy"],"keyStart":1,"keyStop":-1,"step":1},"xack":{"arity":-4,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xadd":{"arity":-5,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xautoclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xclaim":{"arity":-6,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xdel":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"xgroup":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xinfo":{"arity":-2,"flags":[],"keyStart":0,"keyStop":0,"step":0},"xlen":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"xpending":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xread":{"arity":-4,"flags":["readonly","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xreadgroup":{"arity":-7,"flags":["write","blocking","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"xrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"xsetid":{"arity":-3,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"xtrim":{"arity":-4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zadd":{"arity":-4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zcard":{"arity":2,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zdiff":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zdiffstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zincrby":{"arity":4,"flags":["write","denyoom","fast"],"keyStart":1,"keyStop":1,"step":1},"zinter":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zintercard":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zinterstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1},"zlexcount":{"arity":4,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zmpop":{"arity":-4,"flags":["write","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zmscore":{"arity":-3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmax":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zpopmin":{"arity":-2,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zrandmember":{"arity":-2,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrangestore":{"arity":-5,"flags":["write","denyoom"],"keyStart":1,"keyStop":2,"step":1},"zrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zrem":{"arity":-3,"flags":["write","fast"],"keyStart":1,"keyStop":1,"step":1},"zremrangebylex":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyrank":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zremrangebyscore":{"arity":4,"flags":["write"],"keyStart":1,"keyStop":1,"step":1},"zrevrange":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebylex":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrangebyscore":{"arity":-4,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zrevrank":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zscan":{"arity":-3,"flags":["readonly"],"keyStart":1,"keyStop":1,"step":1},"zscore":{"arity":3,"flags":["readonly","fast"],"keyStart":1,"keyStop":1,"step":1},"zunion":{"arity":-3,"flags":["readonly","movablekeys"],"keyStart":0,"keyStop":0,"step":0},"zunionstore":{"arity":-4,"flags":["write","denyoom","movablekeys"],"keyStart":1,"keyStop":1,"step":1}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nccwpck_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId].call(module.exports, module, module.exports, __nccwpck_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__nccwpck_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__nccwpck_require__.o(definition, key) && !__nccwpck_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__nccwpck_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__nccwpck_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	if (typeof __nccwpck_require__ !== 'undefined') __nccwpck_require__.ab = __dirname + "/";
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
const { run } = __nccwpck_require__(1745)

run()

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=index.js.map