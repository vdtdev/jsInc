/* 
 * Copyright (c) 2014, vdtdev <vdtdev@gmail.com>
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * * Redistributions of source code must retain the above copyright notice, this
 *   list of conditions and the following disclaimer.
 * * Redistributions in binary form must reproduce the above copyright notice,
 *   this list of conditions and the following disclaimer in the documentation
 *   and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
 * AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 * ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
 * LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
 * CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 * SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
 * INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
 * CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
 * ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 * POSSIBILITY OF SUCH DAMAGE.
 */

/**
 * JavaScript file includer [jsInc] <br/><br/>
 * 
 * Specify JavaScript files to load dynamically after the document is loaded
 * <br/>
 * 
 * <b>Example</b>
 * <pre>
 * &lt;head&gt;
 * &lt;script type="text/javascript" src="jsinc.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript" src="libs.js"&gt;&lt;/script&gt;
 * &lt;/head&gt;
 * </pre>
 * 
 * <b>libs.js:</b>
 * <pre>
 * jsInc.load(['js/libs/jquery/jquery.min.js','js/libs/tweenjs.js']);
 * jsInc.preload();
 * </pre>
 * jsInc.status:
 * <ul>
 * <li>0 = Not called</li>
 * <li>1 = load called</li>
 * <li>2 = preload called</li>
 * </ul>
 * 
 * @author Wade Harkins <vdtdev@gmail.com>
 * @type type jsInc 
 * @example jsInc.load(['js/game.js']).preload();
 */
var jsInc = {"jsfiles": new Array(),
    "States": {"Idle": 0, "Fired": 1, "Preloaded": 2},
    "status": 0,
    /**
     * Pass a collection of JavaScript file URLs to be loaded
     * @param {Array} libs Array of JavaScript file URLs
     * @returns {jsInc} jsInc
     */
    "load": function(libs) {
        for (i in libs) {
            this.jsfiles.push(libs[i]);
        }
        this.status = this.States.Fired;
        return this;
    },
    "preload": function() {
        for (e in this.jsfiles) {
            var src = this.jsfiles[e];
            var tmp = document.createElement("script");
            tmp.setAttribute("type", "text/javascript");
            tmp.setAttribute("src", src);
            document.getElementsByTagName("head")[0].appendChild(tmp);
        }
        this.status = jsInc.States.Preloaded;
    }};

/**
 * CSS file includer [jsInc] <br/><br/>
 * 
 * Specify CSS files to load dynamically after the document is loaded
 * <br/>
 * 
 * <b>Example</b>
 * <pre>
 * &lt;head&gt;
 * &lt;script type="text/javascript" src="jsinc.js"&gt;&lt;/script&gt;
 * &lt;script type="text/javascript" src="libs.js"&gt;&lt;/script&gt;
 * &lt;/head&gt;
 * </pre>
 * 
 * <b>libs.js:</b>
 * <pre>
 * cssInc.load(['themeroller.css']);
 * jsInc.preload();
 * </pre>
 * 
 * To specify media target:
 * <pre>
 * cssInc.load([{"href":"mytheme.css","media":"all"}]).preload();
 * </preload>
 * cssInc.status:
 * <ul>
 * <li>0 = Not called</li>
 * <li>1 = load called</li>
 * <li>2 = preload called</li>
 * </ul>
 * 
 * @author Wade Harkins <vdtdev@gmail.com>
 * @type type cssInc 
 * @example cssInc.load(['css/theme.css']).preload();
 */
var cssInc = {"cssFiles": new Array(),
    "status": 0,
    "load": function(sheets) {
        for (i in sheets) {
            this.cssFiles.push(sheets[i]);
        }
        this.status = jsInc.States.Fired;
        return this;
    },
    "preload": function() {
        for(e in this.cssFiles)
        {
            var src=this.cssFiles[e];
            var media=null;
            if(src.hasOwnProperty("media")){
                media=src.media;
                src=src.href;
            }
            var tmp=document.createElement("link");
            tmp.setAttribute("href",src);
            tmp.setAttribute("rel","stylesheet");
            if(media!==null){
                tmp.setAttribute("media",media);
            }
            document.getElementsByTagName("head")[0].appendChild(tmp);
        }
        this.status=jsInc.States.Preloaded;
    }
};