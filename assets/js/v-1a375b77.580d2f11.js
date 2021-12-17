"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[24677],{50654:(e,t,o)=>{o.r(t),o.d(t,{data:()=>s});const s={key:"v-1a375b77",path:"/devices/LED1623G12.html",title:"IKEA LED1623G12 control via MQTT",lang:"en-US",frontmatter:{title:"IKEA LED1623G12 control via MQTT",description:"Integrate your IKEA LED1623G12 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2019-07-22T20:08:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Known Issue with sending effects with brightness 1",slug:"known-issue-with-sending-effects-with-brightness-1",children:[]},{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"OTA updates",slug:"ota-updates",children:[]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Light",slug:"light",children:[]},{level:3,title:"Effect (enum)",slug:"effect-enum",children:[]},{level:3,title:"Power_on_behavior (enum)",slug:"power-on-behavior-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/LED1623G12.md",git:{updatedTime:1639772414e3}}},96594:(e,t,o)=>{o.r(t),o.d(t,{default:()=>M});var s=o(66252);const n=(0,s.uE)('<h1 id="ikea-led1623g12" tabindex="-1"><a class="header-anchor" href="#ikea-led1623g12" aria-hidden="true">#</a> IKEA LED1623G12</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>LED1623G12</td></tr><tr><td>Vendor</td><td>IKEA</td></tr><tr><td>Description</td><td>TRADFRI LED bulb E27 1000 lumen, dimmable, opal white</td></tr><tr><td>Exposes</td><td>light (state, brightness), effect, power_on_behavior, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/LED1623G12.jpg" alt="IKEA LED1623G12"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="known-issue-with-sending-effects-with-brightness-1" tabindex="-1"><a class="header-anchor" href="#known-issue-with-sending-effects-with-brightness-1" aria-hidden="true">#</a> Known Issue with sending effects with brightness 1</h3>',4),i=(0,s.Uk)("There is a "),a={href:"https://github.com/Koenkk/zigbee2mqtt/issues/5237",target:"_blank",rel:"noopener noreferrer"},r=(0,s.Uk)("known issue"),d=(0,s.Uk)(" with the bulb brightness incorrectly returning to max after an effect is sent. This only occurs if "),l=(0,s._)("code",null,"brightness",-1),c=(0,s.Uk)(" is set to 2> and off, then turned on with "),h=(0,s._)("code",null,"brightness: 1",-1),u=(0,s.Uk)(". Once the effect has finished the bulb will report as being "),p=(0,s._)("code",null,"brightness: 1",-1),g=(0,s.Uk)(" however it outputs max brightness. Workarounds are to use "),b=(0,s._)("code",null,"brightness: 2",-1),m=(0,s.Uk)(" and above or turn on without "),f=(0,s._)("code",null,"brightness",-1),v=(0,s.Uk)(" then send the "),w=(0,s._)("code",null,"brightness: 1",-1),k=(0,s.Uk)(" in another command. This behaviour is confirmed present in the IKEA TRADFRI firmware v1.2.214."),q=(0,s._)("h3",{id:"pairing",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#pairing","aria-hidden":"true"},"#"),(0,s.Uk)(" Pairing")],-1),_=(0,s.Uk)("Factory reset the light bulb ("),E={href:"https://www.youtube.com/watch?v=npxOrPxVfe0",target:"_blank",rel:"noopener noreferrer"},y=(0,s.Uk)("video"),T=(0,s.Uk)("). After resetting the bulb will automatically connect."),L=(0,s._)("p",null,"While pairing, keep the bulb close to the coordinator (adapter).",-1),x=(0,s._)("p",null,'What works is to use (very) short “on’s” and a little bit longer “off’s”, where you kill the light as soon as the bulb shows signs of turning on. Start with bulb on, then off, and then 6 “on’s”, wait in the 6th ON state. (If you try play safe and go for 7 "on\'s" the reset sometimes fails.)',-1),A=(0,s._)("h2",{id:"ota-updates",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#ota-updates","aria-hidden":"true"},"#"),(0,s.Uk)(" OTA updates")],-1),I=(0,s.Uk)("This device supports OTA updates, for more information see "),U=(0,s.Uk)("OTA updates"),D=(0,s.Uk)("."),N=(0,s._)("h2",{id:"options",tabindex:"-1"},[(0,s._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,s.Uk)(" Options")],-1),F=(0,s.Uk)("How to use device type specific configuration"),O=(0,s.uE)('<ul><li><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="light" tabindex="-1"><a class="header-anchor" href="#light" aria-hidden="true">#</a> Light</h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness&quot;: &quot;&quot;}</code>.</li></ul><h4 id="transition" tabindex="-1"><a class="header-anchor" href="#transition" aria-hidden="true">#</a> Transition</h4><p>For all of the above mentioned features it is possible to do a transition of the value over time. To do this add an additional property <code>transition</code> to the payload which is the transition time in seconds. Examples: <code>{&quot;brightness&quot;:156,&quot;transition&quot;:3}</code>, <code>{&quot;color_temp&quot;:241,&quot;transition&quot;:1}</code>.</p><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping" aria-hidden="true">#</a> Moving/stepping</h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span>\n  <span class="token string">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span>\n  <span class="token string">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="effect-enum" tabindex="-1"><a class="header-anchor" href="#effect-enum" aria-hidden="true">#</a> Effect (enum)</h3><p>Triggers an effect on the light (e.g. make light blink for a few seconds). Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;effect&quot;: NEW_VALUE}</code>. The possible values are: <code>blink</code>, <code>breathe</code>, <code>okay</code>, <code>channel_change</code>, <code>finish_effect</code>, <code>stop_effect</code>.</p><h3 id="power-on-behavior-enum" tabindex="-1"><a class="header-anchor" href="#power-on-behavior-enum" aria-hidden="true">#</a> Power_on_behavior (enum)</h3><p>Controls the behavior when the device is powered on. Value can be found in the published state on the <code>power_on_behavior</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power_on_behavior&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;power_on_behavior&quot;: NEW_VALUE}</code>. The possible values are: <code>off</code>, <code>previous</code>, <code>on</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),R={},M=(0,o(83744).Z)(R,[["render",function(e,t){const o=(0,s.up)("OutboundLink"),R=(0,s.up)("RouterLink");return(0,s.wg)(),(0,s.iD)(s.HY,null,[n,(0,s._)("p",null,[i,(0,s._)("a",a,[r,(0,s.Wm)(o)]),d,l,c,h,u,p,g,b,m,f,v,w,k]),q,(0,s._)("p",null,[_,(0,s._)("a",E,[y,(0,s.Wm)(o)]),T]),L,x,A,(0,s._)("p",null,[I,(0,s.Wm)(R,{to:"/guide/usage/ota_updates.html"},{default:(0,s.w5)((()=>[U])),_:1}),D]),N,(0,s._)("p",null,[(0,s._)("em",null,[(0,s.Wm)(R,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,s.w5)((()=>[F])),_:1})])]),O],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,s]of t)e[o]=s;return e}}}]);