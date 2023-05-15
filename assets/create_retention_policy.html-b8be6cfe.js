import{_ as s,X as o,Y as t,Z as a,a1 as e,$ as d,a0 as c,a3 as r,C as i}from"./framework-a4aa538b.js";const l={},p=r(`<h1 id="create-retention-policy" tabindex="-1"><a class="header-anchor" href="#create-retention-policy" aria-hidden="true">#</a> CREATE RETENTION POLICY</h1><h2 id="语法" tabindex="-1"><a class="header-anchor" href="#语法" aria-hidden="true">#</a> 语法</h2><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token keyword">CREATE</span> RETENTION POLICY <span class="token operator">&lt;</span>retention_policy_name<span class="token operator">&gt;</span> <span class="token keyword">ON</span> <span class="token operator">&lt;</span>database_name<span class="token operator">&gt;</span> DURATION <span class="token operator">&lt;</span>duration<span class="token operator">&gt;</span> <span class="token keyword">REPLICATION</span> <span class="token operator">&lt;</span>n<span class="token operator">&gt;</span> <span class="token punctuation">[</span>SHARD DURATION <span class="token operator">&lt;</span>duration<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token keyword">DEFAULT</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="语法描述" tabindex="-1"><a class="header-anchor" href="#语法描述" aria-hidden="true">#</a> 语法描述</h2><h3 id="duration" tabindex="-1"><a class="header-anchor" href="#duration" aria-hidden="true">#</a> <code>DURATION</code></h3><ul><li><code>DURATION</code>子句确定openGemini将数据保留多长时间。 保留策略的最短持续时间为一小时，最长持续时间为<code>INF</code>（无限）。</li></ul><h3 id="replication" tabindex="-1"><a class="header-anchor" href="#replication" aria-hidden="true">#</a> <code>REPLICATION</code></h3><ul><li><code>REPLICATION</code>子句确定每个数据点在集群中存储了多少个独立副本，目前仅支持<code>1</code>副本。</li></ul><h3 id="shard-duration" tabindex="-1"><a class="header-anchor" href="#shard-duration" aria-hidden="true">#</a> <code>SHARD DURATION</code></h3><ul><li>可选项， <code>SHARD DURATION</code> 子句确定分片组的时间范围。</li><li>默认情况下，分片组的持续时间由保留策略的<code>DURATION</code>确定：</li></ul><table><thead><tr><th>保留策略期限</th><th>分片组持续时间</th></tr></thead><tbody><tr><td>&lt; 2 days</td><td>1 hour</td></tr><tr><td>&gt;= 2 days and &lt;= 6 months</td><td>1 day</td></tr><tr><td>&gt; 6 months</td><td>7 days</td></tr></tbody></table><p>最小允许的 <code>SHARD GROUP DURATION</code> 为<code>1h</code>. 如果 <code>创建保留策略</code> 查询试图将 <code>SHARD GROUP DURATION</code> 设置为小于 <code>1h</code> 且大于 <code>0s</code>, openGemini 会自动的讲 <code>SHARD GROUP DURATION</code> 设置为 <code>1h</code>. 如果 <code>CREATE RETENTION POLICY</code> 查询试图讲 <code>SHARD GROUP DURATION</code> 设置为你 <code>0s</code>, openGemini 会根据上面列出的默认自动设置<code>SHARD GROUP DURATION</code></p><h3 id="default" tabindex="-1"><a class="header-anchor" href="#default" aria-hidden="true">#</a> <code>DEFAULT</code></h3><p>将新的保留策略设置为数据库的默认保留策略。此设置是可选项。</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><h3 id="创建保留策略" tabindex="-1"><a class="header-anchor" href="#创建保留策略" aria-hidden="true">#</a> 创建保留策略</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> RETENTION POLICY <span class="token string">&quot;one_day_only&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> DURATION <span class="token number">1</span>d <span class="token keyword">REPLICATION</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该查询为数据库<code>NOAA_water_database</code>创建了一个名为<code>one_day_only</code>的保留策略，该策略的期限为<code>1d</code>，复制因子为<code>1</code>。</p><h3 id="创建默认保留策略" tabindex="-1"><a class="header-anchor" href="#创建默认保留策略" aria-hidden="true">#</a> 创建默认保留策略</h3><div class="language-sql line-numbers-mode" data-ext="sql"><pre class="language-sql"><code><span class="token operator">&gt;</span> <span class="token keyword">CREATE</span> RETENTION POLICY <span class="token string">&quot;one_day_only&quot;</span> <span class="token keyword">ON</span> <span class="token string">&quot;NOAA_water_database&quot;</span> DURATION <span class="token number">23</span>h60m <span class="token keyword">REPLICATION</span> <span class="token number">1</span> <span class="token keyword">DEFAULT</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>该查询创建与上例相同的保留策略，但是将其设置为数据库的默认保留策略。</p><p>成功的<code>CREATE RETENTION POLICY</code>查询不返回任何结果。</p><p>如果尝试创建与现有策略相同的保留策略，则openGemini不会返回错误。 如果尝试创建与现有保留策略相同名称的保留策略，但属性不同，则openGemini将返回错误。</p>`,23),h={class:"hint-container tip"},u=a("p",{class:"hint-container-title"},"Tips",-1),k=a("code",null,"CREATE DATABASE",-1),A=a("code",null,"CREATE DATABASE",-1);function R(T,_){const n=i("RouterLink");return o(),t("div",null,[p,a("div",h,[u,a("p",null,[e("您也可以在"),k,e("查询中指定新的保留策略。 请参阅 "),d(n,{to:"/guide/geminiql/sql_syntax/DDL/create_database.html"},{default:c(()=>[e("使用"),A,e("创建数据库")]),_:1}),e(".")])])])}const O=s(l,[["render",R],["__file","create_retention_policy.html.vue"]]);export{O as default};
