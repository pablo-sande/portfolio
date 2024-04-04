import { a1 as bold, a2 as red, a3 as yellow, a4 as dim, a5 as blue } from './chunks/astro_BtCTiNGV.mjs';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at ".concat(i));
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at ".concat(j));
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at ".concat(j));
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at ".concat(i));
            if (!pattern)
                throw new TypeError("Missing pattern at ".concat(i));
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^".concat(escapeString(options.delimiter || "/#?"), "]+?");
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
    };
    var consumeText = function () {
        var result = "";
        var value;
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || "",
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:".concat(token.pattern, ")$"), reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to not repeat, but got an array"));
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"".concat(token.name, "\" to not be empty"));
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"".concat(token.name, "\" to match \"").concat(token.pattern, "\", but got \"").concat(segment, "\""));
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"".concat(token.name, "\" to be ").concat(typeOfMessage));
        }
        return path;
    };
}
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"site/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/site","isIndex":false,"type":"page","pattern":"^\\/site\\/?$","segments":[[{"content":"site","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/site.astro","pathname":"/site","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.5.5_@types+node@20.11.27_sass@1.71.1_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/graphql","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/graphql\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"graphql","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/graphql.ts","pathname":"/api/graphql","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const s=document.getElementById(\"header\");document.addEventListener(\"scroll\",e=>{window.scrollY>10?(s?.classList.add(\"bg-[#010203]\",\"shadow-lg\",\"shadow-gray-500\",\"h-24\"),s?.classList.remove(\"h-28\")):(s?.classList.add(\"h-28\"),s?.classList.remove(\"bg-[#010203]\",\"shadow-lg\",\"shadow-gray-500\",\"h-24\"))});\n"}],"styles":[{"type":"external","src":"/_astro/contact.C7J94NMr.css"},{"type":"inline","content":".skillbox[data-astro-cid-u5aykeor]:before,.skillbox[data-astro-cid-u5aykeor]:after{content:\"\";position:absolute;width:100%;height:100%;border-radius:9999px}.spin[data-astro-cid-u5aykeor]:hover{color:var(--borderColor)}.spin[data-astro-cid-u5aykeor]:before,.spin[data-astro-cid-u5aykeor]:after{top:0;left:0}.spin[data-astro-cid-u5aykeor]:before{border:12px solid transparent}.spin[data-astro-cid-u5aykeor]:hover:before{border-top-color:var(--borderColor);border-right-color:var(--borderRightColor);border-bottom-color:var(--borderBottomColor);border-left-color:var(--borderLeftColor);transition:border-top-color 0s linear 0s,border-right-color 0s linear .29s,border-bottom-color 0s linear .63s,border-left-color 0s linear 1s}.spin[data-astro-cid-u5aykeor]:after{border:0 solid transparent}.spin[data-astro-cid-u5aykeor]:hover:after{border-top:12px solid var(--borderColor);border-left-width:12px;border-right-width:12px;transform:rotate(var(--borderRotationDegrees));transition:transform var(--animationDuration) linear 0s}#skills[data-astro-cid-xahix5fp]{-webkit-transform:translate3d(0,0,0);-webkit-perspective:1000}.enter-animation[data-astro-cid-xahix5fp]:nth-child(odd){animation:fromleft 1.5s ease 0s}.enter-animation[data-astro-cid-xahix5fp]:nth-child(2n){animation:fromright 2.75s ease-out 0s}@keyframes fromleft{0%{opacity:0;transform:translate(-100%)}to{opacity:1;left:0;transform:translate(0)}}@keyframes fromright{0%{opacity:0;transform:translate(100%)}to{opacity:1;transform:translate(0)}}.enter-animation-title[data-astro-cid-xahix5fp]{animation:entertitle 2.75s ease 0s}@keyframes entertitle{0%{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translate(0)}}\n"}],"routeData":{"route":"/skills","isIndex":false,"type":"page","pattern":"^\\/skills\\/?$","segments":[[{"content":"skills","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/skills.astro","pathname":"/skills","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"inline","value":"const s=document.getElementById(\"header\");document.addEventListener(\"scroll\",e=>{window.scrollY>10?(s?.classList.add(\"bg-[#010203]\",\"shadow-lg\",\"shadow-gray-500\",\"h-24\"),s?.classList.remove(\"h-28\")):(s?.classList.add(\"h-28\"),s?.classList.remove(\"bg-[#010203]\",\"shadow-lg\",\"shadow-gray-500\",\"h-24\"))});\n"}],"styles":[{"type":"external","src":"/_astro/contact.C7J94NMr.css"},{"type":"inline","content":"#main-section[data-astro-cid-xjpubisi]{-webkit-transform:translate3d(0,0,0);-webkit-perspective:1000}.ellipse[data-astro-cid-xjpubisi]{width:240px;height:240px;border-radius:50%;inset:0;margin:auto;position:absolute;border:4px #555 solid;transform-style:preserve-3d;-webkit-transform-style:preserve-3d}.ellipse[data-astro-cid-xjpubisi] .electron[data-astro-cid-xjpubisi]{width:16px;height:16px;border-radius:50%;inset:0;margin:auto;position:absolute;background:#00bfff;animation:move linear infinite,ellipseout 1s linear 2s forwards}.ellipse[data-astro-cid-xjpubisi]:nth-child(1){transform:rotate(60deg) rotateY(70deg)}.ellipse[data-astro-cid-xjpubisi]:nth-child(1) .electron[data-astro-cid-xjpubisi]{animation-duration:1.25s}.ellipse[data-astro-cid-xjpubisi]:nth-child(2){transform:rotate(120deg) rotateY(70deg)}.ellipse[data-astro-cid-xjpubisi]:nth-child(2) .electron[data-astro-cid-xjpubisi]{animation-duration:2.25s}@keyframes pabloellipseout{0%{border:4px solid #555}to{border:4px solid transparent}}@keyframes move{0%{transform:rotate(0) translate(120px) rotate(0) rotateY(-70deg);-webkit-transform:rotateZ(0) translateX(120px) rotateZ(0) rotateY(-70deg)}to{transform:rotate(360deg) translate(120px) rotate(-360deg) rotateY(-70deg);-webkit-transform:rotateZ(360deg) translateX(120px) rotateZ(-360deg) rotateY(-70deg)}}@keyframes stop{0%{transform:rotate(180deg) translate(-80px) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(-80px) rotateY(70deg)}to{transform:rotate(180deg) translate(0) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(0) rotateY(70deg)}}.pablo-ellipse[data-astro-cid-xjpubisi]{transform:rotate(180deg) rotateY(70deg);-webkit-transform:rotateZ(180deg) rotateY(70deg);animation:normalsize 0s ease-in 4s forwards,pabloellipseout 2s linear 2s forwards}@keyframes normalposition{to{transform:rotateY(290deg) rotate(180deg);-webkit-transform:rotateY(290deg) rotateZ(180deg)}}@keyframes normalsize{0%{width:120px;height:120px}to{width:100%;height:24rem}}.pablo[data-astro-cid-xjpubisi]{width:16px;height:16px;border-radius:50%;inset:0;margin:auto;position:absolute;width:0;height:0;animation:move 4.5s ease-out,normalposition 0s linear 4.5s forwards,stop .5s linear 4.5s forwards,sizein 1s ease-in 5s forwards,float 6s linear infinite 6.5s}@keyframes sizein{0%{width:0;height:0}to{width:24rem;height:24rem}}.show-up[data-astro-cid-xjpubisi]{opacity:0;animation:showup 1s linear .5s forwards}@keyframes showup{0%{opacity:0}to{opacity:1}}.ellipse-out[data-astro-cid-xjpubisi]{animation:ellipseout 1s linear 3s forwards}@keyframes ellipseout{0%{border:4px solid #555}to{background:transparent;border:4px solid transparent}}@keyframes float{0%{transform:rotate(180deg) translate(0) translateY(0) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(0) translateY(0) rotateY(70deg)}25%{transform:rotate(180deg) translate(0) translateY(-4px) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(0) translateY(-4px) rotateY(70deg)}50%{transform:rotate(180deg) translate(-4px) translateY(-6px) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(-4px) translateY(-6px) rotateY(70deg)}75%{transform:rotate(180deg) translate(1px) translateY(-7px) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(1px) translateY(-7px) rotateY(70deg)}to{transform:rotate(180deg) translate(0) translateY(0) rotateY(70deg);-webkit-transform:rotateZ(180deg) translateX(0) translateY(0) rotateY(70deg)}}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/sande/Documents/GitHub/portfolio/src/pages/contact.astro",{"propagation":"none","containsHead":true}],["C:/Users/sande/Documents/GitHub/portfolio/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/sande/Documents/GitHub/portfolio/src/pages/site.astro",{"propagation":"none","containsHead":true}],["C:/Users/sande/Documents/GitHub/portfolio/src/pages/skills.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/node_modules/.pnpm/astro@4.5.5_@types+node@20.11.27_sass@1.71.1_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_DokQSVrQ.mjs","/src/pages/api/graphql.ts":"chunks/pages/graphql_BEl_EuO4.mjs","/src/pages/skills.astro":"chunks/pages/skills_C5lRnNjY.mjs","\u0000@astrojs-manifest":"manifest_DzWRLWVj.mjs","C:/Users/sande/Documents/GitHub/portfolio/node_modules/.pnpm/@astrojs+react@3.0.10_@types+react-dom@18.2.21_@types+react@18.2.64_react-dom@18.2.0_react@18.2.0_vite@5.1.5/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_C1YIWAGb.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.5.5_@types+node@20.11.27_sass@1.71.1_typescript@5.4.2/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_ZhNPzG3q.mjs","\u0000@astro-page:src/pages/api/graphql@_@ts":"chunks/graphql_Dn7DfEoU.mjs","\u0000@astro-page:src/pages/contact@_@astro":"chunks/contact_DTjZpzQe.mjs","\u0000@astro-page:src/pages/site@_@astro":"chunks/site_DaM0Zorj.mjs","\u0000@astro-page:src/pages/skills@_@astro":"chunks/skills_BLYp5bf_.mjs","\u0000@astro-page:src/pages/index@_@astro":"chunks/index_D0TCnxkY.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DIdbFP8j.js","C:/Users/sande/Documents/GitHub/portfolio/src/components/MobileHeader":"_astro/MobileHeader.CLTqWrYn.js","C:/Users/sande/Documents/GitHub/portfolio/src/components/ContactForm":"_astro/ContactForm.CSfFO_dG.js","@astrojs/react/client.js":"_astro/client.tW14lfjf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/electrolize-latin-400-normal.DeT0TdjA.woff2","/_astro/electrolize-latin-400-normal.D6YHFQ9Z.woff","/_astro/contact.C7J94NMr.css","/betonline.webp","/bixby.webp","/cv.pdf","/davitri.webp","/favicon.svg","/orange.webp","/pablo.webp","/_astro/client.tW14lfjf.js","/_astro/contact.B5bOMCmT.css","/_astro/ContactForm.CSfFO_dG.js","/_astro/index.BG0d_8j_.js","/_astro/jsx-runtime.CfVuv60F.js","/_astro/MobileHeader.CLTqWrYn.js","/contact/index.html","/site/index.html"],"buildFormat":"directory"});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
