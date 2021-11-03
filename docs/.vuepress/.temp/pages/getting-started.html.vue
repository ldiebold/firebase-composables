<template><h1 id="getting-started" tabindex="-1"><a class="header-anchor" href="#getting-started" aria-hidden="true">#</a> Getting Started</h1>
<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2>
<div class="language-bash ext-sh"><pre v-pre class="language-bash"><code><span class="token comment"># yarn (the cool kids)</span>
<span class="token function">yarn</span> <span class="token function">add</span> firebase-composables

<span class="token comment"># or npm (the oldschoolers)</span>
<span class="token function">npm</span> <span class="token function">install</span> firebase-composables --save
</code></pre></div><h2 id="add-credentials" tabindex="-1"><a class="header-anchor" href="#add-credentials" aria-hidden="true">#</a> Add Credentials</h2>
<p>Here's how you can find your credentials:</p>
<ol>
<li>Head over to the <a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">firebase console<OutboundLink/></a></li>
<li>Select your project</li>
<li>At the top right of the page, next to <strong>Project Overview</strong>, click on the ⚙️ icon, then <strong>Project settings</strong></li>
<li>scroll to the bottom of the page. Your credentials are inside <code>const firebaseConfig = </code></li>
<li>have a cookie 🍪</li>
</ol>
<blockquote>
<p>In the code snippet from step 4, firebase shows you how to initialize the app. You don't need any of this code, as <strong>firebase-composables</strong> handles it for you!</p>
</blockquote>
<p>before we can use firebase-composables, we need to install the plugin. In vite, this file will usually be <code>main.js</code></p>
<div class="language-javascript ext-js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> firebasePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token keyword">const</span> firebaseConfig <span class="token operator">=</span> <span class="token punctuation">{</span>
  apiKey<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  authDomain<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  projectId<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  storageBucket<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  messagingSenderId<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  appId<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span><span class="token punctuation">,</span>
  measurementId<span class="token operator">:</span> <span class="token string">'XXXXXXXXXXX'</span>
<span class="token punctuation">}</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>firebasePlugin<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  config<span class="token operator">:</span> firebaseConfig
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><h2 id="email-password-signin" tabindex="-1"><a class="header-anchor" href="#email-password-signin" aria-hidden="true">#</a> Email/Password SignIn</h2>
<h3 id="enabling-signin-with-firebase" tabindex="-1"><a class="header-anchor" href="#enabling-signin-with-firebase" aria-hidden="true">#</a> Enabling SignIn with Firebase</h3>
<p>First, ensure that the &quot;Email/Password&quot; provider is enabled in firebase. Here's how you do it:</p>
<ol>
<li>Wack this link to go to the firebase console 👊<a href="https://console.firebase.google.com/" target="_blank" rel="noopener noreferrer">firebase console<OutboundLink/></a></li>
<li>Select your project</li>
<li>Select <strong>Authentication</strong></li>
<li>Select <strong>Sign-in method</strong></li>
<li>Select <strong>Add new provider</strong></li>
<li>Ensure <strong>Email/Password</strong> has a tick ✔️, otherwise, set it up</li>
<li>Send a tweet to <a href="https://vuejs.org/v2/guide/team.html" target="_blank" rel="noopener noreferrer">someone on the Vue team<OutboundLink/></a> to say thankyou 💚</li>
</ol>
<h3 id="using-useemailsignin" tabindex="-1"><a class="header-anchor" href="#using-useemailsignin" aria-hidden="true">#</a> Using <code>useEmailSignIn</code></h3>
<p>Sign in is easy, let's dive into the code.
Hang on, grabbing my snorkel 🤿</p>
<div class="language-vue ext-vue"><pre v-pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useEmailSignIn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'firebase-composables'</span>

<span class="token comment">// 🤿 first we yank out the form, and sign in function</span>
<span class="token comment">// from the composable.</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span>
  form<span class="token punctuation">,</span>
  signIn<span class="token punctuation">,</span>
<span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useEmailSignIn</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- 🤿 Then, we simply model the 'email' and... --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.email<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>email<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>
🐚
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- 🤿 The password. --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>label</span> <span class="token attr-name">for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Password<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>label</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span>
      <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
      <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>form.password<span class="token punctuation">"</span></span>
      <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>password<span class="token punctuation">"</span></span>
    <span class="token punctuation">></span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>🐟

    <span class="token comment">&lt;!-- Then, we call the signIn button on click! --></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>signIn<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
      Sign In
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>

    <span class="token comment">&lt;!-- Ahhhh!!! 🏊 🦈 --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>

</code></pre></div></template>
