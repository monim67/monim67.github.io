(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{154:function(t,e,a){"use strict";a.r(e);var s=a(0),o=Object(s.a)({},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Important!!!")]),t._v(" "),a("p",[t._v("The following guidelines are for people experienced in django or have already used this package once\nand looking for customizing the setup for different project environment. If you are using it for the first time\nwe recommend to visit our "),a("a",{attrs:{href:"https://django-bootstrap-datepicker-plus.readthedocs.io/en/latest/Walkthrough.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Quick Walkthrough Tutorial"),a("OutboundLink")],1),t._v(" for detailed instructions.")])]),t._v(" "),t._m(1),t._v(" "),a("Radio",{attrs:{value:"3",label:"Bootstrap 3"},model:{value:t.bootstrap_version,callback:function(e){t.bootstrap_version=e},expression:"bootstrap_version"}}),t._v(" "),a("Radio",{attrs:{value:"4",label:"Bootstrap 4"},model:{value:t.bootstrap_version,callback:function(e){t.bootstrap_version=e},expression:"bootstrap_version"}}),t._v(" "),t._m(2),t._v(" "),a("Radio",{attrs:{value:"ttags",label:"Include using django-bootstrap"+t.bootstrap_version+" tags"},model:{value:t.bootstrap_source,callback:function(e){t.bootstrap_source=e},expression:"bootstrap_source"}}),t._v(" "),a("Radio",{attrs:{value:"html",label:"Include using HTML tags (script,link)"},model:{value:t.bootstrap_source,callback:function(e){t.bootstrap_source=e},expression:"bootstrap_source"}}),t._v(" "),a("Radio",{attrs:{value:"none",label:"I already have Bootstrap JS/CSS files included in my template"},model:{value:t.bootstrap_source,callback:function(e){t.bootstrap_source=e},expression:"bootstrap_source"}}),t._v(" "),t._m(3),t._v(" "),a("Radio",{attrs:{value:"cdn",label:"Include jQuery from CDN"},model:{value:t.jquery_source,callback:function(e){t.jquery_source=e},expression:"jquery_source"}}),t._v(" "),a("Radio",{attrs:{value:"none",label:"I already have jQuery included in my template"},model:{value:t.jquery_source,callback:function(e){t.jquery_source=e},expression:"jquery_source"}}),t._v(" "),t._m(4),t._v(" "),a("Radio",{attrs:{value:"yes",label:"I have a master layout template"},model:{value:t.master_layout,callback:function(e){t.master_layout=e},expression:"master_layout"}}),t._v(" "),a("Radio",{attrs:{value:"no",label:"I am not using a master layout for my templates"},model:{value:t.master_layout,callback:function(e){t.master_layout=e},expression:"master_layout"}}),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("Install PyPI packages via pip:")]),t._v(" "),a("pre",[a("code",[t._v(t._s("ttags"==t.bootstrap_source?"pip install django-bootstrap"+t.bootstrap_version+"\n":"")+"pip install django-bootstrap-datepicker-plus\n")])]),t._v(" "),a("p",[t._v("Add packages to INSTALLED_APPS:")]),t._v(" "),a("pre",[a("code",[t._v("INSTALLED_APPS = [\n  # Add the following\n  "+t._s("ttags"==t.bootstrap_source?'"bootstrap'+t.bootstrap_version+'",\n  ':"")+'"bootstrap_datepicker_plus",\n]\n')])]),t._v(" "),a("TipFold",{attrs:{labelShow:"I need more information",labelHide:"Hide"}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("How to add packages to INSTALLED_APPS")]),t._v(" "),a("p",[t._v("INSTALLED_APPS is the list of all installed apps registered to your django project in your settings.py file.\nYou can see some default apps already registered by django. Add the above packages at the end of the list.")])])]),t._v(" "),a("p",[t._v("Add the following code block in head of your "+t._s("yes"==t.master_layout?"master ":"")+"template.")]),t._v(" "),a("pre",[a("code",[t._v(t._s(t.main_head)+"\n"+t._s("yes"==t.master_layout?"{% block extrahead %}\n{% endblock %}":"{{ form.media }}")+"\n")])]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:"yes"==t.master_layout,expression:"master_layout == 'yes'"}]},[t._v("\nAdd the following code block "+t._s("yes"==t.master_layout?"at the top":"in the head")+" of your page template.\n"),a("pre",[a("code",[t._v("{% block extrahead %}\n"+t._s("{{ form.media }}")+"\n{% endblock %}\n")])])]),t._v(" "),a("TipFold",{directives:[{name:"show",rawName:"v-show",value:"ttags"==t.bootstrap_source,expression:"bootstrap_source == 'ttags'"}],attrs:{labelShow:"What these tags do?",labelHide:"Hide"}},[a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("Role of these tags")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("load bootstrap3")]),t._v(" => "),a("em",[t._v("imports bootstrap"+t._s(t.bootstrap_version)+" library tags to template")])]),t._v(" "),a("li",[a("strong",[t._v("bootstrap_css")]),t._v(" => "),a("em",[t._v("Add Bootstrap CSS file to the template")])]),t._v(" "),a("li",[a("strong",[t._v("bootstrap_javascript"+t._s("cdn"==t.jquery_source?" jquery='full'":""))]),t._v(" => "),a("em",[t._v("Add Bootstrap JavaScript"+t._s("cdn"==t.jquery_source?"+jQuery":""))])]),t._v(" "),a("li",[a("strong",[t._v("form.media")]),t._v(" => "),a("em",[t._v("Adds date-picker required JS and CSS files")])]),t._v(" "),a("li",[a("strong",[t._v("extrahead")]),t._v(" => "),a("em",[t._v("Slot for extra resources to be added by child template")])])])])]),t._v(" "),t._m(6),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:"yes"==t.master_layout,expression:"master_layout == 'yes'"}]},[t._v("\nThe master template (master.html)\n"),a("pre",[a("code",[t._v(t._s(t.main_head)+'\n{% block extrahead %}\n{% endblock %}\n\n<div class="container">\n    {% block content %}\n    {% endblock %}\n</div>\n')])])]),t._v("\nThe page template (create-event.html)\n"),a("pre",[a("code",[t._v(t._s("yes"==t.master_layout?"{% extends 'master.html' %}\n{% load bootstrap"+t.bootstrap_version+" %}\n\n{% block extrahead %}\n{{ form.media }}\n{% endblock %}":t.main_head+"{{ form.media }}")+"\n\n"+t._s("yes"==t.master_layout?"{% block content %}\n":"")+'<form method="post">\n    {% csrf_token %}\n    '+t._s("ttags"==t.bootstrap_source?"{% bootstrap_form form %}":"{{ form.as_p }}")+'\n    <input type="submit" value="Save">\n</form>\n'+t._s("yes"==t.master_layout?"{% endblock %}\n":"")+"\n")])]),t._v(" "),a("section",{directives:[{name:"show",rawName:"v-show",value:"none"==t.jquery_source,expression:"jquery_source == 'none'"}]},[t._m(7)]),t._v(" "),a("div",{staticClass:"danger custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("About form.media")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("form.media")]),t._v(" tag is only for Generic Views. If you are generating the view yourself\npassing the form object to "),a("code",[t._v("render")]),t._v(" function, you have to use "),a("code",[t._v("your_form_variable_name.media")]),t._v(".\nIn case of the following example instead of "),a("code",[t._v(t._s("{{ form.media }}"))]),t._v(" used in above code block,\nyou have to use "),a("code",[t._v(t._s("{{ my_form.media }}"))]),t._v(".")])]),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://django-bootstrap-datepicker-plus.readthedocs.io/en/latest/Walkthrough.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Walk me through a tutorial to get it done"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://django-bootstrap-datepicker-plus.readthedocs.io/en/latest/Troubleshooting.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Troubleshooting, I am getting errors"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/monim67/django-bootstrap-datepicker-plus",target:"_blank",rel:"noopener noreferrer"}},[t._v("Github Homepage"),a("OutboundLink")],1)])]),t._v(" "),a("ul",t._l(t.$site.themeConfig.nav,function(e){return a("li",[a("a",{attrs:{href:e.link},domProps:{textContent:t._s(e.text)}})])}))],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"select-your-setup-preferences"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#select-your-setup-preferences","aria-hidden":"true"}},[this._v("#")]),this._v(" Select your Setup Preferences")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"bootstrap-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-version","aria-hidden":"true"}},[this._v("#")]),this._v(" Bootstrap Version")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"integrate-bootstrap-assets"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-bootstrap-assets","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrate Bootstrap assets")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"integrate-jquery"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#integrate-jquery","aria-hidden":"true"}},[this._v("#")]),this._v(" Integrate jQuery")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"master-layout"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#master-layout","aria-hidden":"true"}},[this._v("#")]),this._v(" Master Layout")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"let-s-set-it-up"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#let-s-set-it-up","aria-hidden":"true"}},[this._v("#")]),this._v(" Let's Set it Up")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"final-result"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#final-result","aria-hidden":"true"}},[this._v("#")]),this._v(" Final Result:")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("Caution")]),this._v(" "),e("p",[this._v("You choose to include jQuery yourself. Make sure jQuery is loaded before Boostrap JavaScript, otherwise\nyou will run into a fatal error")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"language-py extra-class"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{attrs:{class:"token comment"}},[t._v("# File: views.py")]),t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" django"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shortcuts "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" render\n"),a("span",{attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("forms "),a("span",{attrs:{class:"token keyword"}},[t._v("import")]),t._v(" UserForm\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("def")]),t._v(" "),a("span",{attrs:{class:"token function"}},[t._v("create_user")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  user_form "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" UserForm"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),t._v(" render"),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("request"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my_template.html'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token string"}},[t._v("'my_form'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" user_form"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("What is form.media?")]),this._v(" "),e("p",[this._v("The "),e("code",[this._v("form.media")]),this._v(" tag adds all JS/CSS files needed by all widgets present in the form into your template.\nWithout this the date-picker calendar won't show up. You cannot add it to your master template. Unless all\nof your pages has a form it will through an Undefined Variable exception.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"further-resources"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#further-resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Resources")])}],!1,null,null,null);o.options.__file="README.md";e.default=o.exports}}]);