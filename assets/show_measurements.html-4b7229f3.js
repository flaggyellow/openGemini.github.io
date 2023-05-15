import{_ as d,X as u,Y as m,Z as s,a1 as n,$ as e,a0 as a,a3 as t,C as l}from"./framework-a4aa538b.js";const k={},b=t(`<h1 id="show-measurements" tabindex="-1"><a class="header-anchor" href="#show-measurements" aria-hidden="true">#</a> SHOW MEASUREMENTS</h1><p>返回指定数据库的measurement。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> MEASUREMENTS <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WITH</span> MEASUREMENT <span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token string">&#39;&lt;measurement_name&gt;&#39;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选项。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><p><code>WITH</code>子句，<code>WHERE</code>子句，<code>LIMIT</code>子句和<code>OFFSET</code>子句是可选的。<code>WHERE</code>子句支持tag比较；在<code>SHOW MEASUREMENTS</code>查询中，field比较是无效的。</p><p><code>WHERE</code>子句中支持的操作符：</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>=~</code></td><td>匹配</td></tr><tr><td><code>!~</code></td><td>不匹配</td></tr></tbody></table>`,9),v=s("code",null,"FROM",-1),h=s("code",null,"LIMIT、OFFSET",-1),_=t(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-measurements查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-measurements查询" aria-hidden="true">#</a> 运行带有<code>ON</code>子句的<code>SHOW MEASUREMENTS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> MEASUREMENTS <span class="token keyword">ON</span> NOAA_water_database
name: measurements
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token operator">|</span> name                <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token operator">|</span> average_temperature <span class="token operator">|</span>
<span class="token operator">|</span> h2o_feet            <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH              <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality         <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature     <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">5</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中的measurement。数据库<code>NOAA_water_database</code>有五个measurement：<code>average_temperature</code>、<code>h2o_feet</code>、<code>h2o_pH</code>、<code>h2o_quality</code>和<code>h2o_temperature</code>。</p><h3 id="运行不带有on子句的show-series查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-series查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW SERIES</code>查询</h3>`,5),g=s("p",null,[n("使用"),s("code",null,"USE <database_name>"),n("指定数据库：")],-1),E=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[s("span",{class:"token operator"},">>"),s("span",{class:"token operator"},">"),n(` USE NOAA_water_database
Elapsed: 781ns
`),s("span",{class:"token operator"},">>"),s("span",{class:"token operator"},">"),n(` SHOW MEASUREMENTS
name: measurements
+---------------------+
`),s("span",{class:"token operator"},"|"),n(" name                "),s("span",{class:"token operator"},"|"),n(`
+---------------------+
`),s("span",{class:"token operator"},"|"),n(" average_temperature "),s("span",{class:"token operator"},"|"),n(`
`),s("span",{class:"token operator"},"|"),n(" h2o_feet            "),s("span",{class:"token operator"},"|"),n(`
`),s("span",{class:"token operator"},"|"),n(" h2o_pH              "),s("span",{class:"token operator"},"|"),n(`
`),s("span",{class:"token operator"},"|"),n(" h2o_quality         "),s("span",{class:"token operator"},"|"),n(`
`),s("span",{class:"token operator"},"|"),n(" h2o_temperature     "),s("span",{class:"token operator"},"|"),n(`
+---------------------+
`),s("span",{class:"token number"},"1"),n(" columns, "),s("span",{class:"token number"},"5"),n(" rows "),s("span",{class:"token keyword"},"in"),n(),s("span",{class:"token builtin class-name"},"set"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),S=s("p",null,[n("使用参数"),s("code",null,"db"),n("指定数据库")],-1),w=s("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[s("pre",{class:"language-bash"},[s("code",null,[n("~$ "),s("span",{class:"token function"},"curl"),n(),s("span",{class:"token parameter variable"},"-G"),n(),s("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),n(" --data-urlencode "),s("span",{class:"token string"},'"q=SHOW MEASUREMENTS"'),n(`
`),s("span",{class:"token punctuation"},"{"),n(`
    `),s("span",{class:"token string"},'"results"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
        `),s("span",{class:"token punctuation"},"{"),n(`
            `),s("span",{class:"token string"},'"statement_id"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token number"},"0"),n(`,
            `),s("span",{class:"token string"},'"series"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                `),s("span",{class:"token punctuation"},"{"),n(`
                    `),s("span",{class:"token string"},'"name"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token string"},'"measurements"'),n(`,
                    `),s("span",{class:"token string"},'"columns"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token string"},'"name"'),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`,
                    `),s("span",{class:"token string"},'"values"'),s("span",{class:"token builtin class-name"},":"),n(),s("span",{class:"token punctuation"},"["),n(`
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"average_temperature"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"h2o_feet"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"h2o_pH"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"h2o_quality"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`,
                        `),s("span",{class:"token punctuation"},"["),n(`
                            `),s("span",{class:"token string"},'"h2o_temperature"'),n(`
                        `),s("span",{class:"token punctuation"},"]"),n(`
                    `),s("span",{class:"token punctuation"},"]"),n(`
                `),s("span",{class:"token punctuation"},"}"),n(`
            `),s("span",{class:"token punctuation"},"]"),n(`
        `),s("span",{class:"token punctuation"},"}"),n(`
    `),s("span",{class:"token punctuation"},"]"),n(`
`),s("span",{class:"token punctuation"},"}"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),A=t(`<h3 id="运行带有多个子句的show-measurements查询" tabindex="-1"><a class="header-anchor" href="#运行带有多个子句的show-measurements查询" aria-hidden="true">#</a> 运行带有多个子句的<code>SHOW MEASUREMENTS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> MEASUREMENTS <span class="token keyword">ON</span> NOAA_water_database <span class="token keyword">WITH</span> MEASUREMENT <span class="token operator">=</span><span class="token operator">~</span> <span class="token operator">/</span>h2o<span class="token punctuation">.</span><span class="token operator">*</span><span class="token operator">/</span>
name: measurements
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> name            <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token operator">|</span> h2o_feet        <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH          <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality     <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">-----------------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">4</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中名字以<code>h2o</code>开头的measurement。</p>`,3);function N(M,O){const o=l("RouterLink"),c=l("Tabs");return u(),m("div",null,[b,s("p",null,[n("请查阅DML章节获得关于"),e(o,{to:"/guide/geminiql/sql_syntax/DML/select.html#from%E5%AD%90%E5%8F%A5"},{default:a(()=>[v,n("子句")]),_:1}),n("、"),e(o,{to:"/guide/geminiql/sql_syntax/DML/limit_offset.html"},{default:a(()=>[h,n("子句")]),_:1}),n("、和正则表达式的介绍。")]),_,e(c,{id:"92",data:[{title:"CLI"},{title:"API"}]},{tab0:a(({title:r,value:p,isActive:i})=>[g,E]),tab1:a(({title:r,value:p,isActive:i})=>[S,w]),_:1}),A])}const y=d(k,[["render",N],["__file","show_measurements.html.vue"]]);export{y as default};
