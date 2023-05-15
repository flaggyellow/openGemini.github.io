import{_ as u,X as d,Y as k,Z as n,a1 as a,$ as e,a0 as s,a3 as o,C as c}from"./framework-a4aa538b.js";const m={},b=o(`<h1 id="show-series" tabindex="-1"><a class="header-anchor" href="#show-series" aria-hidden="true">#</a> SHOW SERIES</h1><p>返回指定数据库的系列。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> SERIES <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">WHERE</span> <span class="token operator">&lt;</span>tag_key<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>operator<span class="token operator">&gt;</span> <span class="token punctuation">[</span> <span class="token string">&#39;&lt;tag_value&gt;&#39;</span> <span class="token operator">|</span> <span class="token operator">&lt;</span>regular_expression<span class="token operator">&gt;</span><span class="token punctuation">]</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选的。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><p><code>WHERE</code>子句支持<code>tag</code>比较；在<code>SHOW SERIES</code>查询中，<code>field</code>比较是无效的。</p><p><code>WHERE</code>子句中支持的操作符：</p><table><thead><tr><th>操作符</th><th>含义</th></tr></thead><tbody><tr><td><code>=</code></td><td>等于</td></tr><tr><td><code>&lt;&gt;</code></td><td>不等于</td></tr><tr><td><code>!=</code></td><td>不等于</td></tr><tr><td><code>=~</code></td><td>匹配</td></tr><tr><td><code>!~</code></td><td>不匹配</td></tr></tbody></table>`,9),v=n("code",null,"FROM",-1),_=n("code",null,"LIMIT、OFFSET",-1),h=o(`<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-series查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-series查询" aria-hidden="true">#</a> 运行带有ON子句的SHOW SERIES查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> SERIES <span class="token keyword">ON</span> NOAA_water_database
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token operator">|</span> <span class="token keyword">key</span>                                         <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token operator">|</span> average_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek   <span class="token operator">|</span>
<span class="token operator">|</span> average_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica   <span class="token operator">|</span>
<span class="token operator">|</span> h2o_feet<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek              <span class="token operator">|</span>
<span class="token operator">|</span> h2o_feet<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica              <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek                <span class="token operator">|</span>
<span class="token operator">|</span> h2o_pH<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica                <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">1</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">2</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_quality<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica<span class="token punctuation">,</span>randtag<span class="token operator">=</span><span class="token number">3</span> <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>coyote_creek       <span class="token operator">|</span>
<span class="token operator">|</span> h2o_temperature<span class="token punctuation">,</span>location<span class="token operator">=</span>santa_monica       <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------------------------------------------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">14</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询的输出类似行协议格式。第一个逗号之前的所有内容是<code>measurement</code>的名字。第一个逗号之后的所有内容都是<code>tag key</code>或者<code>tag value</code>。数据库<code>NOAA_water_database</code>有五个不同的<code>measurement</code>和14个不同的系列。</p><h3 id="运行不带有on子句的show-series查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-series查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW SERIES</code>查询</h3>`,5),g=n("p",null,[a("使用"),n("code",null,"USE <database_name>"),a("指定数据库：")],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),a(` USE NOAA_water_database
Elapsed: 561ns
`),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),a(` SHOW SERIES
+---------------------------------------------+
`),n("span",{class:"token operator"},"|"),a(" key                                         "),n("span",{class:"token operator"},"|"),a(`
+---------------------------------------------+
`),n("span",{class:"token operator"},"|"),a(" average_temperature,location"),n("span",{class:"token operator"},"="),a("coyote_creek   "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" average_temperature,location"),n("span",{class:"token operator"},"="),a("santa_monica   "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_feet,location"),n("span",{class:"token operator"},"="),a("coyote_creek              "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_feet,location"),n("span",{class:"token operator"},"="),a("santa_monica              "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_pH,location"),n("span",{class:"token operator"},"="),a("coyote_creek                "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_pH,location"),n("span",{class:"token operator"},"="),a("santa_monica                "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("coyote_creek,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"3"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"1"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"2"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_quality,location"),n("span",{class:"token operator"},"="),a("santa_monica,randtag"),n("span",{class:"token operator"},"="),n("span",{class:"token number"},"3"),a(),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_temperature,location"),n("span",{class:"token operator"},"="),a("coyote_creek       "),n("span",{class:"token operator"},"|"),a(`
`),n("span",{class:"token operator"},"|"),a(" h2o_temperature,location"),n("span",{class:"token operator"},"="),a("santa_monica       "),n("span",{class:"token operator"},"|"),a(`
+---------------------------------------------+
`),n("span",{class:"token number"},"1"),a(" columns, "),n("span",{class:"token number"},"14"),a(" rows "),n("span",{class:"token keyword"},"in"),a(),n("span",{class:"token builtin class-name"},"set"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("p",null,[a("使用参数"),n("code",null,"db"),a("指定数据库")],-1),S=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[a("~$ "),n("span",{class:"token function"},"curl"),a(),n("span",{class:"token parameter variable"},"-G"),a(),n("span",{class:"token string"},'"http://localhost:8086/query?db=NOAA_water_database&pretty=true"'),a(" --data-urlencode "),n("span",{class:"token string"},'"q=SHOW SERIES"'),a(`
`),n("span",{class:"token punctuation"},"{"),a(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
        `),n("span",{class:"token punctuation"},"{"),a(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token number"},"0"),a(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                `),n("span",{class:"token punctuation"},"{"),a(`
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                        `),n("span",{class:"token string"},'"key"'),a(`
                    `),n("span",{class:"token punctuation"},"]"),a(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),a(),n("span",{class:"token punctuation"},"["),a(`
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"average_temperature,location=coyote_creek"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"average_temperature,location=santa_monica"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_feet,location=coyote_creek"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_feet,location=santa_monica"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_pH,location=coyote_creek"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_pH,location=santa_monica"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=1"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=2"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=coyote_creek,randtag=3"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=1"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=2"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_quality,location=santa_monica,randtag=3"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_temperature,location=coyote_creek"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`,
                        `),n("span",{class:"token punctuation"},"["),a(`
                            `),n("span",{class:"token string"},'"h2o_temperature,location=santa_monica"'),a(`
                        `),n("span",{class:"token punctuation"},"]"),a(`
                    `),n("span",{class:"token punctuation"},"]"),a(`
                `),n("span",{class:"token punctuation"},"}"),a(`
            `),n("span",{class:"token punctuation"},"]"),a(`
        `),n("span",{class:"token punctuation"},"}"),a(`
    `),n("span",{class:"token punctuation"},"]"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=o(`<h3 id="运行带有多个子句的show-series查询" tabindex="-1"><a class="header-anchor" href="#运行带有多个子句的show-series查询" aria-hidden="true">#</a> 运行带有多个子句的<code>SHOW SERIES</code>查询</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt;&gt;&gt; SHOW SERIES ON NOAA_water_database FROM &quot;h2o_quality&quot; WHERE &quot;location&quot; = &#39;coyote_creek&#39; LIMIT 2
+---------------------------------------------+
| key                                         |
+---------------------------------------------+
| h2o_quality,location=coyote_creek,randtag=1 |
| h2o_quality,location=coyote_creek,randtag=2 |
+---------------------------------------------+
1 columns, 2 rows in set
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中，与measurement <code>h2o_quality</code>和tag <code>location = coyote_creek</code>相关联的所有系列。<code>LIMIT</code>子句将返回的系列个数限制为2。</p>`,3);function w(O,f){const t=c("RouterLink"),l=c("Tabs");return d(),k("div",null,[b,n("p",null,[a("请查阅DML章节获得关于"),e(t,{to:"/zh/guide/geminiql/sql_syntax/DML/select.html#from%E5%AD%90%E5%8F%A5"},{default:s(()=>[v,a("子句")]),_:1}),a("、"),e(t,{to:"/zh/guide/geminiql/sql_syntax/DML/limit_offset.html"},{default:s(()=>[_,a("子句")]),_:1}),a("、和正则表达式的介绍。")]),h,e(l,{id:"92",data:[{title:"CLI"},{title:"API"}]},{tab0:s(({title:p,value:r,isActive:i})=>[g,y]),tab1:s(({title:p,value:r,isActive:i})=>[E,S]),_:1}),q])}const I=u(m,[["render",w],["__file","show_series.html.vue"]]);export{I as default};
