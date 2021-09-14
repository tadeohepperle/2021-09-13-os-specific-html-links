function detectOS() {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ["Macintosh", "MacIntel", "MacPPC", "Mac68K"],
    windowsPlatforms = ["Win32", "Win64", "Windows", "WinCE"],
    iosPlatforms = ["iPhone", "iPad", "iPod"],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = "Mac OS";
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = "iOS";
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = "Windows";
  } else if (/Android/.test(userAgent)) {
    os = "Android";
  } else if (!os && /Linux/.test(platform)) {
    os = "Linux";
  }

  return os;
}

const OS_HREF_ATTRIBUTES = {
  Windows: "href-windows",
  Android: "href-android",
  iOS: "href-ios",
  "Mac OS": "href-macos",
  Linux: "href-linux",
};

function replaceHREFs() {
  const os = detectOS();
  const attribute = OS_HREF_ATTRIBUTES[os];
  if (attribute) {
    let nodes = document.querySelectorAll(`[${attribute}]`);
    for (let node of nodes) {
      node.setAttribute("href", node.getAttribute(attribute));
    }
  }
}

if(window){
  window.addEventListener("load", () => {
    replaceHREFs();
  });
}
