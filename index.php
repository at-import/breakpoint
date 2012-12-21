<!DOCTYPE html>
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]><html class="no-js lt-ie9 lt-ie8 ie7"> <![endif]-->
<!--[if IE 8]><html class="no-js lt-ie9 ie8"> <![endif]-->
<!--[if gt IE 8]><!-->
<html class='no-js' lang='en'>
  <!--<![endif]-->



<head>
  <meta charset='utf-8' />
  <meta content='' name='description' />
  <meta content='' name='author' />
  <title>Breakpoint</title>
  <meta content='True' name='HandheldFriendly' />
  <meta content='width=device-width, target-densitydpi=160, initial-scale=1.0' name='viewport' />
  <link href='apple-touch-icon-114x114-precomposed.png' rel='apple-touch-icon-precomposed' sizes='114x114' />
  <link href='apple-touch-icon-72x72-precomposed.png' rel='apple-touch-icon-precomposed' sizes='72x72' />
  <link href='apple-touch-icon-precomposed.png' rel='apple-touch-icon-precomposed' />
  <link href='apple-touch-icon.png' rel='shortcut icon' />
  <link href='favicon.ico' rel='shortcut icon' />
  <meta content='on' http-equiv='cleartype' />
  <!-- CSS -->
  <link href='css/style.css?v=1' rel='stylesheet' />
  <link href='css/survivalguide.css?v=1' rel='stylesheet' />
  <script src='js/libs/modernizr-2.0.min.js'></script>
</head>

  <!-- Typekit -->
  <script type="text/javascript" src="//use.typekit.net/qdg4ggl.js"></script>
  <script type="text/javascript">try{Typekit.load();}catch(e){}</script>


  <body class='survival-kit breakpoint'>
    <div id='page'>
      <div id='main' role='main'>
        <h1 class='title'>Breakpoint</h1>
<h2 id='really_simple_organized_media_queries_with_sass'>Really Simple, Organized, Media Queries with Sass</h2>
<nav class='main-navigation'>
  <ul>
  <li><a href='#get-started'>Get Started</a></li>

  <li><a href='#learn-more'>Learn More</a></li>

  <li><a href='https://github.com/canarymason/breakpoint'>Contribute</a></li>
  </ul>
