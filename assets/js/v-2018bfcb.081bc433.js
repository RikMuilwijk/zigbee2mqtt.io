"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[88938],{61935:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-2018bfcb",path:"/devices/WXKG16LM.html",title:"Xiaomi WXKG16LM control via MQTT",lang:"en-US",frontmatter:{title:"Xiaomi WXKG16LM control via MQTT",description:"Integrate your Xiaomi WXKG16LM via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-11-30T20:10:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[]},{level:2,title:"Adapter firmware",slug:"adapter-firmware",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Click_mode (enum)",slug:"click-mode-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/WXKG16LM.md",git:{updatedTime:1639772414e3}}},90790:(e,t,i)=>{i.r(t),i.d(t,{default:()=>k});var a=i(66252);const o=(0,a.uE)('<h1 id="xiaomi-wxkg16lm" tabindex="-1"><a class="header-anchor" href="#xiaomi-wxkg16lm" aria-hidden="true">#</a> Xiaomi WXKG16LM</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>WXKG16LM</td></tr><tr><td>Vendor</td><td>Xiaomi</td></tr><tr><td>Description</td><td>Aqara wireless remote switch E1 (single rocker)</td></tr><tr><td>Exposes</td><td>battery, voltage, action, click_mode, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/WXKG16LM.jpg" alt="Xiaomi WXKG16LM"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h2 id="adapter-firmware" tabindex="-1"><a class="header-anchor" href="#adapter-firmware" aria-hidden="true">#</a> Adapter firmware</h2><p>In order for this device to work (fully), at least the following firmware is required on your adapter:</p>',5),r=(0,a.Uk)("CC2530/CC2531: "),d={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/Z-Stack_Home_1.2_20211115/20211116/coordinator/Z-Stack_Home_1.2/bin",target:"_blank",rel:"noopener noreferrer"},l=(0,a._)("code",null,"20211115",-1),n=(0,a.Uk)("CC1352/CC2652: "),c={href:"https://github.com/Koenkk/Z-Stack-firmware/tree/7c5a6da0c41855d42b5e6506e5e3b496be097ba3/coordinator/Z-Stack_3.x.0/bin",target:"_blank",rel:"noopener noreferrer"},s=(0,a._)("code",null,"20211114",-1),u=(0,a.Uk)("Conbee II: "),h={href:"http://deconz.dresden-elektronik.de/deconz-firmware/deCONZ_ConBeeII_0x26720700.bin.GCF",target:"_blank",rel:"noopener noreferrer"},m=(0,a._)("code",null,"0x26720700",-1),p=(0,a._)("p",null,"Note that if you have already paired the device you will need to repair it after upgrading your adapter firmware.",-1),b=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),f=(0,a.Uk)("How to use device type specific configuration"),g=(0,a.uE)('<ul><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Voltage of the battery in millivolts. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>mV</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>single</code>, <code>double</code>, <code>hold</code>.</p><h3 id="click-mode-enum" tabindex="-1"><a class="header-anchor" href="#click-mode-enum" aria-hidden="true">#</a> Click_mode (enum)</h3><p>Click mode, fast: only supports single click which will be send immediately after clicking.multi: supports more events like double and hold. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;click_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>fast</code>, <code>multi</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),v={},k=(0,i(83744).Z)(v,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),v=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[o,(0,a._)("ul",null,[(0,a._)("li",null,[r,(0,a._)("a",d,[l,(0,a.Wm)(i)])]),(0,a._)("li",null,[n,(0,a._)("a",c,[s,(0,a.Wm)(i)])]),(0,a._)("li",null,[u,(0,a._)("a",h,[m,(0,a.Wm)(i)])])]),p,b,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(v,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[f])),_:1})])]),g],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);