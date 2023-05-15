import{_ as p,X as i,Y as r,$ as u,a0 as a,a3 as e,C as d,Z as n,a1 as s}from"./framework-a4aa538b.js";const k={},m=e(`<h1 id="show-tag-keys" tabindex="-1"><a class="header-anchor" href="#show-tag-keys" aria-hidden="true">#</a> SHOW TAG KEYS</h1><p>返回指定数据库的tag key。</p><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token punctuation">[</span><span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span>FROM_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>LIMIT_CLAUSE<span class="token punctuation">]</span> <span class="token punctuation">[</span>OFFSET_CLAUSE<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><p><code>ON &lt;database_name&gt;</code>是可选项。如果查询中没有包含<code>ON &lt;database_name&gt;</code>，您必须在CLI中使用<code>USE &lt;database_name&gt;</code>指定数据库，或者在openGemini API请求中使用参数<code>db</code>指定数据库。</p><p><code>FROM</code>子句是可选的。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="运行带有on子句的show-tag-keys查询" tabindex="-1"><a class="header-anchor" href="#运行带有on子句的show-tag-keys查询" aria-hidden="true">#</a> 运行带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span>
name: average_temperature
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_feet
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_pH
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_quality
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">|</span> randtag  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

name: h2o_temperature
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> tagKey   <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token operator">|</span> location <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">----------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中的tag key。查询结果按measurement的名字进行分组；它展示了每个measurement都有一个名为<code>location</code>的tag key，并且，measurement <code>h2o_quality</code>还具有另外一个tag key <code>randtag</code>。</p><h3 id="运行不带有on子句的show-tag-keys查询" tabindex="-1"><a class="header-anchor" href="#运行不带有on子句的show-tag-keys查询" aria-hidden="true">#</a> 运行不带有<code>ON</code>子句的<code>SHOW TAG KEYS</code>查询</h3>`,12),v=n("p",null,[s("使用"),n("code",null,"USE <database_name>"),s("指定数据库：")],-1),b=n("div",{class:"language-sql line-numbers-mode","data-ext":"sql"},[n("pre",{class:"language-sql"},[n("code",null,[n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"use"),s(` NOAA_water_database
Elapsed: `),n("span",{class:"token number"},"452"),s(`ns
`),n("span",{class:"token operator"},">>"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token keyword"},"SHOW"),s(" TAG "),n("span",{class:"token keyword"},"KEYS"),s(`
name: average_temperature
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_feet
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_pH
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_quality
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"|"),s(" randtag  "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"2"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`

name: h2o_temperature
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" tagKey   "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token operator"},"|"),s(" location "),n("span",{class:"token operator"},"|"),s(`
`),n("span",{class:"token operator"},"+"),n("span",{class:"token comment"},"----------+"),s(`
`),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"columns"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token number"},"1"),s(),n("span",{class:"token keyword"},"rows"),s(),n("span",{class:"token operator"},"in"),s(),n("span",{class:"token keyword"},"set"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("p",null,[s("使用参数"),n("code",null,"db"),s("指定数据库")],-1),y=n("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[n("pre",{class:"language-bash"},[n("code",null,[s("~"),n("span",{class:"token comment"},'# curl -G "http://localhost:8086/query?db=NOAA_water_database&pretty=true" --data-urlencode "q=SHOW TAG KEYS"'),s(`
`),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token string"},'"results"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
        `),n("span",{class:"token punctuation"},"{"),s(`
            `),n("span",{class:"token string"},'"statement_id"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token number"},"0"),s(`,
            `),n("span",{class:"token string"},'"series"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"average_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_feet"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_pH"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_quality"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`,
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"randtag"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`,
                `),n("span",{class:"token punctuation"},"{"),s(`
                    `),n("span",{class:"token string"},'"name"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token string"},'"h2o_temperature"'),s(`,
                    `),n("span",{class:"token string"},'"columns"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token string"},'"tagKey"'),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`,
                    `),n("span",{class:"token string"},'"values"'),n("span",{class:"token builtin class-name"},":"),s(),n("span",{class:"token punctuation"},"["),s(`
                        `),n("span",{class:"token punctuation"},"["),s(`
                            `),n("span",{class:"token string"},'"location"'),s(`
                        `),n("span",{class:"token punctuation"},"]"),s(`
                    `),n("span",{class:"token punctuation"},"]"),s(`
                `),n("span",{class:"token punctuation"},"}"),s(`
            `),n("span",{class:"token punctuation"},"]"),s(`
        `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"]"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=e(`<h3 id="运行带有多个子句的show-tag-keys查询" tabindex="-1"><a class="header-anchor" href="#运行带有多个子句的show-tag-keys查询" aria-hidden="true">#</a> 运行带有多个子句的<code>SHOW TAG KEYS</code>查询</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span> <span class="token keyword">SHOW</span> TAG <span class="token keyword">KEYS</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> <span class="token keyword">FROM</span> <span class="token string">&quot;h2o_quality&quot;</span> <span class="token keyword">LIMIT</span> <span class="token number">1</span> <span class="token keyword">OFFSET</span> <span class="token number">1</span>
name: h2o_quality
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token operator">|</span> tagKey  <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token operator">|</span> randtag <span class="token operator">|</span>
<span class="token operator">+</span><span class="token comment">---------+</span>
<span class="token number">1</span> <span class="token keyword">columns</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token keyword">rows</span> <span class="token operator">in</span> <span class="token keyword">set</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该查询返回数据库<code>NOAA_water_database</code>中名为<code>h2o_quality</code>的measurement里的tag key。<code>LIMIT</code>子句将返回的tag key的个数限制为1，<code>OFFSET</code>子句将输出结果偏移一个。</p>`,3);function w(_,A){const t=d("Tabs");return i(),r("div",null,[m,u(t,{id:"32",data:[{title:"CLI"},{title:"API"}]},{tab0:a(({title:o,value:l,isActive:c})=>[v,b]),tab1:a(({title:o,value:l,isActive:c})=>[g,y]),_:1}),h])}const q=p(k,[["render",w],["__file","show_tag_keys.html.vue"]]);export{q as default};
