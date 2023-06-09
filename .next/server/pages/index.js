"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,197];
exports.modules = {

/***/ 1103:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/avatar_4.c362c4ce.png","height":320,"width":453,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAMAAADJ2y/JAAAAS1BMVEX////HzcuZjIM5MjL//vjIxcDp7OOw1t779uj9+/P779i0ycna2MqvraeBenewnID4z6D0rCbmwF1gW1igzN6kekj/0mHMoWbalivIWtEaAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAN0lEQVQImRXGSRKAIBAAsWadQVEWBf3/SykuqQDgNxCzatq5rdcjEa6vRhGDdf+UV06MG62XJywa4QFwAc+GDwAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":6});

/***/ }),

/***/ 3350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/lib/cosmic.js
var cosmic = __webpack_require__(1073);
// EXTERNAL MODULE: ./src/components/SocialIcons.jsx
var SocialIcons = __webpack_require__(4378);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/configs/icons.jsx
var icons = __webpack_require__(6054);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./public/images/avatar_4.png
var avatar_4 = __webpack_require__(1103);
;// CONCATENATED MODULE: ./src/sections/IntroSection.jsx






const IntroSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "w-full flex flex-col-reverse md:flex-row justify-start",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-1 flex flex-col gap-y-4",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-2xl md:text-4xl font-bold max-w-2xl text-fore-primary",
                        children: "こんにちは、アシッシュです"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                // upload your resume either on Cosmic or in the public file of this directory
                                href: "https://drive.google.com/file/d/1Fvfrb993eFMChLDFML6JDgM3FugMDUCH/view?usp=sharing",
                                className: "flex items-center mr-4 text-fore-primary border-2 border-accent w-fit px-4 py-1 rounded cursor-pointer hover:text-accent transition-colors",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mr-2",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* PaperIcon */.At, {})
                                    }),
                                    "履歴書"
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(SocialIcons/* default */.Z, {})
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[80px] sm:w-[186px] relative mb-6 sm:mb-0 rounded-md",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: avatar_4/* default */.Z,
                    alt: "Ashish Dhomne",
                    height: 300,
                    width: 350,
                    quality: 80,
                    className: "rounded-lg",
                    placeholder: "blur"
                })
            })
        ]
    });
};
/* harmony default export */ const sections_IntroSection = (IntroSection);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/sections/AboutMeSection.jsx




const AboutMeSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mt-24",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "text-2xl md:text-3xl mb-8 text-fore-primary border-b border-b-slate-200 dark:border-b-gray-600 w-fit",
                children: "私について"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-fore-primary mb-8 ",
                children: "こんにちは、私は最近完成した です。 私は WebApp、API、デスクトップ アプリ、Android アプリを開発してきました。 .NET Core、Node.js、React などの Web テクノロジを改善したいと考えています。"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-fore-primary mb-8",
                children: "商業出身の私は、コードを書くのは秘密のソースを入れるようなものだとすぐに気づきました ボーカルミックスで。 必ずしも単一の方法があるわけではなく、 キーボードの背後にいる人は、自分のスタイルを表現する力を持っています。 素晴らしい解決策。"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: "/about",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                    className: "flex items-center text-accent underline underline-offset-2 cursor-pointer hover:opacity-70 transition hover:translate-x-1 w-fit",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "mr-1",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ForwardArrowIcon */.RC, {})
                        }),
                        "もっと詳しく知る"
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const sections_AboutMeSection = (AboutMeSection);

;// CONCATENATED MODULE: ./src/components/DevIcon.jsx

const DevIcon = ({ iconName , name  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
        className: "flex items-center",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                className: iconName
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "ml-2",
                children: name
            })
        ]
    }, name);
};
/* harmony default export */ const components_DevIcon = (DevIcon);

;// CONCATENATED MODULE: ./src/configs/dev-icons.js
const devIcons = [
    {
        iconName: "devicon-java-plain",
        name: "Java"
    },
    {
        iconName: "devicon-spring-plain",
        name: "Spring"
    },
    {
        iconName: "devicon-spring-plain",
        name: "SpringBoot"
    },
    {
        iconName: "devicon-mysql-plain",
        name: "Mysql"
    },
    {
        iconName: "devicon-html5-plain",
        name: "HTML"
    },
    {
        iconName: "devicon-css3-plain",
        name: "CSS"
    },
    {
        iconName: "devicon-javascript-plain",
        name: "JavaScript"
    },
    {
        iconName: "devicon-react-original",
        name: "React.js"
    },
    {
        iconName: "devicon-npm-original-wordmark",
        name: "NPM"
    },
    {
        iconName: "devicon-tailwindcss-plain",
        name: "Tailwind CSS"
    },
    {
        iconName: "devicon-azure-plain",
        name: "azure"
    },
    {
        iconName: "devicon-digitalocean-plain",
        name: "Digitalocean"
    },
    {
        iconName: "devicon-git-plain",
        name: "Git"
    },
    {
        iconName: "devicon-github-plain",
        name: "Github"
    },
    {
        iconName: "devicon-sourcetree-plain",
        name: "Sourcetree"
    },
    {
        iconName: "devicon-trello-plain",
        name: "Trello"
    },
    {
        iconName: "devicon-vscode-plain",
        name: "vscode"
    },
    {
        iconName: "devicon-intellij-plain",
        name: "intellij IDE"
    },
    {
        iconName: "devicon-ubuntu-plain",
        name: "ubuntu"
    }, 
];

