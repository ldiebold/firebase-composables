<template><h1 id="signing-out" tabindex="-1"><a class="header-anchor" href="#signing-out" aria-hidden="true">#</a> Signing Out</h1>
<p>the <code>useSignOut</code> composable has one method:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token function">signOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><p>We can also handle errors and loading with <code>error</code>, <code>hasError</code> and <code>loading</code></p>
<p>Exposes</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  signOut<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  error<span class="token punctuation">,</span>
  hasError
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useSignOut<span class="token punctuation">,</span> useAuthState <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>
  signOut<span class="token punctuation">,</span>
  loading<span class="token punctuation">,</span>
  error<span class="token punctuation">,</span>
  hasError
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useSignOut</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token comment">&lt;!-- Sign Out Button --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!loading<span class="token punctuation">"</span></span>
    <span class="token attr-name">:disabled</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>!isAuthenticated<span class="token punctuation">"</span></span>
    <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signOut<span class="token punctuation">"</span></span>
  <span class="token punctuation">></span></span>
    Sign Out
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- Loading --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">v-else</span><span class="token punctuation">></span></span>
    loading
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>

  <span class="token comment">&lt;!-- Error --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span>
    <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>hasError<span class="token punctuation">"</span></span>
    <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span>
  <span class="token punctuation">></span></span>
    {{ error.message }}
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div></template>
