import{_ as n,X as t,Y as d,Z as e,a1 as a,$ as r,a3 as s,C as l}from"./framework-a4aa538b.js";const o={},c=e("h1",{id:"如何将数据从-influxdb-迁移到-opengemini",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#如何将数据从-influxdb-迁移到-opengemini","aria-hidden":"true"},"#"),a(" 如何将数据从 influxdb 迁移到 openGemini")],-1),u=e("h2",{id:"仓库地址",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#仓库地址","aria-hidden":"true"},"#"),a(" 仓库地址")],-1),h={href:"https://github.com/openGemini/data-migration-tools",target:"_blank",rel:"noopener noreferrer"},v=s(`<h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述" aria-hidden="true">#</a> 描述</h2><p>工具名称是 dataMigrate。 它用于将 InfluxDB 数据迁移到 openGemini。 dataMigrate直接从InfluxDB的TSM文件中读取数据写入openGemini。</p><h2 id="快速开始" tabindex="-1"><a class="header-anchor" href="#快速开始" aria-hidden="true">#</a> 快速开始</h2><h3 id="环境信息" tabindex="-1"><a class="header-anchor" href="#环境信息" aria-hidden="true">#</a> 环境信息</h3><p>Go version &gt;1.16</p><p>Setting Environment Variables</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; export GOPATH=/path/to/dir
&gt; export GO111MODULE=on
&gt; export GONOSUMDB=*
&gt; export GOSUMDB=off
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译" tabindex="-1"><a class="header-anchor" href="#编译" aria-hidden="true">#</a> 编译</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; bash build.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="数据迁移命令" tabindex="-1"><a class="header-anchor" href="#数据迁移命令" aria-hidden="true">#</a> 数据迁移命令</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; dataMigrate --from path/to/tsm-file --to ip:port --database dbname
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Usage: dataMigrate [flags]

-database string
Optional: the database to read
-end string
Optional: the end time to read (RFC3339 format)
-from string
Data storage path (default &quot;/var/lib/Influxdb/data&quot;)
-retention string
Optional: the retention policy to read (requires -database)
-start string
Optional: the start time to read (RFC3339 format)
-to string
Destination host to write data to (default &quot;127.0.0.1:8086&quot;,which is the openGemini service default address)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function m(b,p){const i=l("ExternalLinkIcon");return t(),d("div",null,[c,u,e("p",null,[e("a",h,[a("data-migration-tools"),r(i)])]),v])}const x=n(o,[["render",m],["__file","influxdb2openGemini.html.vue"]]);export{x as default};
