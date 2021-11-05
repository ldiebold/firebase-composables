<template><h1 id="guarding-routes" tabindex="-1"><a class="header-anchor" href="#guarding-routes" aria-hidden="true">#</a> Guarding routes</h1>
<div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>both <code>redirectIfAuthenticated</code> and <code>redirectIfUnauthenticated</code> require <a href="https://next.router.vuejs.org/" target="_blank" rel="noopener noreferrer">vue-router v4<OutboundLink/></a></p>
</div>
<p>firebase-composables offers a simple way to <strong>redirect</strong> if the user is authenticated. You may want to use them in your apps layout.</p>
<h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2>
<p><code>redirectIfUnauthenticated</code> and <code>redirectIfAuthenticated</code> expose the same thing:</p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">return</span> <span class="token punctuation">{</span>
  checking<span class="token punctuation">,</span>
  onChecked
<span class="token punctuation">}</span>
</code></pre></div><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script setup<span class="token operator">></span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirectIfUnauthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span> onChecked <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">redirectIfUnauthenticated</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">)</span>

onChecked<span class="token punctuation">.</span><span class="token function-variable function">value</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'redirecting to home'</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>

<span class="token operator">&lt;</span>template<span class="token operator">></span>
  <span class="token operator">&lt;</span>YourLayoutComponent<span class="token operator">></span>
    <span class="token operator">&lt;</span>router<span class="token operator">-</span>view <span class="token operator">/</span><span class="token operator">></span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>YourLayoutComponent<span class="token operator">></span>
<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>
</code></pre></div><div class="custom-container warning"><p class="custom-container-title">WARNING</p>
<p>Be careful where you place these <code>redirect</code> composables! They're usually best placed high up the component tree (e.g. layout) so as to prevent unecessary repeated checks.</p>
</div>
<h2 id="full-example" tabindex="-1"><a class="header-anchor" href="#full-example" aria-hidden="true">#</a> Full Example</h2>
<p>Here's a simple way of handling redirects for authenticated users using layouts. Note that this will handle most use cases, but you may need a different strategy for something more custom.</p>
<ol>
<li>Create a &quot;public&quot; layout</li>
</ol>
<p><code>PublicLayout.vue</code></p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirectIfAuthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token comment">// 🤿 If the user is already authenticated, send them to the apps dashboard</span>
<span class="token function">redirectIfAuthenticated</span><span class="token punctuation">(</span><span class="token string">'/dashboard'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><p>This layout might be used for a &quot;register page&quot; or a &quot;landing page&quot;. Pages that an <strong>unauthenticated</strong> user can visit, and that an <strong>authenticated</strong> user would not.</p>
<ol start="2">
<li>Create an &quot;auth only&quot; layout</li>
</ol>
<p><code>AuthOnlyLayout.vue</code> (this might end up being called something like <code>MainLayout.vue</code>)</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> redirectIfAuthenticated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token comment">// 🤿 If the user is NOT authenticated, send them to the login page</span>
<span class="token function">redirectIfUnauthenticated</span><span class="token punctuation">(</span><span class="token string">'/login'</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>router-view</span> <span class="token punctuation">/></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
</code></pre></div><p>Now you can:</p>
<ul>
<li>use <code>AuthOnlyLayout.vue</code> for routes only visible to authenticated users</li>
<li>use <code>PublicLayout.vue</code> for routes only visible to unauthenticated users</li>
</ul>
</template>
