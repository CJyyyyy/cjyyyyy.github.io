import{_ as a,c as s,o as t,d as e}from"./app.771fba87.js";const h=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"java/HashMap/一些基础.md"}'),n={name:"java/HashMap/一些基础.md"},p=e(`<p>1.默认初始容量为16</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">static final int DEFAULT_INITIAL_CAPACITY = 1 &lt;&lt; 4;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>2.默认加载因子为0.75</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">static final float DEFAULT_LOAD_FACTOR = 0.75f;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>3.当红黑树节点小于等于6，自动退化成链表</p><p>4.当链表节点大于等于8，数组长度大于64时，链表会转化成红黑树</p><p>5.扩容阈值，当HashMap的元素个数超过这个阈值，就会发生扩容</p>`,7),l=[p];function o(c,i,_,r,d,A){return t(),s("div",null,l)}const m=a(n,[["render",o]]);export{h as __pageData,m as default};
