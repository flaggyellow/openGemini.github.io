import{_ as u,X as p,Y as m,Z as n,a1 as s,$ as l,a0 as e,a3 as a,C as i}from"./framework-a4aa538b.js";const k={},v=a(`<h1 id="show-field-keys" tabindex="-1"><a class="header-anchor" href="#show-field-keys" aria-hidden="true">#</a> SHOW FIELD KEYS</h1><p>返回field key和field value的数据类型。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">FROM</span> <span class="token operator">&lt;</span>measurement_name<span class="token operator">&gt;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选的。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p>`,6),b=n("code",null,"FROM",-1),h=n("code",null,"FROM",-1),g=a(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-field-keys查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-field-keys查询" aria-hidden="true">#</a> 运行带有<code>ON</code>子句的<code>SHOW FIELD KEYS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span>

name: average_temperature
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
degrees             <span class="token keyword">float</span>

name: h2o_feet
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">level</span> description   string
water_level         <span class="token keyword">float</span>

name: h2o_pH
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
pH                  <span class="token keyword">float</span>

name: h2o_quality
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">index</span>               <span class="token keyword">float</span>

name: h2o_temperature
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
degrees             <span class="token keyword">float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中每个measurement的field key以及对应的field value的数据类型。</p><h3 id="运行不带有on子句的show-field-keys查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-field-keys查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW FIELD KEYS</code>查询</h3>`,5),f=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),_=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"USE"),s(` NOAA_water_database
`),n("span",{class:"token keyword"},"Using"),s(),n("span",{class:"token keyword"},"database"),s(` NOAA_water_database

`),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"SHOW"),s(" FIELD "),n("span",{class:"token keyword"},"KEYS"),s(`

name: average_temperature
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
degrees             `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_feet
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
`),n("span",{class:"token keyword"},"level"),s(` description   string
water_level         `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_pH
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
pH                  `),n("span",{class:"token keyword"},"float"),s(`

name: h2o_quality
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
`),n("span",{class:"token keyword"},"index"),s("               "),n("span",{class:"token keyword"},"float"),s(`

name: h2o_temperature
fieldKey            fieldType
`),n("span",{class:"token comment"},"--------            ---------"),s(`
degrees             `),n("span",{class:"token keyword"},"float"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),w=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("~"),n("span",{class:"token comment"},`# curl -G "http://localhost:8086/query?db=NOAA_water_database&pretty=true" --data-urlencode 'q=SHOW FIELD KEYS'`),s(`

`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"average_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"degrees"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_feet"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"level description"'),s(`,
                            `),n("span",{class:"token string"},'"string"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"water_level"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_pH"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"pH"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_quality"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"index"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"fieldKey"'),s(`,
                        `),n("span",{class:"token string"},'"fieldType"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"degrees"'),s(`,
                            `),n("span",{class:"token string"},'"float"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),O=a(`<h3 id="运行带有from子句的show-field-keys查询" tabindex="-1"><a class="header-anchor" href="#运行带有from子句的show-field-keys查询" aria-hidden="true">#</a> 运行带有<code>FROM</code>子句的<code>SHOW FIELD KEYS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> FIELD <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_feet&quot;</span>

name: h2o_feet
fieldKey            fieldType
<span class="token comment">--------            ---------</span>
<span class="token keyword">level</span> description   string
water_level         <span class="token keyword">float</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中measurement <code>h2o_feet</code>里的fields key以及对应的field value的数据类型。</p>`,3);function q(K,E){const t=i("RouterLink"),c=i("Tabs");return p(),m("div",null,[v,n("p",null,[b,s("子句也是可选的。请查阅DML章节获得关于"),l(t,{to:"/zh/guide/geminiql/sql_syntax/DML/select.html"},{default:e(()=>[h,s("子句")]),_:1}),s("的介绍。")]),g,l(c,{id:"32",data:[{title:"CLI"},{title:"API"}]},{tab0:e(({title:o,value:d,isActive:r})=>[f,_]),tab1:e(({title:o,value:d,isActive:r})=>[y,w]),_:1}),O])}const x=u(k,[["render",q],["__file","show_field_keys.html.vue"]]);export{x as default};