</nav>
<div class='da-content'>
  <div id='pitch'>
    <p class='lead-in'>Breakpoint makes writing media queries in Sass super simple. Here's one:</p><i>scss</i>
    <pre><code>$high-tide: 500px;</code></pre>

    <p>I told you it was simple. Check it out. You can use that variable in the Breakpoint mixin like this.</p>
    <i>scss</i>
    <pre><code>.johnny-utah {&#x000A;  @include breakpoint($high-tide) {&#x000A;    content: &#39;Whoa.&#39;;&#x000A;  }&#x000A;}</code></pre>

    <p>And that compiles to css like so:</p>
    <i>css</i>
    <pre><code>@media (min-width: 500px) {&#x000A;  .johnny-utah {&#x000A;    content: &#39;Whoa.&#39;;&#x000A;  }&#x000A;}</code></pre>

    <p>That just did two things that are really helpful. First, we reduced the media query down to the one value that really matters here, the min-width value. (You can also build complex queries and override the defaults. We&#8217;ll get to those.) And second, we gave that media query a meaningful name. And once we start calling media queries by name we can start managing them systematically. Whoa.</p>

    <p>Let&#8217;s add a few more.</p>
    <i>scss</i>
    <pre><code>// assume min-width (by default) if only a number&#x000A;$high-tide: 500px;&#x000A;// set min-width/max-width if both values are numbers&#x000A;$ex-presidents: 600px 800px;&#x000A;// if one value is a string, assume a feature/value pair&#x000A;$surfboard-width: max-width 1000px;&#x000A;// string tests together with commas, assume each item is a feature value pair&#x000A;$surfboard-height: min-height 1000px, orientation portrait;&#x000A;$no-parachute: 1500px;</code></pre>
    <!--
    .reagan {
      @include breakpoint($ex-presidents) {
        content: 'Whoa.';
      }
      @include breakpoint($surfboard-height) {
        content: 'show surfboard';
      }
    }
    .nixon {
      @include breakpoint($ex-presidents) {
        content: 'Whoa.';
      }
    }
    .johnson {
      @include breakpoint($ex-presidents) {
        content: 'Whoa.';
      }
    }
    .carter {
      @include breakpoint($ex-presidents) {
        content: 'Whoa.';
      }
    }
    -->
    <p>Let&#8217;s look at each in turn.</p>

    <ol>
    <li>
    <p><code>$high-tide</code> uses the defaults. Pass Breakpoint just a number and it assumes you want it to write a <strong>min-width</strong> query.</p>
    <i>scss</i>
    <pre><code> @media (min-width: 500px) {&#x000A;   .reagan {&#x000A;     content: &#39;High tide&#39;;&#x000A;   }&#x000A; }</code></pre>
    </li>

    <li>
    <p><code>$ex-presidents</code> is made up of two numbers. When Breakpoint sees that it will turn that into a <strong>min-width/max-width</strong> query.</p>
    <i>scss</i>
    <pre><code> @media (min-width: 600px) and (max-width: 800px) {&#x000A;   .nixon {&#x000A;     content: &#39;Ex-Presidents&#39;;&#x000A;   }&#x000A; }</code></pre>
    </li>

    <li>
    <p><code>$surfboard-width</code> is made up of a number and the name of a feature to test. Breakpoint will turn these into <strong>feature/value pairs</strong>.</p>
    <i>scss</i>
    <pre><code> @media (max-width: 1000px) {&#x000A;   .johnson {&#x000A;     content: &#39;Surfboard Width&#39;;&#x000A;   }&#x000A; }</code></pre>
    </li>

    <li>
    <p><code>$surfboard-height</code> has a feature/value pair, and adds a second non-numeric pair. Breakpoint can interpret <strong>text-based tests</strong> and can <strong>string together as many queries as you need</strong>.</p>
    <i>scss</i>
    <pre><code> @media (min-height: 1000px) and (orientation: portrait) {&#x000A;   .carter {&#x000A;     content: &#39;Surfboard Height, Portrait&#39;;&#x000A;   }&#x000A; }</code></pre>
    </li>
    </ol>

    <p>That&#8217;s the basics, but that&#8217;s not it by a long shot. Breakpoint also builds in special handling for <a href='tktktk'>device-pixel-ratio</a>, the ability to pass the <span>media query context</span> to your own custom mixins, and robust support for <a href='tktktk'>no query fallbacks</a>.</p>
  </div>
  <div id='get-started'>
    <h2 id='requirements'>Requirements</h2>

    <p>Breakpoint is a Compass extension, so make sure you have <a href='http://compass-style.org/install/'>Sass and Compass Installed</a> in order to use its awesomeness!</p>

    <p>Breakpoint also requires Sass 3.2. Breakpoint should install Sass 3.2 for you when you install it, but in case you are getting errors, open up your terminal and type the following in:</p>
    <i>command line</i>
    <pre><code>gem install sass</code></pre>

    <p>This will install Sass 3.2. If you are compiling with CodeKit, <a href='http://css-tricks.com/media-queries-sass-3-2-and-codekit/'>Chris Coyier has an awesome writeup</a> on how to get CodeKit playing nice with Sass 3.2, at least until it is updated to 3.2.</p>

    <h2 id='installation'>Installation</h2>
    <i>command line</i>
    <pre><code>gem install breakpoint</code></pre>

    <h4 id='if_creating_a_new_project'>If creating a new project</h4>
    <i>command line</i>
    <pre><code>compass create &lt;my_project&gt; -r breakpoint</code></pre>

    <h4 id='if_adding_to_existing_project_in_configrb'>If adding to existing project, in config.rb</h4>
    <i>config.rb</i>
    <pre><code>require &#39;breakpoint&#39;</code></pre>

    <h4 id='import_the_breakpoint_partial_at_the_top_of_your_working_file'>Import the breakpoint partial at the top of your working file</h4>
    <i>scss</i>
    <pre><code>@import &quot;breakpoint&quot;;</code></pre>

    <h2 id='setup'>Setup</h2>

    <h3 id='breakpoint_options'>Breakpoint Options</h3>

    <p>Breakpoint provides a few default options that you can change.</p>

    <ul>
    <li><code>$breakpoint-default-media</code> - Defaults to &#8216;all&#8217;. If you do not pass a media type into the breakpoint mixin, this is the media type that will be used.</li>

    <li><code>$breakpoint-default-feature</code> - Defaults to &#8216;min-width&#8217;. If you write a breakpoint with only a number, this is the feature that is used.</li>

    <li><code>$breakpoint-default-pair</code> - Defaults to &#8216;width&#8217;. If you write a breakpoint with two numbers but do not specify the feature, this is the feature that is used.</li>

    <li><code>$breakpoint-to-ems</code> - Defaults to &#8216;false&#8217;. If set to true, all pt/px/percent numbers will be converted to em units for better, more accessable media queries.</li>

    <li><code>$breakpoint-prefixes</code> - Defines the prefixes to write for prefixed media features. Defaults to <code>&#39;webkit&#39; &#39;moz&#39;</code>.</li>

    <li><code>$breakpoint-prefixed-queries</code> - Defines what queries should be prefixed. Defaults to <code>&#39;device-pixel-ratio&#39; &#39;min-device-pixel-ratio&#39; &#39;max-device-pixel-ratio&#39;</code>.</li>
    </ul>

    <p>PLEASE NOTE! If you&#8217;re a savvy reader, you&#8217;ll have noticed that we&#8217;ve not included <code>-o-device-pixel-ratio</code> as a prefixed option, and we would encourage you not to either. Opera has decided that <a href='http://dev.opera.com/articles/view/an-introduction-to-meta-viewport-and-viewport/#device-pixel-ratio'>their implementation should be written as a fraction, not as a decimal</a>, and we are currently not prepared to support automatic conversion of decimals to fractions. This leaves us in the position of either supporting only fractions for unprefixed <code>device-pixel-ratio</code>, which is counter to the way the two largest browsers support the query, or suggesting that if you want to use <code>-o-device-pixel-ratio</code> that you write a separate media query for it, and we&#8217;ve chosen the later.</p>
  </div>
  <div id='learn-more'>
    <h2 id='using_breakpoint'>Using Breakpoint</h2>

    <p>First, we set up our breakpoint variables.</p>
    <i>scss</i>
    <pre><code>// create $breakpoint variables like so&#x000A;// assume min-width (by default) if only a number&#x000A;$breakpoint-medium-width: 500px;&#x000A;$breakpoint-medium-width-em: 30em;&#x000A;// set min-width/max-width if both values are numbers&#x000A;$breakpoint-medium-not-wide: 500px 700px;&#x000A;// set min/max of feature if there are two numbers&#x000A;$breakpoint-medium-height: 300px 700px &#39;height&#39;;&#x000A;// if one value is a string, assume a feature/value pair&#x000A;$breakpoint-kind-of-wide: min-width 700px;&#x000A;$breakpoint-not-too-wide: max-width 700px;&#x000A;// for multidimensional lists, assume each item is a feature value pair&#x000A;$breakpoint-wide-portrait: max-width 700px, orientation portrait;&#x000A;// handle one-sided features (ie. monochrome)&#x000A;$breakpoint-wide-portrait-mono: max-width 700px, orientation portrait, monochrome;&#x000A;$breakpoint-mono: monochrome;&#x000A;$breakpoint-hi-rez: 2 device-pixel-ratio;</code></pre>

    <p>Call the mixin and pass one of your breakpoint variables. You can also call it with a la carte arguments.</p>
    <i>scss</i>
    <pre><code>.foo {&#x000A;  @include breakpoint($breakpoint-medium-width) {&#x000A;    content: &#39;medium widths&#39;;&#x000A;  }&#x000A;}&#x000A;.bar {&#x000A;  @include breakpoint($breakpoint-medium-width-em) {&#x000A;    content: &#39;medium widths measured in ems&#39;;&#x000A;  }&#x000A;}&#x000A;.baz {&#x000A;  @include breakpoint($breakpoint-medium-not-wide) {&#x000A;    content: &#39;medium, but not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;.tgif {&#x000A; @include breakpoint($breakpoint-medium-height) {&#x000A;   content: &#39;medium heights&#39;;&#x000A; }&#x000A;}&#x000A;.omg {&#x000A;  @include breakpoint($breakpoint-kind-of-wide) {&#x000A;    content: &#39;kind of wide&#39;;&#x000A;  }&#x000A;}&#x000A;.wtf {&#x000A;  @include breakpoint($breakpoint-not-too-wide) {&#x000A;    content: &#39;not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;.bbq {&#x000A;  @include breakpoint($breakpoint-wide-portrait) {&#x000A;    content: &#39;wide, portrait&#39;;&#x000A;  }&#x000A;}&#x000A;.zztop {&#x000A;  @include breakpoint($breakpoint-wide-portrait-mono) {&#x000A;    content: &#39;wide, portrait, monochrome&#39;;&#x000A;  }&#x000A;}&#x000A;.csny {&#x000A;  @include breakpoint($breakpoint-mono) {&#x000A;    content: &#39;monochrome&#39;;&#x000A;  }&#x000A;}&#x000A;.elp {&#x000A;  @include breakpoint($breakpoint-mono, print) {&#x000A;    content: &#39;monochrome, print&#39;;&#x000A;  }&#x000A;}&#x000A;.omgdpr {&#x000A; @include breakpoint($breakpoint-hi-rez) {&#x000A;  content: &#39;hi resolutions&#39;;&#x000A; }&#x000A;}&#x000A;&#x000A;// You can use breakpoint without variables too.&#x000A;.rhcp {&#x000A;  @include breakpoint(30em 40em) {&#x000A;    content: &#39;between 30 and 40ems&#39;;&#x000A;  }&#x000A;}</code></pre>

    <p>Example generated CSS</p>
    <i>css</i>
    <pre><code>@media (min-width: 500px) {&#x000A;  .foo {&#x000A;    content: &#39;medium widths&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 30em) {&#x000A;  .bar {&#x000A;    content: &#39;medium widths measured in ems&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 500px) and (max-width: 700px) {&#x000A;  .baz {&#x000A;    content: &#39;medium, but not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-height: 300px) and (max-height: 700px) {&#x000A;  .tgif {&#x000A;    content: &#39;medium heights&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 700px) {&#x000A;  .omg {&#x000A;    content: &#39;kind of wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 700px) {&#x000A;  .wtf {&#x000A;    content: &#39;not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 700px) and (orientation: portrait) {&#x000A;  .bbq {&#x000A;    content: &#39;wide, portrait&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 700px) and (orientation: portrait) and (monochrome) {&#x000A;  .zztop {&#x000A;    content: &#39;wide, portrait, monochrome&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (monochrome) {&#x000A;  .csny {&#x000A;    content: &#39;monochrome&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media print and (monochrome) {&#x000A;  .elp {&#x000A;    content: &#39;monochrome, print&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (-webkit-device-pixel-ratio: 2) {&#x000A;  .omgdpr {&#x000A;    content: &#39;hi resolutions&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (-moz-device-pixel-ratio: 2) {&#x000A;  .omgdpr {&#x000A;    content: &#39;hi resolutions&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 30em) and (max-width: 40em) {&#x000A;  .rhcp {&#x000A;    content: &#39;between 30 and 40ems&#39;;&#x000A;  }&#x000A;}</code></pre>

    <p>With <code>$breakpoint-to-ems: true;</code></p>
    <i>scss</i>
    <pre><code>@media (min-width: 31.25em) {&#x000A;  .foo {&#x000A;    content: &#39;medium widths&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 30em) {&#x000A;  .bar {&#x000A;    content: &#39;medium widths measured in ems&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 31.25em) and (max-width: 43.75em) {&#x000A;  .baz {&#x000A;    content: &#39;medium, but not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-height: 18.75em) and (max-height: 43.75em) {&#x000A;  .tgif {&#x000A;    content: &#39;medium heights&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 43.75em) {&#x000A;  .omg {&#x000A;    content: &#39;kind of wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 43.75em) {&#x000A;  .wtf {&#x000A;    content: &#39;not too wide&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 43.75em) and (orientation: portrait) {&#x000A;  .bbq {&#x000A;    content: &#39;wide, portrait&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (max-width: 43.75em) and (orientation: portrait) and (monochrome) {&#x000A;  .zztop {&#x000A;    content: &#39;wide, portrait, monochrome&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media print and (monochrome) {&#x000A;  .elp {&#x000A;    content: &#39;monochrome, print&#39;;&#x000A;  }&#x000A;}&#x000A;&#x000A;@media (min-width: 30em) and (max-width: 40em) {&#x000A;  .rhcp {&#x000A;    content: &#39;between 30 and 40ems&#39;;&#x000A;  }&#x000A;}</code></pre>

    <h2 id='media_query_context'>Media Query Context</h2>

    <p>Ever wanted to get the context of a media query from within a mixin or function? Well we have, so we&#8217;ve made that possible! Simply call the <code>breakpoint-get-context($feature)</code> function which will either return the contextual value for that feature (<code>min-width</code>, <code>max-width</code>, etc…) or <code>false</code>. You can then do all the awesomeness that you&#8217;ve ever wanted to do with that information.</p>

    <p>Caviats with Media Query context:</p>

    <ul>
    <li>If you have <code>$breakpoint-to-ems</code> set to true, you will get returns in base ems. You can run non-em based values through <code>breakpoint-to-base-em($value)</code> to convert them to base ems.</li>

    <li>If you are testing for a prefixed feature (such as <code>device-pixel-ratio</code>), you need to test for the prefixed value (<code>-webkit-device-pixel-ratio</code>, <code>min--moz-device-pixel-ratio</code>, etc…).</li>
    </ul>

    <h2 id='no_query_fallback'>No Query Fallback</h2>

    <p>Breakpoint provides a way to generate fallback CSS for if you would like the CSS to apply even if media queries aren&#8217;t available. There are three methidologies we discovered cover most, if not all, of the stylistic options a user could have in a system like this: a wrapping selector within the same stylesheet, a seperate stylesheet with no wrapping selector, and a seperate stylesheet with a wrapping selector. For both of these, bare in mind that Sass cannot create separate stylesheets automatically (<a href='https://github.com/nex3/sass/issues/241'>yet</a>), so you&#8217;re going to need to do it by hand, but the tools we&#8217;ve provided are very powerful, so we think you&#8217;ll like.</p>

    <p>There are now two new breakpoint flags to set that control no query support, <code>$breakpoint-no-queries</code> for specifying that only no query output should be output by Breakpoint and <code>$breakpoint-no-query-wrappers</code> for specifying that you want no query wrappers to be printed. Both of the new flags, <code>$breakpoint-no-queries</code> and <code>$breakpoint-no-query-wrappers</code> default to <code>false</code>, toggling them to <code>true</code> activates them. For the purposes of clarity in the following code samples, I&#8217;m including both flags even though the <code>false</code> flags are not explicitly needed. When passing in a wrapper, you must write the whole wrapper and may include a compound wrapper, <em>i.e.</em> <code>&#39;.no-mqs&#39;</code> or <code>&#39;#print&#39;</code> or <code>&#39;.high-dpi.no-mqs&#39;</code>. Variables may also be passed in, but they still require the whole wrapper.</p>

    <h3 id='wrapping_selector_same_stylesheet'>Wrapping Selector, Same Stylesheet</h3>
    <i>scss</i>
    <pre><code>// style.scss&#x000A;$breakpoint-no-queries: false;&#x000A;$breakpoint-no-query-wrappers: true;&#x000A;&#x000A;#foo {&#x000A;  background: red;&#x000A;  @include breakpoint(567px, $no-query: &#39;.no-mqs&#39;) {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>
    <i>css</i>
    <pre><code>/* style.css */&#x000A;#foo {&#x000A;  background: red;&#x000A;}&#x000A;&#x000A;.no-mqs #foo {&#x000A;  background: green;&#x000A;}&#x000A;&#x000A;@media (min-width: 567px) {&#x000A;  #foo {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>

    <h3 id='no_wrapping_selector_separate_stylesheet'>No Wrapping Selector, Separate Stylesheet</h3>
    <i>scss</i>
    <pre><code>// _layout.scss&#x000A;#foo {&#x000A;  background: red;&#x000A;  @include breakpoint(567px, $no-query: true) {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>
    <i>scss</i>
    <pre><code>// style.scss&#x000A;$breakpoint-no-queries: false;&#x000A;$breakpoint-no-query-wrappers: false;&#x000A;&#x000A;@import &#39;layout&#39;;</code></pre>
    <i>scss</i>
    <pre><code>// no-mq.scss&#x000A;$breakpoint-no-queries: true;&#x000A;$breakpoint-no-query-wrappers: false;&#x000A;&#x000A;@import &#39;layout&#39;;</code></pre>
    <i>css</i>
    <pre><code>/* style.css */&#x000A;#foo {&#x000A;  background: red;&#x000A;}&#x000A;&#x000A;@media (min-width: 567px) {&#x000A;  #foo {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>
    <i>css</i>
    <pre><code>/* no-mq.css */&#x000A;#foo {&#x000A;  background: red;&#x000A;  background: green;&#x000A;}</code></pre>

    <h3 id='wrapping_selector_separate_stylesheet'>Wrapping Selector, Separate Stylesheet</h3>
    <i>scss</i>
    <pre><code>// _layout.scss&#x000A;#foo {&#x000A;  background: red;&#x000A;  @include breakpoint(567px, $no-query: &#39;.no-mq&#39;) {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>
    <i>scss</i>
    <pre><code>// style.scss&#x000A;$breakpoint-no-queries: false;&#x000A;$breakpoint-no-query-wrappers: false;&#x000A;&#x000A;@import &#39;layout&#39;;</code></pre>
    <i>scss</i>
    <pre><code>// no-mq.scss&#x000A;$breakpoint-no-queries: true;&#x000A;$breakpoint-no-query-wrappers: true;&#x000A;&#x000A;@import &#39;layout&#39;;</code></pre>
    <i>css</i>
    <pre><code>/* style.css */&#x000A;#foo {&#x000A;  background: red;&#x000A;}&#x000A;&#x000A;@media (min-width: 567px) {&#x000A;  #foo {&#x000A;    background: green;&#x000A;  }&#x000A;}</code></pre>
    <i>css</i>
    <pre><code>/* no-mq.css */&#x000A;.no-mq #foo {&#x000A;  background: green;&#x000A;}</code></pre>

    <h2 id='license'>License</h2>

    <p>Licensed under MIT/GPL.</p>

    <p>GPL2 license: http://www.gnu.org/licenses/gpl-2.0.html</p>

    <p>MIT license: http://www.opensource.org/licenses/mit-license.php</p>
  </div>
</div>
      </div>
      <footer></footer>
    </div>

    <!-- Grab jQuery #{@jQuery} from Google's CDN with a protocol relative URL -->
    <script src='js/libs/jquery-1.6.min.js'></script>
  </body>
</html>