import{_ as e,X as i,Y as n,a3 as t}from"./framework-a4aa538b.js";const s={},d=t(`<h1 id="集群部署" tabindex="-1"><a class="header-anchor" href="#集群部署" aria-hidden="true">#</a> 集群部署</h1><p>集群部署可以把openGemini的三个组件都部署在一个节点上，也可以把组件分散部署在多个节点上。</p><h2 id="部署伪集群" tabindex="-1"><a class="header-anchor" href="#部署伪集群" aria-hidden="true">#</a> 部署伪集群</h2><p>把openGemini集群的所有组件都部署在同一个节点上，这种集群部署方式我们称之为伪集群部署，目前社区提供了部署脚本install_cluster.sh。运行命令为： sh scripts/install_cluster.sh，执行该命令，在不修改配置文件的前提下，可直接在本地拉起一个openGemini集群，包括1个ts-sql、3个ts-meta和2个ts-store组件。但该集群仅在本地回环地址127.0.0.1上监听运行，可用于本地功能测试和学习，不能对外提供访问服务。 若要让集群监听本机IP，让外部节点可以访问，配置上相对要复杂一点，虽然可行，但不推荐。同样以部署1个ts-sql、3个ts-meta和2个ts-store组成的集群为例。</p><ol><li>分配端口 所有节点均监听本机IP地址，如192.168.0.1，所以所有组件之间不能使用相同的端口，需重新分配。可以做如下分配（参考）：</li></ol><figure><img src="https://user-images.githubusercontent.com/49023462/200800373-65a3ac6c-f38d-46ed-86d6-8b8f21232d50.png" alt="4" tabindex="0" loading="lazy"><figcaption>4</figcaption></figure><ol start="2"><li>配置文件修改 openGemini只有一个集群配置文件openGemini.conf，我们进行集群配置时，如果在一个节点上只部署一个ts-meta、一个ts-sql和一个ts-store，或者其中两个或一个，不存在相同组件部署在同一个节点上。则可以考虑在该节点上所有组件共用一个配置文件openGemini.conf 显然部署伪集群是不能共用一个，因为在同一个节点上有3个ts-meta，2个ts-store。所以我们建议为每个组件对应一个配置文件。具体做法如下：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; cp –rf openGemini.conf sql.conf
&gt; cp –rf openGemini.conf meta-1.conf
&gt; cp –rf openGemini.conf meta-2.conf
&gt; cp –rf openGemini.conf meta-3.conf
&gt; cp –rf openGemini.conf store-1.conf
&gt; cp –rf openGemini.conf store-2.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改sql.conf，仅修改如下部分即可，本地IP地址以192.168.0.1为例</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[http]
bind-address = &quot;192.168.0.1:8086&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改meta-1.conf，仅修改如下部分即可</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[meta]
bind-address = &quot;192.168.0.1:8088&quot;
http-bind-address = &quot;192.168.0.1:8091&quot;
rpc-bind-address = &quot;192.168.0.1:8092&quot;
// 预防/tmp空间不足，建议替换/tmp目录
dir = &quot;/path/to/openGemini/data/meta/1&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
meta-bind-port = 8010
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.1:8012&quot;, &quot;192.168.0.1:8013&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改meta-2.conf，仅修改如下部分即可</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[meta]
bind-address = &quot;192.168.0.1:8089&quot;
http-bind-address = &quot;192.168.0.1:8093&quot;
rpc-bind-address = &quot;192.168.0.1:8094&quot;
// 预防/tmp空间不足，建议替换/tmp目录
dir = &quot;/path/to/openGemini/data/meta/2&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
meta-bind-port = 8012
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.1:8012&quot;, &quot;192.168.0.1:8013&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改meta-3.conf，仅修改如下部分即可</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[meta]
bind-address = &quot;192.168.0.1:8090&quot;
http-bind-address = &quot;192.168.0.1:8095&quot;
rpc-bind-address = &quot;192.168.0.1:8096&quot;
// 为防/tmp空间不足，建议替换/tmp目录
dir = &quot;/path/to/openGemini/data/meta/3&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
meta-bind-port = 8013
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.1:8012&quot;, &quot;192.168.0.1:8013&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改store-1.conf，仅修改如下部分即可，为防/tmp空间不足，建议替换/tmp目录</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[data]
store-ingest-addr = &quot;192.168.0.1:8400&quot;
store-select-addr = &quot;192.168.0.1:8401&quot;
store-data-dir = &quot;/path/to/openGemini/data/1&quot;
store-wal-dir = &quot;/path/to/openGemini/data/1&quot;
store-meta-dir = &quot;/path/to/openGemini/data/meta/1&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
store-bind-port = 8011
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.1:8012&quot;, &quot;192.168.0.1:8013&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>修改store-2.conf，仅修改如下部分即可</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.1:8094&quot;, &quot;192.168.0.1:8096&quot;]
[data]
store-ingest-addr = &quot;192.168.0.1:8402&quot;
store-select-addr = &quot;192.168.0.1:8403&quot;
store-data-dir = &quot;/path/to/openGemini/data/2&quot;
store-wal-dir = &quot;/path/to/openGemini/data/2&quot;
store-meta-dir = &quot;/path/to/openGemini/data/meta/2&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
store-bind-port = 8014
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.1:8012&quot;, &quot;192.168.0.1:8013&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>如果还需要新增ts-store,可按照该配置，更换一下端口，再拉起即可</strong></p><ol start="3"><li>拉起集群 编辑脚本</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; cp –rf scripts/install_cluster.sh  scripts/cluster.sh
&gt; vim scripts/cluster.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>删除或注释cluster.sh脚本的第27-38行内容</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># generate config
for((i = 1; i &lt;= 3; i++))
do
rm -rf config/openGemini-$i.conf
cp config/openGemini.conf config/openGemini-$i.conf
sed -i &quot;s/{{meta_addr_1}}/\${nodes[1]}/g&quot; config/openGemini-$i.conf
sed -i &quot;s/{{meta_addr_2}}/\${nodes[2]}/g&quot; config/openGemini-$i.conf
sed -i &quot;s/{{meta_addr_3}}/\${nodes[3]}/g&quot; config/openGemini-$i.conf
sed -i &quot;s/{{addr}}/\${nodes[$i]}/g&quot; config/openGemini-$i.conf

sed -i &quot;s/{{id}}/$i/g&quot; config/openGemini-$i.conf
done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后再修改下启动命令中的配置文件和相关的日志目录</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup build/ts-meta -config config/openGemini -1.conf -pidfile /tmp/openGemini/pid/meta1.pid &gt; /tmp/openGemini/logs/1/meta_extra1.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>改为</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>nohup build/ts-meta -config config/meta-1.conf -pidfile /path/openGemini/pid/meta1.pid &gt; /path/openGemini/logs/1/meta_extra1.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以此类推 修改完成，执行命令,便可拉起伪集群</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; sh scripts/cluster.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="标准集群部署" tabindex="-1"><a class="header-anchor" href="#标准集群部署" aria-hidden="true">#</a> 标准集群部署</h2><p>目前还没有开发集群部署的自动化脚本，只能手动部署，欢迎感兴趣的童鞋到社区贡献! openGemini集群部署如图所示，集群有ts-meta(3x), ts-sql(2x), ts-store(2x)：</p><figure><img src="https://user-images.githubusercontent.com/49023462/200800488-5683ecc2-e06b-4b65-a8ca-33b3bceaf6e4.jpg" alt="5" tabindex="0" loading="lazy"><figcaption>5</figcaption></figure><p>这种部署方式，不存在两个相同组件被部署在同一个节点之上，没有端口竞争，则可以让同一个节点上的所有组件共用一个配置文件。 以Node1：192.168.0.1为例，仅需修改配置文件openGemini.conf如下内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.2:8092&quot;, &quot;192.168.0.3:8092&quot;]
[meta]
bind-address = &quot;192.168.0.1:8088&quot;
http-bind-address = &quot;192.168.0.1:8091&quot;
rpc-bind-address = &quot;192.168.0.1:8092&quot;
# 建议修改目录
dir = &quot;/path/openGemini/data/meta/1&quot;
[http]
bind-address = &quot;192.168.0.1:8086&quot;
[data]
store-ingest-addr = &quot;192.168.0.1:8400&quot;
store-select-addr = &quot;192.168.0.1:8401&quot;
# 建议修改目录
store-data-dir = &quot;/path/openGemini/data/1&quot;
store-wal-dir = &quot;/path/openGemini/data/1&quot;
store-meta-dir = &quot;/path/openGemini/data/meta/1&quot;
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.1&quot;
store-bind-port = 8011
meta-bind-port = 8010
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.2:8010&quot;, &quot;192.168.0.3:8010&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Node2，Node3的配置文件，两个地方保持不变：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.2:8092&quot;, &quot;192.168.0.3:8092&quot;]
[gossip]
store-bind-port = 8011
meta-bind-port = 8010
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.2:8010&quot;, &quot;192.168.0.3:8010&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其他地方的IP地址分别替换为Node2的IP 192.168.0.2 和 Node3的IP 192.168.0.3即可，端口可以不用修改。 <strong>需要注意的是，openGemini拉起集群时对组件启动顺序是有要求的，先启动所有三个节点之上的ts-meta组件（命令示例）：</strong></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; nohup ts-meta --config openGemini.conf -pidfile meta.pid &gt; meta_extra.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后启动ts-store组件（命令示例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; nohup ts-store --config openGemini.conf -pidfile store.pid &gt; store_extra.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>最后启动ts-sql组件（命令示例）：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>&gt; nohup ts-sql --config openGemini.conf -pidfile sql.pid &gt; sql_extra.log 2&gt;&amp;1 &amp;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="集群扩容" tabindex="-1"><a class="header-anchor" href="#集群扩容" aria-hidden="true">#</a> 集群扩容</h1><p>以扩ts-store组件为例，按部署方式可分为三种情况：</p><ol><li>新增组件ts-store部署在已有节点上，该节点已存在ts-store组件，这种情况下，ts-store的各个端口需要重新分配。 部署方式如图所示： <img src="https://user-images.githubusercontent.com/49023462/200800553-73d0bb25-de2c-4cf2-b401-8d8ddb00ded2.png" alt="6" loading="lazy"></li></ol><p>为新增节点单独准备配置文件，具体配置如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
# 保持不变
meta-join = [meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.2:8092&quot;, &quot;192.168.0.3:8092&quot;]
…
[data]
store-ingest-addr = &quot;192.168.0.3:8402&quot;
store-select-addr = &quot;192.168.0.3:8403&quot;
store-data-dir = &quot;/path/to/openGemini/data/2&quot;
store-wal-dir = &quot;/path/to/openGemini/data/2&quot;
store-meta-dir = &quot;/path/to/openGemini/data/meta/2&quot;
…
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.3&quot;
store-bind-port = 8012
# 保持不变
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.2:8010&quot;, &quot;192.168.0.3:8010&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>新增组件ts-store部署在已有节点上，该节点无ts-store组件，这种情况下，不需要重新分配端口，除非端口被其他应用程序占用。 部署方式如图所示： <img src="https://user-images.githubusercontent.com/49023462/200800580-2d1b0f70-fb89-42bd-864f-29da12cd3336.png" alt="7" loading="lazy"></li></ol><p>可以该节点其他组件共用同一个配置文件，只需修改ts-store对应的配置项即可(IP和目录)</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[data]
store-ingest-addr = &quot;192.168.0.2:8400&quot;
store-select-addr = &quot;192.168.0.2:8401&quot;
store-data-dir = &quot;/path/to/openGemini/data/1&quot;
store-wal-dir = &quot;/path/to/openGemini/data/1&quot;
store-meta-dir = &quot;/path/to/openGemini/data/meta/1&quot;
…
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.2&quot;
store-bind-port = 8011
# 保持不变
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.2:8010&quot;, &quot;192.168.0.3:8010&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>新增组件ts-store部署在新节点上，该节点无ts-store组件，这种情况下，不需要重新分配端口，除非端口被其他应用程序占用。 部署方式如图所示： <img src="https://user-images.githubusercontent.com/49023462/200800601-896711db-17ee-45c5-8cee-1b9f4d342e63.png" alt="8" loading="lazy"></li></ol><p>配置文件的配置与第二种情况一样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>[common]
# 保持不变
meta-join = [meta-join = [&quot;192.168.0.1:8092&quot;, &quot;192.168.0.2:8092&quot;, &quot;192.168.0.3:8092&quot;]
…
[data]
store-ingest-addr = &quot;192.168.0.4:8400&quot;
store-select-addr = &quot;192.168.0.4:8401&quot;
store-data-dir = &quot;/path/to/openGemini/data/1&quot;
store-wal-dir = &quot;/path/to/openGemini/data/1&quot;
store-meta-dir = &quot;/path/to/openGemini/data/meta/1&quot;
…
[logging]
# 建议修改目录
path = &quot;/path/openGemini/logs&quot;
[gossip]
bind-address = &quot;192.168.0.4&quot;
store-bind-port = 8011
# 保持不变
members = [&quot;192.168.0.1:8010&quot;, &quot;192.168.0.2:8010&quot;, &quot;192.168.0.3:8010&quot;]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,55),a=[d];function o(l,u){return i(),n("div",null,a)}const v=e(s,[["render",o],["__file","deploy_cluster.html.vue"]]);export{v as default};
