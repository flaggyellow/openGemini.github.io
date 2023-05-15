import{_ as e,X as i,Y as n,a3 as d}from"./framework-a4aa538b.js";const a={},E=d(`<h1 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h1><h2 id="文法介绍" tabindex="-1"><a class="header-anchor" href="#文法介绍" aria-hidden="true">#</a> 文法介绍</h2><p>go-yacc</p><h2 id="关键字-keywords" tabindex="-1"><a class="header-anchor" href="#关键字-keywords" aria-hidden="true">#</a> 关键字(Keywords)</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ALL          ALTER         ANY          AS           ASC         BEGIN
BY           CREATE        CONTINUOUS   DATABASE     DATABASES   DOWNSAMPLE
DOWNSAMPLES  DEFAULT       DELETE       DELAY        DESC        DESTINATIONS
DIAGNOSTICS  DISTINCT      DROP         DURATION     END         EVERY
EXPLAIN      FIELD         FOR          FROM         GRANT       GRANTS
GROUP        GROUPS        IN           INF          INSERT      INTO
KEY           KEYS         KILL         LIMIT        SHOW        MEASUREMENT
MEASUREMENTS  NAME         OFFSET       ON           ORDER       PASSWORD
POLICY        POLICIES     PRIVILEGES   QUERIES      QUERY       READ
REPLICATION   RESAMPLE     RETENTION    REVOKE       SAMPLEINTERVAL
SELECT        SERIES       SET          SHARD        SHARDS      SLIMIT
SOFFSET       STATS        STREAM       STREAMS      SUBSCRIPTION
SUBSCRIPTIONS TAG          TIMEINTERVAL TO           USER        USERS
VALUES        WHERE        WITH         WRITE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果您使用GeminiQL关键字作为标识符，您需要将每个查询中的标识符用双引号括起来。</p><p>关键字<code>time</code>是一个特例。<code>time</code>可以是一个连续查询名字、数据库名字、measurement的名字、保留策略名字、和用户名。在这些情况下，不需要在查询中用双引号将<code>time</code>括起来。 <code>time</code>不能是field key或tag key；openGemini拒绝写入将<code>time</code>作为field key或tag key的数据，对于这种数据写入，openGemini会返回错误。</p>`,7),s=[E];function S(c,r){return i(),n("div",null,s)}const t=e(a,[["render",S],["__file","geminiql_ref.html.vue"]]);export{t as default};
