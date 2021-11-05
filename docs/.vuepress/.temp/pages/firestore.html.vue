<template><h1 id="firestore" tabindex="-1"><a class="header-anchor" href="#firestore" aria-hidden="true">#</a> Firestore</h1>
<p>The firestore composable is <strong>heavily</strong> inspired by <a href="https://vueuse.org/firebase/useFirestore/" target="_blank" rel="noopener noreferrer">@vueuse/firebase<OutboundLink/></a>. It provides One-way synchronization with a firebase doc.</p>
<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  data
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usages" tabindex="-1"><a class="header-anchor" href="#usages" aria-hidden="true">#</a> usages</h2>
<p>Notice that we use <code>firebase/firebase</code>'s <code>collection</code> (works with <code>doc</code> too). <code>useFirestore</code> is an intentionally light wrapper, and its only purpose is to sync data with the server.</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getFirestore<span class="token punctuation">,</span> useFirestore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> collection <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase/firestore'</span>

<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">getFirestore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> postsCollection <span class="token operator">=</span> <span class="token function">collection</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token string">'public-posts'</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token function">useFirestore</span><span class="token punctuation">(</span>postsCollection<span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>{{ posts }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><h2 id="one-way-synchronization" tabindex="-1"><a class="header-anchor" href="#one-way-synchronization" aria-hidden="true">#</a> One-way synchronization</h2>
<p>In the above example, one might think updating <code>posts</code> on the frontend will update <code>posts</code> in firestore. <strong>this is not the case</strong>.</p>
<p>To create/update data, you will still need to use <a href="https://firebase.google.com/docs/firestore/manage-data/add-data" target="_blank" rel="noopener noreferrer">firebase<OutboundLink/></a></p>
<p>This is intentional, as sending an update request every time <code>posts</code> changes would be highly inefficient. Luckily, firebase makes it easy.</p>
<p>here is a full example with both <code>useFirestore</code> and firebases <code>addDoc</code></p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> getFirestore<span class="token punctuation">,</span> useFirestore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> collection<span class="token punctuation">,</span> addDoc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase/firestore'</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue-demi'</span>

<span class="token comment">// 🤿 Get the collection</span>
<span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token function">getFirestore</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> postsCollection <span class="token operator">=</span> <span class="token function">collection</span><span class="token punctuation">(</span>db<span class="token punctuation">,</span> <span class="token string">'public-posts'</span><span class="token punctuation">)</span>

<span class="token comment">// 🤿 Use the composable for one-way synchronization</span>
<span class="token keyword">const</span> posts <span class="token operator">=</span> <span class="token function">useFirestore</span><span class="token punctuation">(</span>postsCollection<span class="token punctuation">)</span>

<span class="token comment">// 🤿 Setup a form for creating posts</span>
<span class="token keyword">const</span> creating <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> formDefault <span class="token operator">=</span> <span class="token punctuation">{</span>
  title<span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span>
  body<span class="token operator">:</span> <span class="token string">''</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> form <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span>formDefault<span class="token punctuation">)</span>
<span class="token keyword">function</span> <span class="token function">resetForm</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">.</span>value <span class="token operator">=</span> formDefault
<span class="token punctuation">}</span>

<span class="token comment">// 🤿 Create a new post</span>
<span class="token keyword">async</span> <span class="token keyword">function</span> <span class="token function">createPost</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  creating<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">true</span>
  <span class="token keyword">try</span> <span class="token punctuation">{</span>
    <span class="token keyword">await</span> <span class="token function">addDoc</span><span class="token punctuation">(</span>postsCollection<span class="token punctuation">,</span> form<span class="token punctuation">.</span>value<span class="token punctuation">)</span>
    <span class="token function">resetForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>error<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  creating<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token boolean">false</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>textarea</span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.body<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>createPost<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>create<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>pre</span><span class="token punctuation">></span></span>{{ posts }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>pre</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></template>
