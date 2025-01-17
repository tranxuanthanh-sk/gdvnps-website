"use strict";
var __rest =
  (this && this.__rest) ||
  function (s, e) {
    var t = {};
    for (var p in s)
      if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (
          e.indexOf(p[i]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(s, p[i])
        )
          t[p[i]] = s[p[i]];
      }
    return t;
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LinkTag;
var react_1 = require("@remix-run/react");
var clsx_1 = require("clsx");
var LinkTag_module_scss_1 = require("./styles/LinkTag.module.scss");
function LinkTag(_a) {
  var _b;
  var _c = _a.tag,
    tag = _c === void 0 ? "link" : _c,
    toHref = _a.toHref,
    _d = _a.variant,
    variant = _d === void 0 ? "default" : _d,
    className = _a.className,
    onClick = _a.onClick,
    children = _a.children,
    props = __rest(_a, [
      "tag",
      "toHref",
      "variant",
      "className",
      "onClick",
      "children",
    ]);
  var linkTagVariants = (0, clsx_1.default)(
    className,
    ((_b = {
      "underline font-sans": variant === "default",
    }),
    (_b[LinkTag_module_scss_1.default.navbar] = variant === "navbar"),
    (_b[LinkTag_module_scss_1.default.normal] = variant === "normal"),
    _b)
  );
  switch (tag) {
    case "link":
      return (
        <react_1.Link
          to={"".concat(toHref)}
          className={""
            .concat(
              (0, clsx_1.default)(LinkTag_module_scss_1.default.link),
              " "
            )
            .concat(linkTagVariants)}
          onClick={onClick}
          {...props}
        >
          {children}
        </react_1.Link>
      );
    case "anchor":
      return (
        <a
          href={"".concat(toHref)}
          className={""
            .concat(
              (0, clsx_1.default)(LinkTag_module_scss_1.default.link),
              " "
            )
            .concat(linkTagVariants)}
          onClick={onClick}
          {...props}
        >
          {children}
        </a>
      );
    case "navlink":
      return (
        <react_1.NavLink
          to={"".concat(toHref)}
          className={""
            .concat(
              (0, clsx_1.default)(LinkTag_module_scss_1.default.link),
              " "
            )
            .concat(linkTagVariants)}
          onClick={onClick}
          {...props}
        >
          {children}
        </react_1.NavLink>
      );
    default:
      return null;
  }
}