;// CONCATENATED MODULE: ./src/sections/ToolboxSection.jsx





const TechSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "py-24",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex items-center mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-back-subtle p-2 mr-4 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* ToolboxIcon */.Yp, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-xl text-accent font-semibold",
                        children: "Toolbox"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                className: "grid grid-cols-2 sm:grid-cols-4 gap-6",
                children: devIcons.map((icon)=>/*#__PURE__*/ jsx_runtime_.jsx(components_DevIcon, {
                        name: icon.name,
                        iconName: icon.iconName
                    }, icon.name))
            })
        ]
    });
};
/* harmony default export */ const ToolboxSection = (TechSection);

// EXTERNAL MODULE: ./src/components/PostList.jsx
var PostList = __webpack_require__(5833);
;// CONCATENATED MODULE: ./src/sections/WorksSection.jsx




const WorksSection = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mt-24",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex items-center mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-back-subtle p-2 mr-4 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* FlaskIcon */.Vz, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-xl text-accent font-semibold",
                        children: "Works"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostList/* default */.Z, {
                allPosts: posts,
                postType: "works",
                home: true
            })
        ]
    });
};
/* harmony default export */ const sections_WorksSection = (WorksSection);

;// CONCATENATED MODULE: ./src/sections/PostsSection.jsx



const PostsSection_WorksSection = ({ posts  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "mt-24",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                className: "flex items-center mb-8",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bg-back-subtle p-2 mr-4 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* PencilIcon */.vd, {})
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-xl text-accent font-semibold",
                        children: "Posts"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(PostList/* default */.Z, {
                allPosts: posts,
                postType: "posts",
                home: true
            })
        ]
    });
};
/* harmony default export */ const PostsSection = (PostsSection_WorksSection);

;// CONCATENATED MODULE: ./src/sections/ContactSection.jsx



const ContactSection = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "group h-72 flex flex-col items-center justify-center my-32",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h3", {
                className: "text-3xl flex items-center gap-x-2 font-bold",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "bg-back-subtle p-1 rounded-full",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* LetterIcon */.gv, {})
                    }),
                    " ",
                    "Get in touch"
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "text-fore-subtle my-3 text-center",
                children: "While I'm always looking for new opportunities, I'm currently looking for an awesome team to code with."
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "mailto:ashishdhomne@hotmail.com",
                className: "text-white px-16 py-3.5 mt-8 text-xl bg-gradient-to-r from-accent to-violet-400 rounded hover:from-pink-500 hover:to-yellow-500",
                children: "Say hello"
            })
        ]
    });
};
/* harmony default export */ const sections_ContactSection = (ContactSection);

// EXTERNAL MODULE: ./src/components/Meta.jsx
var Meta = __webpack_require__(5766);
// EXTERNAL MODULE: ./src/components/Layout.jsx + 6 modules
var Layout = __webpack_require__(9330);
;// CONCATENATED MODULE: ./src/pages/index.jsx










const Index = ({ allPosts , allWorks , preview  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Meta/* PageMeta */.Vj, {
                title: "Ashishd.online",
                description: "Developer Portfolio Template built with Next.js and Cosmic"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Layout/* default */.Z, {
                preview: preview,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_IntroSection, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_AboutMeSection, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(ToolboxSection, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_WorksSection, {
                        posts: allWorks
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(PostsSection, {
                        posts: allPosts
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(sections_ContactSection, {})
                ]
            })
        ]
    });
};
// Below, we are calling the function in our cosmic.js file, and getting the posts from our Cosmic bucket. Since we are fetching from a single function in our cosmic.js file, we state whether we are viewing a preview of our page, what kind of posts we want (since we have blog posts and works posts), and the amount of posts we want to grab. In this case on the home page, I specified a limit of 3 posts.
async function getStaticProps({ preview =null  }) {
    const allPosts = await (0,cosmic/* getAllPosts */.Bd)(preview, "posts", 3) || [];
    const allWorks = await (0,cosmic/* getAllPosts */.Bd)(preview, "works", 3) || [];
    return {
        props: {
            allPosts,
            allWorks,
            preview
        }
    };
}
/* harmony default export */ const pages = (Index);


/***/ }),

/***/ 5422:
/***/ ((module) => {

module.exports = require("cosmicjs");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664,675,54,307,833], () => (__webpack_exec__(3350)));
module.exports = __webpack_exports__;

})();