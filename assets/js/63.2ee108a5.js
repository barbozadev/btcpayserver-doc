(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{630:function(t,a,s){"use strict";s.r(a);var e=s(26),n=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"using-the-btcpay-api-for-custom-integration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-the-btcpay-api-for-custom-integration"}},[t._v("#")]),t._v(" Using the BTCPay API for Custom Integration")]),t._v(" "),s("p",[t._v("BTCPay implements the same API as Bitpay for creating and managing invoices.")]),t._v(" "),s("p",[t._v("Migrating from BitPay to BTCPay normally is as easy as changing a URL.")]),t._v(" "),s("p",[t._v("While Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),s("h1",{attrs:{id:"official-client-libraries"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#official-client-libraries"}},[t._v("#")]),t._v(" Official Client Libraries")]),t._v(" "),s("p",[t._v("BTCPay maintains official client libraries for "),s("a",{attrs:{href:"https://github.com/MetacoSA/NBitpayClient",target:"_blank",rel:"noopener noreferrer"}},[t._v("C#"),s("OutboundLink")],1),t._v(", "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpay-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/btcpayserver/node-btcpay",target:"_blank",rel:"noopener noreferrer"}},[t._v("NodeJS"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("In addition, there are forked repositories of Bitpay's "),s("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-php-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("PHP"),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://github.com/bitpay/ruby-client",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ruby"),s("OutboundLink")],1),t._v(" clients.")]),t._v(" "),s("h1",{attrs:{id:"accessing-the-api-manually"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#accessing-the-api-manually"}},[t._v("#")]),t._v(" Accessing the API Manually")]),t._v(" "),s("p",[t._v("If not using one of the libraries above, the REST API can be accessed manually.")]),t._v(" "),s("p",[t._v("The authentication mechanism is using "),s("code",[t._v("BitId")]),t._v(".")]),t._v(" "),s("p",[t._v("With "),s("code",[t._v("BitId")]),t._v(", the "),s("code",[t._v("client")]),t._v(" of the API (like an e-commerce plugin) generates a private key, then informs the "),s("code",[t._v("server")]),t._v(" (BTCPay) about the "),s("code",[t._v("public key")]),t._v(".")]),t._v(" "),s("p",[t._v("Every requests to the API sent by the client is signed with the client's "),s("code",[t._v("private key")]),t._v(".")]),t._v(" "),s("p",[t._v("We call "),s("code",[t._v("pairing")]),t._v(" the process to inform BTCPay about your "),s("code",[t._v("public key")]),t._v(".")]),t._v(" "),s("h2",{attrs:{id:"pairing-process"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pairing-process"}},[t._v("#")]),t._v(" Pairing process")]),t._v(" "),s("p",[t._v("Your first need to create a new store:")]),t._v(" "),s("ol",[s("li",[t._v("Log in")]),t._v(" "),s("li",[t._v("Go to Stores menu")]),t._v(" "),s("li",[t._v("Click on "),s("code",[t._v("Create a new store")])]),t._v(" "),s("li",[t._v("Enter a friendly name for the store, validate.")])]),t._v(" "),s("p",[t._v("There is two method of "),s("code",[t._v("pairing")]),t._v(", client side pairing and server side pairing.")]),t._v(" "),s("h3",{attrs:{id:"client-side-pairing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#client-side-pairing"}},[t._v("#")]),t._v(" Client side pairing")]),t._v(" "),s("p",[t._v("With client side pairing, the "),s("code",[t._v("client")]),t._v(" generates a URL from their "),s("code",[t._v("public key")]),t._v(" which a human user can browse to validate the pairing.")]),t._v(" "),s("p",[t._v("Typically the URL looks like "),s("code",[t._v("https://btcpay.example.com/api-access-request?pairingCode=<pairingcode_goes_here>")]),t._v(".")]),t._v(" "),s("p",[t._v("You can find documentation about how to achieve this with "),s("a",{attrs:{href:"https://support.bitpay.com/hc/en-us/articles/115003001183-How-do-I-pair-my-client-and-create-a-token-",target:"_blank",rel:"noopener noreferrer"}},[t._v("this link"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("h3",{attrs:{id:"server-side-pairing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#server-side-pairing"}},[t._v("#")]),t._v(" Server side pairing")]),t._v(" "),s("p",[t._v("The second way, is to generate your private key via some bitcoin library then:")]),t._v(" "),s("ol",[s("li",[t._v("Go to the store's settings")]),t._v(" "),s("li",[t._v("Click on "),s("code",[t._v("Access tokens")])]),t._v(" "),s("li",[t._v("Click on "),s("code",[t._v("Create new Token")])]),t._v(" "),s("li",[t._v("Select merchant's facade and enter your public key,")]),t._v(" "),s("li",[t._v("Click request pairing")]),t._v(" "),s("li",[t._v("Click on Approve")])]),t._v(" "),s("h2",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[t._v("#")]),t._v(" Note")]),t._v(" "),s("p",[t._v("BTCPay Server has an API compatible with Bitpay; changing your e-commerce application from Bitpay to BTCPay should take minimal effort.")]),t._v(" "),s("p",[t._v("You can read the full API documentation "),s("a",{attrs:{href:"https://bitpay.com/api#resource-Invoices",target:"_blank",rel:"noopener noreferrer"}},[t._v("on Bitpay's website"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("There is only one difference: Bitpay only allows one account for one merchant, BTCPay allows a user to manage multiple stores.")]),t._v(" "),s("h2",{attrs:{id:"modal-checkout"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#modal-checkout"}},[t._v("#")]),t._v(" Modal Checkout")]),t._v(" "),s("p",[t._v("To geneate a pop-up modal experience:")]),t._v(" "),s("ol",[s("li",[t._v("Include the btcpay.js script in your html page")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("https://your.btcpay.url/modal/btcpay.js"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token script"}}),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("Call the invoice API to generate an invoice (example code). This is sample backend code as it contains an auth token that should not be exposed in your front-end.")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" axiosClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" axios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  baseURL"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_URL")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  timeout"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  responseType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  headers"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Content-Type'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'application/json'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Authorization'")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BTCPAY_AUTH")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceCreation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"price"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12345")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"currency"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"USD"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"orderId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"something"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"itemDesc"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"item description"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"notificationUrl"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://webhook.after.checkout.com/goeshere"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"redirectURL"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://go.here.after.checkout.com"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" response "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" axiosClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("post")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/invoices"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" invoiceCreation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" invoiceId "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" response"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("Use the invoiceId to pop up the modal")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("showInvoice")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("invoiceId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("ol",{attrs:{start:"4"}},[s("li",[t._v("You'll often want to do something like refresh the state of your page when the invoice is paid, or note some kind of state before the modal pops up. You can attach event listeners like this:")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("window"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillEnter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalWillLeave")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nwindow"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("btcpay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("onModalReceiveMessageMethod")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("yourCallbackFunction"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// available from v1.0.5.6")]),t._v("\n")])])]),s("p",[s("code",[t._v("onModalReceiveMessageMethod")]),t._v(" will invoke your callback when a new status has been pushed from BTCPay Server to the invoice UI. The data format is "),s("code",[t._v('{invoiceId: "x", status: "y" }')])])])}),[],!1,null,null,null);a.default=n.exports}}]);