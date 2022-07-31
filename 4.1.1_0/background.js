(()=>{"use strict";var e={9431:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(s(3256));class o extends i.default{constructor(){super(...arguments),this.connections=new Map,this.addConnection=(e,t)=>{function s(e){return t(e.detail)}return this.addEventListener(e,s),this.connections.set(e,s),()=>this.removeConnection(e)},this.removeConnection=e=>{const t=this.connections.get(e);t&&(this.removeEventListener(e,t),this.connections.delete(e))},this.createEvent=e=>new CustomEvent(e,{detail:{}}),this.broadcast=e=>{let t=this.createEvent(e.message);if(null==e?void 0:e.to){let s,n,i=e.to;t.detail.to=i,i.includes(":")&&([i,...n]=e.to.split(":"),s=n.join(":")),this.connections.has(i)&&(t=this.createEvent(i),t.detail.to=s)}t.detail.message=e.message,t.detail.payload=e.payload,this.dispatchEvent(t)},this.listen=(e,t)=>{function s(e){return t(e.detail)}return this.addEventListener(e,s),()=>{this.removeEventListener(e,s)}},this.send=e=>{this.broadcast(e)},this.forward=(e,t)=>this.listen(e,(e=>{this.broadcast(Object.assign(Object.assign({},e),{to:t}))}))}}t.default=o},3256:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});t.default=class{constructor(){this.listeners=new Map}addEventListener(e,t){this.listeners.has(e)||this.listeners.set(e,new Set);this.listeners.get(e).add(t)}removeEventListener(e,t){if(this.listeners.has(e)){this.listeners.get(e).delete(t)}}dispatchEvent(e){if(this.listeners.has(null==e?void 0:e.type)){this.listeners.get(e.type).forEach((t=>t(e)))}}}},1362:function(e,t,s){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=n(s(9431)),o=s(9392);chrome.runtime.onMessage.addListener((({message:e},t,s)=>{var n;e===o.REQUEST_TAB_ID&&s(null===(n=null==t?void 0:t.tab)||void 0===n?void 0:n.id)}));const r=new i.default;chrome.runtime.onConnect.addListener((e=>{r.addConnection(e.name,(t=>{e.postMessage(t)})),e.onMessage.addListener((e=>{r.broadcast(e)})),e.onDisconnect.addListener((e=>{r.removeConnection(e.name)}))}))},9392:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RELOAD_TAB_COMPLETE=t.RELOADING_TAB=t.EXPLORER_RESPONSE=t.EXPLORER_REQUEST=t.PANEL_CLOSED=t.PANEL_OPEN=t.UPDATE=t.REQUEST_DATA=t.ACTION_HOOK_FIRED=t.CREATE_DEVTOOLS_PANEL=t.APOLLO_CLIENT_FOUND=t.FIND_APOLLO_CLIENT=t.DEVTOOLS_INITIALIZED=t.REQUEST_TAB_ID=t.CLIENT_FOUND=void 0,t.CLIENT_FOUND="client-found",t.REQUEST_TAB_ID="request-tab-id",t.DEVTOOLS_INITIALIZED="devtools-initialized",t.FIND_APOLLO_CLIENT="find-apollo-client",t.APOLLO_CLIENT_FOUND="apollo-client-found",t.CREATE_DEVTOOLS_PANEL="create-devtools-panel",t.ACTION_HOOK_FIRED="action-hook-fired",t.REQUEST_DATA="request-data",t.UPDATE="update",t.PANEL_OPEN="panel-open",t.PANEL_CLOSED="panel-closed",t.EXPLORER_REQUEST="explorer-request",t.EXPLORER_RESPONSE="explorer-response",t.RELOADING_TAB="reloading-tab",t.RELOAD_TAB_COMPLETE="reload-tab-complete"}},t={};(function s(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n].call(o.exports,o,o.exports,s),o.exports})(1362)})();