webpackHotUpdatemy_dash_component("main",{

/***/ "./node_modules/cross-fetch/dist/browser-ponyfill.js":
/*!***********************************************************!*\
  !*** ./node_modules/cross-fetch/dist/browser-ponyfill.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var __self__ = (function (root) {
function F() {
this.fetch = false;
this.DOMException = root.DOMException
}
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

var irrelevant = (function (exports) {
  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob:
      'FileReader' in self &&
      'Blob' in self &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = self.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.onabort = function() {
        reject(new exports.DOMException('Aborted', 'AbortError'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!self.fetch) {
    self.fetch = fetch;
    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

}({}));
})(__self__);
delete __self__.fetch.polyfill
exports = __self__.fetch // To enable: import fetch from 'cross-fetch'
exports.default = __self__.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = __self__.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = __self__.Headers
exports.Request = __self__.Request
exports.Response = __self__.Response
module.exports = exports


/***/ }),

/***/ "./node_modules/prismic-javascript/esm/prismic-javascript.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/prismic-javascript/esm/prismic-javascript.mjs ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var cross_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cross-fetch */ "./node_modules/cross-fetch/dist/browser-ponyfill.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

var Variation = /** @class */ (function () {
    function Variation(data) {
        this.data = {};
        this.data = data;
    }
    Variation.prototype.id = function () {
        return this.data.id;
    };
    Variation.prototype.ref = function () {
        return this.data.ref;
    };
    Variation.prototype.label = function () {
        return this.data.label;
    };
    return Variation;
}());
var Experiment = /** @class */ (function () {
    function Experiment(data) {
        this.data = {};
        this.data = data;
        this.variations = (data.variations || []).map(function (v) {
            return new Variation(v);
        });
    }
    Experiment.prototype.id = function () {
        return this.data.id;
    };
    Experiment.prototype.googleId = function () {
        return this.data.googleId;
    };
    Experiment.prototype.name = function () {
        return this.data.name;
    };
    return Experiment;
}());
var Experiments = /** @class */ (function () {
    function Experiments(data) {
        if (data) {
            this.drafts = (data.drafts || []).map(function (exp) {
                return new Experiment(exp);
            });
            this.running = (data.running || []).map(function (exp) {
                return new Experiment(exp);
            });
        }
    }
    Experiments.prototype.current = function () {
        if (this.running.length > 0) {
            return this.running[0];
        }
        else {
            return null;
        }
    };
    Experiments.prototype.refFromCookie = function (cookie) {
        if (!cookie || cookie.trim() === '')
            return null;
        var splitted = cookie.trim().split(' ');
        if (splitted.length < 2)
            return null;
        var expId = splitted[0];
        var varIndex = parseInt(splitted[1], 10);
        var exp = this.running.filter(function (exp) {
            return exp.googleId() === expId && exp.variations.length > varIndex;
        })[0];
        return exp ? exp.variations[varIndex].ref() : null;
    };
    return Experiments;
}());

var LazySearchForm = /** @class */ (function () {
    function LazySearchForm(id, api) {
        this.id = id;
        this.api = api;
        this.fields = {};
    }
    LazySearchForm.prototype.set = function (key, value) {
        this.fields[key] = value;
        return this;
    };
    LazySearchForm.prototype.ref = function (ref) {
        return this.set('ref', ref);
    };
    LazySearchForm.prototype.query = function (query) {
        return this.set('q', query);
    };
    LazySearchForm.prototype.pageSize = function (size) {
        return this.set('pageSize', size);
    };
    LazySearchForm.prototype.fetch = function (fields) {
        console.warn('Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.');
        return this.set('fetch', fields);
    };
    LazySearchForm.prototype.fetchLinks = function (fields) {
        console.warn('Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.');
        return this.set('fetchLinks', fields);
    };
    LazySearchForm.prototype.graphQuery = function (query) {
        return this.set('graphQuery', query);
    };
    LazySearchForm.prototype.lang = function (langCode) {
        return this.set('lang', langCode);
    };
    LazySearchForm.prototype.page = function (p) {
        return this.set('page', p);
    };
    LazySearchForm.prototype.after = function (documentId) {
        return this.set('after', documentId);
    };
    LazySearchForm.prototype.orderings = function (orderings) {
        return this.set('orderings', orderings);
    };
    LazySearchForm.prototype.url = function () {
        var _this = this;
        return this.api.get().then(function (api) {
            return LazySearchForm.toSearchForm(_this, api).url();
        });
    };
    LazySearchForm.prototype.submit = function (cb) {
        var _this = this;
        return this.api.get().then(function (api) {
            return LazySearchForm.toSearchForm(_this, api).submit(cb);
        });
    };
    LazySearchForm.toSearchForm = function (lazyForm, api) {
        var form = api.form(lazyForm.id);
        if (form) {
            return Object.keys(lazyForm.fields).reduce(function (form, fieldKey) {
                var fieldValue = lazyForm.fields[fieldKey];
                if (fieldKey === 'q') {
                    return form.query(fieldValue);
                }
                else if (fieldKey === 'pageSize') {
                    return form.pageSize(fieldValue);
                }
                else if (fieldKey === 'fetch') {
                    return form.fetch(fieldValue);
                }
                else if (fieldKey === 'fetchLinks') {
                    return form.fetchLinks(fieldValue);
                }
                else if (fieldKey === 'graphQuery') {
                    return form.graphQuery(fieldValue);
                }
                else if (fieldKey === 'lang') {
                    return form.lang(fieldValue);
                }
                else if (fieldKey === 'page') {
                    return form.page(fieldValue);
                }
                else if (fieldKey === 'after') {
                    return form.after(fieldValue);
                }
                else if (fieldKey === 'orderings') {
                    return form.orderings(fieldValue);
                }
                else {
                    return form.set(fieldKey, fieldValue);
                }
            }, form);
        }
        else {
            throw new Error("Unable to access to form " + lazyForm.id);
        }
    };
    return LazySearchForm;
}());
var SearchForm = /** @class */ (function () {
    function SearchForm(form, httpClient) {
        this.httpClient = httpClient;
        this.form = form;
        this.data = {};
        for (var field in form.fields) {
            if (form.fields[field]['default']) {
                this.data[field] = [form.fields[field]['default']];
            }
        }
    }
    SearchForm.prototype.set = function (field, value) {
        var fieldDesc = this.form.fields[field];
        if (!fieldDesc)
            throw new Error('Unknown field ' + field);
        var checkedValue = value === '' || value === undefined ? null : value;
        var values = this.data[field] || [];
        if (fieldDesc.multiple) {
            values = checkedValue ? values.concat([checkedValue]) : values;
        }
        else {
            values = checkedValue ? [checkedValue] : values;
        }
        this.data[field] = values;
        return this;
    };
    /**
     * Sets a ref to query on for this SearchForm. This is a mandatory
     * method to call before calling submit(), and api.form('everything').submit()
     * will not work.
     */
    SearchForm.prototype.ref = function (ref) {
        return this.set('ref', ref);
    };
    /**
     * Sets a predicate-based query for this SearchForm. This is where you
     * paste what you compose in your prismic.io API browser.
     */
    SearchForm.prototype.query = function (query) {
        if (typeof query === 'string') {
            return this.query([query]);
        }
        else if (Array.isArray(query)) {
            return this.set('q', "[" + query.join('') + "]");
        }
        else {
            throw new Error("Invalid query : " + query);
        }
    };
    /**
     * Sets a page size to query for this SearchForm. This is an optional method.
     *
     * @param {number} size - The page size
     * @returns {SearchForm} - The SearchForm itself
     */
    SearchForm.prototype.pageSize = function (size) {
        return this.set('pageSize', size);
    };
    /**
     * Restrict the results document to the specified fields
     */
    SearchForm.prototype.fetch = function (fields) {
        console.warn('Warning: Using Fetch is deprecated. Use the property `graphQuery` instead.');
        var strFields = Array.isArray(fields) ? fields.join(',') : fields;
        return this.set('fetch', strFields);
    };
    /**
     * Include the requested fields in the DocumentLink instances in the result
     */
    SearchForm.prototype.fetchLinks = function (fields) {
        console.warn('Warning: Using FetchLinks is deprecated. Use the property `graphQuery` instead.');
        var strFields = Array.isArray(fields) ? fields.join(',') : fields;
        return this.set('fetchLinks', strFields);
    };
    /**
     * Sets the graphquery to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.graphQuery = function (query) {
        return this.set('graphQuery', query);
    };
    /**
     * Sets the language to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.lang = function (langCode) {
        return this.set('lang', langCode);
    };
    /**
     * Sets the page number to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.page = function (p) {
        return this.set('page', p);
    };
    /**
     * Remove all the documents except for those after the specified document in the list. This is an optional method.
     */
    SearchForm.prototype.after = function (documentId) {
        return this.set('after', documentId);
    };
    /**
     * Sets the orderings to query for this SearchForm. This is an optional method.
     */
    SearchForm.prototype.orderings = function (orderings) {
        if (!orderings) {
            return this;
        }
        else {
            return this.set('orderings', "[" + orderings.join(',') + "]");
        }
    };
    /**
     * Build the URL to query
     */
    SearchForm.prototype.url = function () {
        var url = this.form.action;
        if (this.data) {
            var sep = (url.indexOf('?') > -1 ? '&' : '?');
            for (var key in this.data) {
                if (Object.prototype.hasOwnProperty.call(this.data, key)) {
                    var values = this.data[key];
                    if (values) {
                        for (var i = 0; i < values.length; i++) {
                            url += sep + key + '=' + encodeURIComponent(values[i]);
                            sep = '&';
                        }
                    }
                }
            }
        }
        return url;
    };
    /**
     * Submits the query, and calls the callback function.
     */
    SearchForm.prototype.submit = function (cb) {
        return this.httpClient.cachedRequest(this.url()).then(function (response) {
            cb && cb(null, response);
            return response;
        }).catch(function (error) {
            cb && cb(error);
            throw error;
        });
    };
    return SearchForm;
}());

var OPERATOR = {
    at: 'at',
    not: 'not',
    missing: 'missing',
    has: 'has',
    any: 'any',
    in: 'in',
    fulltext: 'fulltext',
    similar: 'similar',
    numberGt: 'number.gt',
    numberLt: 'number.lt',
    numberInRange: 'number.inRange',
    dateBefore: 'date.before',
    dateAfter: 'date.after',
    dateBetween: 'date.between',
    dateDayOfMonth: 'date.day-of-month',
    dateDayOfMonthAfter: 'date.day-of-month-after',
    dateDayOfMonthBefore: 'date.day-of-month-before',
    dateDayOfWeek: 'date.day-of-week',
    dateDayOfWeekAfter: 'date.day-of-week-after',
    dateDayOfWeekBefore: 'date.day-of-week-before',
    dateMonth: 'date.month',
    dateMonthBefore: 'date.month-before',
    dateMonthAfter: 'date.month-after',
    dateYear: 'date.year',
    dateHour: 'date.hour',
    dateHourBefore: 'date.hour-before',
    dateHourAfter: 'date.hour-after',
    GeopointNear: 'geopoint.near',
};
function encode(value) {
    if (typeof value === 'string') {
        return "\"" + value + "\"";
    }
    else if (typeof value === 'number') {
        return value.toString();
    }
    else if (value instanceof Date) {
        return value.getTime().toString();
    }
    else if (Array.isArray(value)) {
        return "[" + value.map(function (v) { return encode(v); }).join(',') + "]";
    }
    else if (typeof value === "boolean") {
        return value.toString();
    }
    else {
        throw new Error("Unable to encode " + value + " of type " + typeof value);
    }
}
var geopoint = {
    near: function (fragment, latitude, longitude, radius) {
        return "[" + OPERATOR.GeopointNear + "(" + fragment + ", " + latitude + ", " + longitude + ", " + radius + ")]";
    },
};
var date = {
    before: function (fragment, before) {
        return "[" + OPERATOR.dateBefore + "(" + fragment + ", " + encode(before) + ")]";
    },
    after: function (fragment, after) {
        return "[" + OPERATOR.dateAfter + "(" + fragment + ", " + encode(after) + ")]";
    },
    between: function (fragment, before, after) {
        return "[" + OPERATOR.dateBetween + "(" + fragment + ", " + encode(before) + ", " + encode(after) + ")]";
    },
    dayOfMonth: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonth + "(" + fragment + ", " + day + ")]";
    },
    dayOfMonthAfter: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthAfter + "(" + fragment + ", " + day + ")]";
    },
    dayOfMonthBefore: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfMonthBefore + "(" + fragment + ", " + day + ")]";
    },
    dayOfWeek: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeek + "(" + fragment + ", " + encode(day) + ")]";
    },
    dayOfWeekAfter: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekAfter + "(" + fragment + ", " + encode(day) + ")]";
    },
    dayOfWeekBefore: function (fragment, day) {
        return "[" + OPERATOR.dateDayOfWeekBefore + "(" + fragment + ", " + encode(day) + ")]";
    },
    month: function (fragment, month) {
        return "[" + OPERATOR.dateMonth + "(" + fragment + ", " + encode(month) + ")]";
    },
    monthBefore: function (fragment, month) {
        return "[" + OPERATOR.dateMonthBefore + "(" + fragment + ", " + encode(month) + ")]";
    },
    monthAfter: function (fragment, month) {
        return "[" + OPERATOR.dateMonthAfter + "(" + fragment + ", " + encode(month) + ")]";
    },
    year: function (fragment, year) {
        return "[" + OPERATOR.dateYear + "(" + fragment + ", " + year + ")]";
    },
    hour: function (fragment, hour) {
        return "[" + OPERATOR.dateHour + "(" + fragment + ", " + hour + ")]";
    },
    hourBefore: function (fragment, hour) {
        return "[" + OPERATOR.dateHourBefore + "(" + fragment + ", " + hour + ")]";
    },
    hourAfter: function (fragment, hour) {
        return "[" + OPERATOR.dateHourAfter + "(" + fragment + ", " + hour + ")]";
    },
};
var number = {
    gt: function (fragment, value) {
        return "[" + OPERATOR.numberGt + "(" + fragment + ", " + value + ")]";
    },
    lt: function (fragment, value) {
        return "[" + OPERATOR.numberLt + "(" + fragment + ", " + value + ")]";
    },
    inRange: function (fragment, before, after) {
        return "[" + OPERATOR.numberInRange + "(" + fragment + ", " + before + ", " + after + ")]";
    },
};
var Predicates = {
    at: function (fragment, value) {
        return "[" + OPERATOR.at + "(" + fragment + ", " + encode(value) + ")]";
    },
    not: function (fragment, value) {
        return "[" + OPERATOR.not + "(" + fragment + ", " + encode(value) + ")]";
    },
    missing: function (fragment) {
        return "[" + OPERATOR.missing + "(" + fragment + ")]";
    },
    has: function (fragment) {
        return "[" + OPERATOR.has + "(" + fragment + ")]";
    },
    any: function (fragment, values) {
        return "[" + OPERATOR.any + "(" + fragment + ", " + encode(values) + ")]";
    },
    in: function (fragment, values) {
        return "[" + OPERATOR.in + "(" + fragment + ", " + encode(values) + ")]";
    },
    fulltext: function (fragment, value) {
        return "[" + OPERATOR.fulltext + "(" + fragment + ", " + encode(value) + ")]";
    },
    similar: function (documentId, maxResults) {
        return "[" + OPERATOR.similar + "(\"" + documentId + "\", " + maxResults + ")]";
    },
    date: date,
    dateBefore: date.before,
    dateAfter: date.after,
    dateBetween: date.between,
    dayOfMonth: date.dayOfMonth,
    dayOfMonthAfter: date.dayOfMonthAfter,
    dayOfMonthBefore: date.dayOfMonthBefore,
    dayOfWeek: date.dayOfWeek,
    dayOfWeekAfter: date.dayOfWeekAfter,
    dayOfWeekBefore: date.dayOfWeekBefore,
    month: date.month,
    monthBefore: date.monthBefore,
    monthAfter: date.monthAfter,
    year: date.year,
    hour: date.hour,
    hourBefore: date.hourBefore,
    hourAfter: date.hourAfter,
    number: number,
    gt: number.gt,
    lt: number.lt,
    inRange: number.inRange,
    near: geopoint.near,
    geopoint: geopoint,
};

/* eslint-disable */
// Some portions of code from https://github.com/jshttp/cookie
var decode = decodeURIComponent;
function tryDecode(str, decode) {
    try {
        return decode(str);
    }
    catch (e) {
        return str;
    }
}
function parse(str, options) {
    if (typeof str !== 'string') {
        throw new TypeError('argument str must be a string');
    }
    var obj = {};
    var opt = options || {};
    var pairs = str.split(/; */);
    var dec = opt.decode || decode;
    pairs.forEach(function (pair) {
        var eq_idx = pair.indexOf('=');
        // skip things that don't look like key=value
        if (eq_idx < 0) {
            return;
        }
        var key = pair.substr(0, eq_idx).trim();
        var val = pair.substr(++eq_idx, pair.length).trim();
        // quoted values
        if ('"' == val[0]) {
            val = val.slice(1, -1);
        }
        // only assign once
        if (undefined == obj[key]) {
            obj[key] = tryDecode(val, dec);
        }
    });
    return obj;
}
var Cookies = { parse: parse };

function createPreviewResolver(token, documentId, getDocByID) {
    var resolve = function (linkResolver, defaultUrl, cb) {
        if (documentId && getDocByID) {
            return getDocByID(documentId, { ref: token }).then(function (document) {
                if (!document) {
                    cb && cb(null, defaultUrl);
                    return defaultUrl;
                }
                else {
                    var url = (linkResolver && linkResolver(document)) || document.url || defaultUrl;
                    cb && cb(null, url);
                    return url;
                }
            });
        }
        else {
            return Promise.resolve(defaultUrl);
        }
    };
    return { token: token, documentId: documentId, resolve: resolve };
}

var PREVIEW_COOKIE = 'io.prismic.preview';
var EXPERIMENT_COOKIE = 'io.prismic.experiment';
var ResolvedApi = /** @class */ (function () {
    function ResolvedApi(data, httpClient, options) {
        this.data = data;
        this.masterRef = data.refs.filter(function (ref) { return ref.isMasterRef; })[0];
        this.experiments = new Experiments(data.experiments);
        this.bookmarks = data.bookmarks;
        this.httpClient = httpClient;
        this.options = options;
        this.refs = data.refs;
        this.tags = data.tags;
        this.types = data.types;
        this.languages = data.languages;
    }
    /**
     * Returns a useable form from its id, as described in the RESTful description of the API.
     * For instance: api.form("everything") works on every repository (as "everything" exists by default)
     * You can then chain the calls: api.form("everything").query('[[:d = at(document.id, "UkL0gMuvzYUANCpf")]]').ref(ref).submit()
     */
    ResolvedApi.prototype.form = function (formId) {
        var form = this.data.forms[formId];
        if (form) {
            return new SearchForm(form, this.httpClient);
        }
        return null;
    };
    ResolvedApi.prototype.everything = function () {
        var f = this.form('everything');
        if (!f)
            throw new Error('Missing everything form');
        return f;
    };
    /**
     * The ID of the master ref on this prismic.io API.
     * Do not use like this: searchForm.ref(api.master()).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    ResolvedApi.prototype.master = function () {
        return this.masterRef.ref;
    };
    /**
     * Returns the ref ID for a given ref's label.
     * Do not use like this: searchForm.ref(api.ref("Future release label")).
     * Instead, set your ref once in a variable, and call it when you need it; this will allow to change the ref you're viewing easily for your entire page.
     */
    ResolvedApi.prototype.ref = function (label) {
        var ref = this.data.refs.filter(function (ref) { return ref.label === label; })[0];
        return ref ? ref.ref : null;
    };
    ResolvedApi.prototype.currentExperiment = function () {
        return this.experiments.current();
    };
    /**
     * Query the repository
     */
    ResolvedApi.prototype.query = function (q, optionsOrCallback, cb) {
        if (cb === void 0) { cb = function () { }; }
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb }, options = _a.options, callback = _a.callback;
        var form = this.everything();
        for (var key in options) {
            form = form.set(key, options[key]);
        }
        if (!options.ref) {
            // Look in cookies if we have a ref (preview or experiment)
            var cookieString = '';
            if (this.options.req) { // NodeJS
                cookieString = this.options.req.headers['cookie'] || '';
            }
            else if (typeof window !== 'undefined' && window.document) { // Browser
                cookieString = window.document.cookie || '';
            }
            var cookies = Cookies.parse(cookieString);
            var previewRef = cookies[PREVIEW_COOKIE];
            var experimentRef = this.experiments.refFromCookie(cookies[EXPERIMENT_COOKIE]);
            form = form.ref(previewRef || experimentRef || this.masterRef.ref);
        }
        if (q) {
            form.query(q);
        }
        return form.submit(callback);
    };
    /**
     * Retrieve the document returned by the given query
     * @param {string|array|Predicate} the query
     * @param {object} additional parameters. In NodeJS, pass the request as 'req'.
     * @param {function} callback(err, doc)
     */
    ResolvedApi.prototype.queryFirst = function (q, optionsOrCallback, cb) {
        var _a = typeof optionsOrCallback === 'function'
            ? { options: {}, callback: optionsOrCallback }
            : { options: optionsOrCallback || {}, callback: cb || (function () { }) }, options = _a.options, callback = _a.callback;
        options.page = 1;
        options.pageSize = 1;
        return this.query(q, options).then(function (response) {
            var document = response && response.results && response.results[0];
            callback(null, document);
            return document;
        }).catch(function (error) {
            callback(error);
            throw error;
        });
    };
    /**
     * Retrieve the document with the given id
     */
    ResolvedApi.prototype.getByID = function (id, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options.lang)
            options.lang = '*';
        return this.queryFirst(Predicates.at('document.id', id), options, cb);
    };
    /**
     * Retrieve multiple documents from an array of id
     */
    ResolvedApi.prototype.getByIDs = function (ids, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (!options.lang)
            options.lang = '*';
        return this.query(Predicates.in('document.id', ids), options, cb);
    };
    /**
     * Retrieve the document with the given uid
     */
    ResolvedApi.prototype.getByUID = function (type, uid, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        if (options.lang === '*')
            throw new Error("FORBIDDEN. You can't use getByUID with *, use the predicates instead.");
        if (!options.page)
            options.page = 1;
        return this.queryFirst(Predicates.at("my." + type + ".uid", uid), options, cb);
    };
    /**
     * Retrieve the singleton document with the given type
     */
    ResolvedApi.prototype.getSingle = function (type, maybeOptions, cb) {
        var options = maybeOptions ? __assign({}, maybeOptions) : {};
        return this.queryFirst(Predicates.at('document.type', type), options, cb);
    };
    /**
     * Retrieve the document with the given bookmark
     */
    ResolvedApi.prototype.getBookmark = function (bookmark, maybeOptions, cb) {
        var id = this.data.bookmarks[bookmark];
        if (id) {
            return this.getByID(id, maybeOptions, cb);
        }
        else {
            return Promise.reject('Error retrieving bookmarked id');
        }
    };
    ResolvedApi.prototype.getPreviewResolver = function (token, documentId) {
        return createPreviewResolver(token, documentId, this.getByID.bind(this));
    };
    ResolvedApi.prototype.previewSession = function (token, linkResolver, defaultUrl, cb) {
        var _this = this;
        console.warn('previewSession function is deprecated in favor of getPreviewResolver function.');
        return new Promise(function (resolve, reject) {
            _this.httpClient.request(token, function (e, result) {
                if (e) {
                    cb && cb(e);
                    reject(e);
                }
                else if (result) {
                    if (!result.mainDocument) {
                        cb && cb(null, defaultUrl);
                        resolve(defaultUrl);
                    }
                    else {
                        return _this.getByID(result.mainDocument, { ref: token }).then(function (document) {
                            if (!document) {
                                cb && cb(null, defaultUrl);
                                resolve(defaultUrl);
                            }
                            else {
                                var url = (linkResolver && linkResolver(document)) || document.url || defaultUrl;
                                cb && cb(null, url);
                                resolve(url);
                            }
                        }).catch(reject);
                    }
                }
            });
        });
    };
    return ResolvedApi;
}());

/* eslint-disable */
/**
* A doubly linked list-based Least Recently Used (LRU) cache. Will keep most
* recently used items while discarding least recently used items when its limit
* is reached.
*
* Licensed under MIT. Copyright (c) 2010 Rasmus Andersson <http://hunch.se/>
* Typescript-ified by Oleksandr Nikitin <https://tvori.info>
*
* Illustration of the design:
*
*       entry             entry             entry             entry
*       ______            ______            ______            ______
*      | head |.newer => |      |.newer => |      |.newer => | tail |
*      |  A   |          |  B   |          |  C   |          |  D   |
*      |______| <= older.|______| <= older.|______| <= older.|______|
*
*  removed  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  <--  added
*/
function MakeLRUCache(limit) {
    return new LRUCache(limit);
}
function LRUCache(limit) {
    // Current size of the cache. (Read-only).
    this.size = 0;
    // Maximum number of items this cache can hold.
    this.limit = limit;
    this._keymap = {};
}
/**
 * Put <value> into the cache associated with <key>. Returns the entry which was
 * removed to make room for the new entry. Otherwise undefined is returned
 * (i.e. if there was enough room already).
 */
LRUCache.prototype.put = function (key, value) {
    var entry = { key: key, value: value };
    // Note: No protection agains replacing, and thus orphan entries. By design.
    this._keymap[key] = entry;
    if (this.tail) {
        // link previous tail to the new tail (entry)
        this.tail.newer = entry;
        entry.older = this.tail;
    }
    else {
        // we're first in -- yay
        this.head = entry;
    }
    // add new entry to the end of the linked list -- it's now the freshest entry.
    this.tail = entry;
    if (this.size === this.limit) {
        // we hit the limit -- remove the head
        return this.shift();
    }
    else {
        // increase the size counter
        this.size++;
    }
};
/**
 * Purge the least recently used (oldest) entry from the cache. Returns the
 * removed entry or undefined if the cache was empty.
 *
 * If you need to perform any form of finalization of purged items, this is a
 * good place to do it. Simply override/replace this function:
 *
 *   var c = new LRUCache(123);
 *   c.shift = function() {
 *     var entry = LRUCache.prototype.shift.call(this);
 *     doSomethingWith(entry);
 *     return entry;
 *   }
 */
LRUCache.prototype.shift = function () {
    // todo: handle special case when limit == 1
    var entry = this.head;
    if (entry) {
        if (this.head.newer) {
            this.head = this.head.newer;
            this.head.older = undefined;
        }
        else {
            this.head = undefined;
        }
        // Remove last strong reference to <entry> and remove links from the purged
        // entry being returned:
        entry.newer = entry.older = undefined;
        // delete is slow, but we need to do this to avoid uncontrollable growth:
        delete this._keymap[entry.key];
    }
    console.log('purging ', entry.key);
    return entry;
};
/**
 * Get and register recent use of <key>. Returns the value associated with <key>
 * or undefined if not in cache.
 */
LRUCache.prototype.get = function (key, returnEntry) {
    // First, find our cache entry
    var entry = this._keymap[key];
    if (entry === undefined)
        return; // Not cached. Sorry.
    // As <key> was found in the cache, register it as being requested recently
    if (entry === this.tail) {
        // Already the most recently used entry, so no need to update the list
        return returnEntry ? entry : entry.value;
    }
    // HEAD--------------TAIL
    //   <.older   .newer>
    //  <--- add direction --
    //   A  B  C  <D>  E
    if (entry.newer) {
        if (entry === this.head)
            this.head = entry.newer;
        entry.newer.older = entry.older; // C <-- E.
    }
    if (entry.older)
        entry.older.newer = entry.newer; // C. --> E
    entry.newer = undefined; // D --x
    entry.older = this.tail; // D. --> E
    if (this.tail)
        this.tail.newer = entry; // E. <-- D
    this.tail = entry;
    return returnEntry ? entry : entry.value;
};
// ----------------------------------------------------------------------------
// Following code is optional and can be removed without breaking the core
// functionality.
/**
 * Check if <key> is in the cache without registering recent use. Feasible if
 * you do not want to chage the state of the cache, but only "peek" at it.
 * Returns the entry associated with <key> if found, or undefined if not found.
 */
LRUCache.prototype.find = function (key) {
    return this._keymap[key];
};
/**
 * Update the value of entry with <key>. Returns the old value, or undefined if
 * entry was not in the cache.
 */
LRUCache.prototype.set = function (key, value) {
    var oldvalue;
    var entry = this.get(key, true);
    if (entry) {
        oldvalue = entry.value;
        entry.value = value;
    }
    else {
        oldvalue = this.put(key, value);
        if (oldvalue)
            oldvalue = oldvalue.value;
    }
    return oldvalue;
};
/**
 * Remove entry <key> from cache and return its value. Returns undefined if not
 * found.
 */
LRUCache.prototype.remove = function (key) {
    var entry = this._keymap[key];
    if (!entry)
        return;
    delete this._keymap[entry.key]; // need to do delete unfortunately
    if (entry.newer && entry.older) {
        // relink the older entry with the newer entry
        entry.older.newer = entry.newer;
        entry.newer.older = entry.older;
    }
    else if (entry.newer) {
        // remove the link to us
        entry.newer.older = undefined;
        // link the newer entry to head
        this.head = entry.newer;
    }
    else if (entry.older) {
        // remove the link to us
        entry.older.newer = undefined;
        // link the newer entry to head
        this.tail = entry.older;
    }
    else { // if(entry.older === undefined && entry.newer === undefined) {
        this.head = this.tail = undefined;
    }
    this.size--;
    return entry.value;
};
/** Removes all entries */
LRUCache.prototype.removeAll = function () {
    // This should be safe, as we never expose strong refrences to the outside
    this.head = this.tail = undefined;
    this.size = 0;
    this._keymap = {};
};
/**
 * Return an array containing all keys of entries stored in the cache object, in
 * arbitrary order.
 */
if (typeof Object.keys === 'function') {
    LRUCache.prototype.keys = function () { return Object.keys(this._keymap); };
}
else {
    LRUCache.prototype.keys = function () {
        var keys = [];
        for (var k in this._keymap)
            keys.push(k);
        return keys;
    };
}
/**
 * Call `fun` for each entry. Starting with the newest entry if `desc` is a true
 * value, otherwise starts with the oldest (head) enrty and moves towards the
 * tail.
 *
 * `fun` is called with 3 arguments in the context `context`:
 *   `fun.call(context, Object key, Object value, LRUCache self)`
 */
LRUCache.prototype.forEach = function (fun, context, desc) {
    var entry;
    if (context === true) {
        desc = true;
        context = undefined;
    }
    else if (typeof context !== 'object')
        context = this;
    if (desc) {
        entry = this.tail;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.older;
        }
    }
    else {
        entry = this.head;
        while (entry) {
            fun.call(context, entry.key, entry.value, this);
            entry = entry.newer;
        }
    }
};
/** Returns a JSON (array) representation */
//LRUCache.prototype.toJSON = function () {
//    var s: IEntry[] = [], entry = this.head;
//    while (entry) {
//        s.push({ key: entry.key.toJSON(), value: entry.value.toJSON() });
//        entry = entry.newer;
//    }
//    return s;
//};
/** Returns a String representation */
LRUCache.prototype.toString = function () {
    var s = '', entry = this.head;
    while (entry) {
        s += String(entry.key) + ':' + entry.value;
        entry = entry.newer;
        if (entry)
            s += ' < ';
    }
    return s;
};
// Export ourselves
//if (typeof this === 'object') this.LRUCache = LRUCache;

var DefaultApiCache = /** @class */ (function () {
    function DefaultApiCache(limit) {
        if (limit === void 0) { limit = 1000; }
        this.lru = MakeLRUCache(limit);
    }
    DefaultApiCache.prototype.isExpired = function (key) {
        var value = this.lru.get(key, false);
        if (value) {
            return value.expiredIn !== 0 && value.expiredIn < Date.now();
        }
        else {
            return false;
        }
    };
    DefaultApiCache.prototype.get = function (key, cb) {
        var value = this.lru.get(key, false);
        if (value && !this.isExpired(key)) {
            cb(null, value.data);
        }
        else {
            cb && cb(null);
        }
    };
    DefaultApiCache.prototype.set = function (key, value, ttl, cb) {
        this.lru.remove(key);
        this.lru.put(key, {
            data: value,
            expiredIn: ttl ? (Date.now() + (ttl * 1000)) : 0,
        });
        cb && cb(null);
    };
    DefaultApiCache.prototype.remove = function (key, cb) {
        this.lru.remove(key);
        cb && cb(null);
    };
    DefaultApiCache.prototype.clear = function (cb) {
        this.lru.removeAll();
        cb && cb(null);
    };
    return DefaultApiCache;
}());

function fetchRequest(url, options, callback) {
    var fetchOptions = {
        headers: {
            Accept: 'application/json',
        },
    };
    if (options && options.proxyAgent) {
        fetchOptions.agent = options.proxyAgent;
    }
    // can't use number because of NodeJS globals included
    var timeoutId;
    var fetchPromise = cross_fetch__WEBPACK_IMPORTED_MODULE_0__(url, fetchOptions);
    var promise = options.timeoutInMs ? Promise.race([
        fetchPromise,
        new Promise(function (_, reject) {
            timeoutId = setTimeout(function () { return reject(new Error(url + " response timeout")); }, options.timeoutInMs);
        })
    ]) : fetchPromise;
    promise.then(function (resp) {
        clearTimeout(timeoutId);
        if (~~(resp.status / 100 !== 2)) {
            /**
             * @description
             * drain the resp before throwing an error to prevent memory leaks
             * @link https://github.com/bitinn/node-fetch/issues/83
             */
            return resp.text().then(function () {
                var e = new Error("Unexpected status code [" + resp.status + "] on URL " + url);
                e.status = resp.status;
                throw e;
            });
        }
        return resp.json().then(function (result) {
            var cacheControl = resp.headers.get('cache-control');
            var parsedCacheControl = cacheControl ? /max-age=(\d+)/.exec(cacheControl) : null;
            var ttl = parsedCacheControl ? parseInt(parsedCacheControl[1], 10) : undefined;
            callback(null, result, resp, ttl);
        });
    }).catch(function (err) {
        clearTimeout(timeoutId);
        callback(err);
    });
}
var DefaultRequestHandler = /** @class */ (function () {
    function DefaultRequestHandler(options) {
        this.options = options || {};
    }
    DefaultRequestHandler.prototype.request = function (url, callback) {
        fetchRequest(url, this.options, callback);
    };
    return DefaultRequestHandler;
}());

var HttpClient = /** @class */ (function () {
    function HttpClient(requestHandler, cache, proxyAgent, timeoutInMs) {
        this.requestHandler = requestHandler || new DefaultRequestHandler({ proxyAgent: proxyAgent, timeoutInMs: timeoutInMs });
        this.cache = cache || new DefaultApiCache();
    }
    HttpClient.prototype.request = function (url, callback) {
        this.requestHandler.request(url, function (err, result, xhr, ttl) {
            if (err) {
                callback && callback(err, null, xhr, ttl);
            }
            else if (result) {
                callback && callback(null, result, xhr, ttl);
            }
        });
    };
    /**
     * Fetch a URL corresponding to a query, and parse the response as a Response object
     */
    HttpClient.prototype.cachedRequest = function (url, maybeOptions) {
        var _this = this;
        var options = maybeOptions || {};
        var run = function (cb) {
            var cacheKey = options.cacheKey || url;
            _this.cache.get(cacheKey, function (cacheGetError, cacheGetValue) {
                if (cacheGetError || cacheGetValue) {
                    cb(cacheGetError, cacheGetValue);
                }
                else {
                    _this.request(url, function (fetchError, fetchValue, _, ttlReq) {
                        if (fetchError) {
                            cb(fetchError, null);
                        }
                        else {
                            var ttl = ttlReq || options.ttl;
                            if (ttl) {
                                _this.cache.set(cacheKey, fetchValue, ttl, cb);
                            }
                            cb(null, fetchValue);
                        }
                    });
                }
            });
        };
        return new Promise(function (resolve, reject) {
            run(function (err, value) {
                if (err)
                    reject(err);
                if (value)
                    resolve(value);
            });
        });
    };
    return HttpClient;
}());

function separator(url) {
    return url.indexOf('?') > -1 ? '&' : '?';
}
var Api = /** @class */ (function () {
    function Api(url, options) {
        this.options = options || {};
        this.url = url;
        if (this.options.accessToken) {
            var accessTokenParam = "access_token=" + this.options.accessToken;
            this.url += separator(url) + accessTokenParam;
        }
        if (this.options.routes) {
            this.url += separator(url) + ("routes=" + encodeURIComponent(JSON.stringify(this.options.routes)));
        }
        this.apiDataTTL = this.options.apiDataTTL || 5;
        this.httpClient = new HttpClient(this.options.requestHandler, this.options.apiCache, this.options.proxyAgent, this.options.timeoutInMs);
    }
    /**
     * Fetches data used to construct the api client, from cache if it's
     * present, otherwise from calling the prismic api endpoint (which is
     * then cached).
     */
    Api.prototype.get = function (cb) {
        var _this = this;
        return this.httpClient.cachedRequest(this.url, { ttl: this.apiDataTTL }).then(function (data) {
            var resolvedApi = new ResolvedApi(data, _this.httpClient, _this.options);
            cb && cb(null, resolvedApi);
            return resolvedApi;
        }).catch(function (error) {
            cb && cb(error);
            throw error;
        });
    };
    return Api;
}());

var DefaultClient = /** @class */ (function () {
    function DefaultClient(url, options) {
        this.api = new Api(url, options);
    }
    DefaultClient.prototype.getApi = function () {
        return this.api.get();
    };
    DefaultClient.prototype.everything = function () {
        return this.form('everything');
    };
    DefaultClient.prototype.form = function (formId) {
        return new LazySearchForm(formId, this.api);
    };
    DefaultClient.prototype.query = function (q, optionsOrCallback, cb) {
        return this.getApi().then(function (api) { return api.query(q, optionsOrCallback, cb); });
    };
    DefaultClient.prototype.queryFirst = function (q, optionsOrCallback, cb) {
        return this.getApi().then(function (api) { return api.queryFirst(q, optionsOrCallback, cb); });
    };
    DefaultClient.prototype.getByID = function (id, options, cb) {
        return this.getApi().then(function (api) { return api.getByID(id, options, cb); });
    };
    DefaultClient.prototype.getByIDs = function (ids, options, cb) {
        return this.getApi().then(function (api) { return api.getByIDs(ids, options, cb); });
    };
    DefaultClient.prototype.getByUID = function (type, uid, options, cb) {
        return this.getApi().then(function (api) { return api.getByUID(type, uid, options, cb); });
    };
    DefaultClient.prototype.getSingle = function (type, options, cb) {
        return this.getApi().then(function (api) { return api.getSingle(type, options, cb); });
    };
    DefaultClient.prototype.getBookmark = function (bookmark, options, cb) {
        return this.getApi().then(function (api) { return api.getBookmark(bookmark, options, cb); });
    };
    DefaultClient.prototype.previewSession = function (token, linkResolver, defaultUrl, cb) {
        return this.getApi().then(function (api) { return api.previewSession(token, linkResolver, defaultUrl, cb); });
    };
    DefaultClient.prototype.getPreviewResolver = function (token, documentId) {
        var _this = this;
        var getDocById = function (documentId, maybeOptions) { return _this.getApi().then(function (api) {
            return api.getByID(documentId, maybeOptions);
        }); };
        return createPreviewResolver(token, documentId, getDocById);
    };
    DefaultClient.getApi = function (url, options) {
        var api = new Api(url, options);
        return api.get();
    };
    return DefaultClient;
}());

/// <reference path="../types/cross-fetch.d.ts" />
var index = {
    experimentCookie: EXPERIMENT_COOKIE,
    previewCookie: PREVIEW_COOKIE,
    Predicates: Predicates,
    Experiments: Experiments,
    Api: Api,
    client: client,
    getApi: getApi,
    api: api,
};
function client(url, options) {
    return new DefaultClient(url, options);
}
function getApi(url, options) {
    return DefaultClient.getApi(url, options);
}
function api(url, options) {
    return getApi(url, options);
}

/* harmony default export */ __webpack_exports__["default"] = (index);
//# sourceMappingURL=prismic-javascript.mjs.map


/***/ }),

/***/ "./src/lib/components/PrismicComponent.react.js":
/*!******************************************************!*\
  !*** ./src/lib/components/PrismicComponent.react.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PrismicComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var Prismic = __webpack_require__(/*! prismic-javascript */ "./node_modules/prismic-javascript/esm/prismic-javascript.mjs");
/**
 * ExampleComponent is an example component.
 * It takes a property, `label`, and
 * displays it.
 * It renders an input with the property `value`
 * which is editable by the user.
 */


var PrismicComponent = /*#__PURE__*/function (_Component) {
  _inherits(PrismicComponent, _Component);

  var _super = _createSuper(PrismicComponent);

  function PrismicComponent() {
    _classCallCheck(this, PrismicComponent);

    return _super.apply(this, arguments);
  }

  _createClass(PrismicComponent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          label = _this$props.label,
          setProps = _this$props.setProps,
          value = _this$props.value,
          apiEndpoint = _this$props.apiEndpoint;
      Prismic.getApi(apiEndpoint).then(function (api) {
        return api.query(""); // An empty query will return all the documents
      }).then(function (response) {
        console.log("Documents: ", response.results);
      }, function (err) {
        console.log("Something went wrong: ", err);
      });
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: id
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Hello, world!"), "ExampleComponent: ", label, "\xA0", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        value: value,
        onChange:
        /*
         * Send the new value to the parent component.
         * setProps is a prop that is automatically supplied
         * by dash's front-end ("dash-renderer").
         * In a Dash app, this will update the component's
         * props and send the data back to the Python Dash
         * app server if a callback uses the modified prop as
         * Input or State.
         */
        function onChange(e) {
          return setProps({
            value: e.target.value
          });
        }
      }));
    }
  }]);

  return PrismicComponent;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


PrismicComponent.defaultProps = {};
PrismicComponent.propTypes = {
  /**
   * The ID used to identify this component in Dash callbacks.
   */
  id: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * The URL of the Prismic API.
   */
  apiEndpoint: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * A label that will be printed when this component is rendered.
   */
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,

  /**
   * The value displayed in the input.
   */
  value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,

  /**
   * Dash-assigned callback that should be called to report property changes
   * to Dash, to make them available for callbacks.
   */
  setProps: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func
};

/***/ }),

/***/ "./src/lib/index.js":
/*!**************************!*\
  !*** ./src/lib/index.js ***!
  \**************************/
/*! exports provided: MyDashComponent, BulmaButton, BulmaBox, PrismicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MyDashComponent_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MyDashComponent.react */ "./src/lib/components/MyDashComponent.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MyDashComponent", function() { return _components_MyDashComponent_react__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _components_BulmaButton_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/BulmaButton.react */ "./src/lib/components/BulmaButton.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BulmaButton", function() { return _components_BulmaButton_react__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _components_BulmaBox_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/BulmaBox.react */ "./src/lib/components/BulmaBox.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BulmaBox", function() { return _components_BulmaBox_react__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _components_PrismicComponent_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/PrismicComponent.react */ "./src/lib/components/PrismicComponent.react.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PrismicComponent", function() { return _components_PrismicComponent_react__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* eslint-disable import/prefer-default-export */






/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teV9kYXNoX2NvbXBvbmVudC8uL25vZGVfbW9kdWxlcy9jcm9zcy1mZXRjaC9kaXN0L2Jyb3dzZXItcG9ueWZpbGwuanMiLCJ3ZWJwYWNrOi8vbXlfZGFzaF9jb21wb25lbnQvLi9ub2RlX21vZHVsZXMvcHJpc21pYy1qYXZhc2NyaXB0L2VzbS9wcmlzbWljLWphdmFzY3JpcHQubWpzIiwid2VicGFjazovL215X2Rhc2hfY29tcG9uZW50Ly4vc3JjL2xpYi9jb21wb25lbnRzL1ByaXNtaWNDb21wb25lbnQucmVhY3QuanMiLCJ3ZWJwYWNrOi8vbXlfZGFzaF9jb21wb25lbnQvLi9zcmMvbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIlByaXNtaWMiLCJyZXF1aXJlIiwiUHJpc21pY0NvbXBvbmVudCIsInByb3BzIiwiaWQiLCJsYWJlbCIsInNldFByb3BzIiwidmFsdWUiLCJhcGlFbmRwb2ludCIsImdldEFwaSIsInRoZW4iLCJhcGkiLCJxdWVyeSIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInJlc3VsdHMiLCJlcnIiLCJlIiwidGFyZ2V0IiwiQ29tcG9uZW50IiwiZGVmYXVsdFByb3BzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsImZ1bmMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsaUJBQWlCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RCxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1QsOEVBQThFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhCQUE4QixxQkFBcUI7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQSx1Q0FBdUMsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0IsMEJBQTBCLGVBQWU7QUFDeEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLENBQUMsR0FBRztBQUNKLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsTUFBTTtBQUMzRDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2hpQkE7QUFBQTtBQUFxQzs7QUFFckM7QUFDQTtBQUNBLCtEQUErRDtBQUMvRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0RBQWdELE9BQU87QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGlCQUFpQixXQUFXO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxtQkFBbUI7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLGtCQUFrQixFQUFFO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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SUFBRSxFQUFFbUIsaURBQVMsQ0FBQ0MsTUFKVzs7QUFNekI7OztBQUdBaEIsYUFBVyxFQUFFZSxpREFBUyxDQUFDQyxNQVRFOztBQVd6Qjs7O0FBR0FuQixPQUFLLEVBQUVrQixpREFBUyxDQUFDQyxNQUFWLENBQWlCQyxVQWRDOztBQWdCekI7OztBQUdBbEIsT0FBSyxFQUFFZ0IsaURBQVMsQ0FBQ0MsTUFuQlE7O0FBcUJ6Qjs7OztBQUlBbEIsVUFBUSxFQUFFaUIsaURBQVMsQ0FBQ0c7QUF6QkssQ0FBN0IsQzs7Ozs7Ozs7Ozs7O0FDakRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQSIsImZpbGUiOiJhY2Q0ODk5LW1haW4td3BzLWhtci5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBfX3NlbGZfXyA9IChmdW5jdGlvbiAocm9vdCkge1xuZnVuY3Rpb24gRigpIHtcbnRoaXMuZmV0Y2ggPSBmYWxzZTtcbnRoaXMuRE9NRXhjZXB0aW9uID0gcm9vdC5ET01FeGNlcHRpb25cbn1cbkYucHJvdG90eXBlID0gcm9vdDtcbnJldHVybiBuZXcgRigpO1xufSkodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnID8gc2VsZiA6IHRoaXMpO1xuKGZ1bmN0aW9uKHNlbGYpIHtcblxudmFyIGlycmVsZXZhbnQgPSAoZnVuY3Rpb24gKGV4cG9ydHMpIHtcbiAgdmFyIHN1cHBvcnQgPSB7XG4gICAgc2VhcmNoUGFyYW1zOiAnVVJMU2VhcmNoUGFyYW1zJyBpbiBzZWxmLFxuICAgIGl0ZXJhYmxlOiAnU3ltYm9sJyBpbiBzZWxmICYmICdpdGVyYXRvcicgaW4gU3ltYm9sLFxuICAgIGJsb2I6XG4gICAgICAnRmlsZVJlYWRlcicgaW4gc2VsZiAmJlxuICAgICAgJ0Jsb2InIGluIHNlbGYgJiZcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgQmxvYigpO1xuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSkoKSxcbiAgICBmb3JtRGF0YTogJ0Zvcm1EYXRhJyBpbiBzZWxmLFxuICAgIGFycmF5QnVmZmVyOiAnQXJyYXlCdWZmZXInIGluIHNlbGZcbiAgfTtcblxuICBmdW5jdGlvbiBpc0RhdGFWaWV3KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgRGF0YVZpZXcucHJvdG90eXBlLmlzUHJvdG90eXBlT2Yob2JqKVxuICB9XG5cbiAgaWYgKHN1cHBvcnQuYXJyYXlCdWZmZXIpIHtcbiAgICB2YXIgdmlld0NsYXNzZXMgPSBbXG4gICAgICAnW29iamVjdCBJbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4QXJyYXldJyxcbiAgICAgICdbb2JqZWN0IFVpbnQ4Q2xhbXBlZEFycmF5XScsXG4gICAgICAnW29iamVjdCBJbnQxNkFycmF5XScsXG4gICAgICAnW29iamVjdCBVaW50MTZBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgSW50MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgVWludDMyQXJyYXldJyxcbiAgICAgICdbb2JqZWN0IEZsb2F0MzJBcnJheV0nLFxuICAgICAgJ1tvYmplY3QgRmxvYXQ2NEFycmF5XSdcbiAgICBdO1xuXG4gICAgdmFyIGlzQXJyYXlCdWZmZXJWaWV3ID1cbiAgICAgIEFycmF5QnVmZmVyLmlzVmlldyB8fFxuICAgICAgZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgdmlld0NsYXNzZXMuaW5kZXhPZihPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqKSkgPiAtMVxuICAgICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU5hbWUobmFtZSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIG5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgfVxuICAgIGlmICgvW15hLXowLTlcXC0jJCUmJyorLl5fYHx+XS9pLnRlc3QobmFtZSkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgY2hhcmFjdGVyIGluIGhlYWRlciBmaWVsZCBuYW1lJylcbiAgICB9XG4gICAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKVxuICB9XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdmFsdWUgPSBTdHJpbmcodmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIC8vIEJ1aWxkIGEgZGVzdHJ1Y3RpdmUgaXRlcmF0b3IgZm9yIHRoZSB2YWx1ZSBsaXN0XG4gIGZ1bmN0aW9uIGl0ZXJhdG9yRm9yKGl0ZW1zKSB7XG4gICAgdmFyIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGl0ZW1zLnNoaWZ0KCk7XG4gICAgICAgIHJldHVybiB7ZG9uZTogdmFsdWUgPT09IHVuZGVmaW5lZCwgdmFsdWU6IHZhbHVlfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAoc3VwcG9ydC5pdGVyYWJsZSkge1xuICAgICAgaXRlcmF0b3JbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIGl0ZXJhdG9yXG4gIH1cblxuICBmdW5jdGlvbiBIZWFkZXJzKGhlYWRlcnMpIHtcbiAgICB0aGlzLm1hcCA9IHt9O1xuXG4gICAgaWYgKGhlYWRlcnMgaW5zdGFuY2VvZiBIZWFkZXJzKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgICAgdGhpcy5hcHBlbmQobmFtZSwgdmFsdWUpO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGhlYWRlcnMpKSB7XG4gICAgICBoZWFkZXJzLmZvckVhY2goZnVuY3Rpb24oaGVhZGVyKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKGhlYWRlclswXSwgaGVhZGVyWzFdKTtcbiAgICAgIH0sIHRoaXMpO1xuICAgIH0gZWxzZSBpZiAoaGVhZGVycykge1xuICAgICAgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoaGVhZGVycykuZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICB9XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuYXBwZW5kID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICB2YWx1ZSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgICB2YXIgb2xkVmFsdWUgPSB0aGlzLm1hcFtuYW1lXTtcbiAgICB0aGlzLm1hcFtuYW1lXSA9IG9sZFZhbHVlID8gb2xkVmFsdWUgKyAnLCAnICsgdmFsdWUgOiB2YWx1ZTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZVsnZGVsZXRlJ10gPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgZGVsZXRlIHRoaXMubWFwW25vcm1hbGl6ZU5hbWUobmFtZSldO1xuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICBuYW1lID0gbm9ybWFsaXplTmFtZShuYW1lKTtcbiAgICByZXR1cm4gdGhpcy5oYXMobmFtZSkgPyB0aGlzLm1hcFtuYW1lXSA6IG51bGxcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5oYXMgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwLmhhc093blByb3BlcnR5KG5vcm1hbGl6ZU5hbWUobmFtZSkpXG4gIH07XG5cbiAgSGVhZGVycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICB0aGlzLm1hcFtub3JtYWxpemVOYW1lKG5hbWUpXSA9IG5vcm1hbGl6ZVZhbHVlKHZhbHVlKTtcbiAgfTtcblxuICBIZWFkZXJzLnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24oY2FsbGJhY2ssIHRoaXNBcmcpIHtcbiAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMubWFwKSB7XG4gICAgICBpZiAodGhpcy5tYXAuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzLm1hcFtuYW1lXSwgbmFtZSwgdGhpcyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2gobmFtZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLnZhbHVlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtcyA9IFtdO1xuICAgIHRoaXMuZm9yRWFjaChmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaXRlbXMucHVzaCh2YWx1ZSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaXRlbXMgPSBbXTtcbiAgICB0aGlzLmZvckVhY2goZnVuY3Rpb24odmFsdWUsIG5hbWUpIHtcbiAgICAgIGl0ZW1zLnB1c2goW25hbWUsIHZhbHVlXSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIGl0ZXJhdG9yRm9yKGl0ZW1zKVxuICB9O1xuXG4gIGlmIChzdXBwb3J0Lml0ZXJhYmxlKSB7XG4gICAgSGVhZGVycy5wcm90b3R5cGVbU3ltYm9sLml0ZXJhdG9yXSA9IEhlYWRlcnMucHJvdG90eXBlLmVudHJpZXM7XG4gIH1cblxuICBmdW5jdGlvbiBjb25zdW1lZChib2R5KSB7XG4gICAgaWYgKGJvZHkuYm9keVVzZWQpIHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKSlcbiAgICB9XG4gICAgYm9keS5ib2R5VXNlZCA9IHRydWU7XG4gIH1cblxuICBmdW5jdGlvbiBmaWxlUmVhZGVyUmVhZHkocmVhZGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgcmVhZGVyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXNvbHZlKHJlYWRlci5yZXN1bHQpO1xuICAgICAgfTtcbiAgICAgIHJlYWRlci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChyZWFkZXIuZXJyb3IpO1xuICAgICAgfTtcbiAgICB9KVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc0FycmF5QnVmZmVyKGJsb2IpIHtcbiAgICB2YXIgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcbiAgICB2YXIgcHJvbWlzZSA9IGZpbGVSZWFkZXJSZWFkeShyZWFkZXIpO1xuICAgIHJlYWRlci5yZWFkQXNBcnJheUJ1ZmZlcihibG9iKTtcbiAgICByZXR1cm4gcHJvbWlzZVxuICB9XG5cbiAgZnVuY3Rpb24gcmVhZEJsb2JBc1RleHQoYmxvYikge1xuICAgIHZhciByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIHZhciBwcm9taXNlID0gZmlsZVJlYWRlclJlYWR5KHJlYWRlcik7XG4gICAgcmVhZGVyLnJlYWRBc1RleHQoYmxvYik7XG4gICAgcmV0dXJuIHByb21pc2VcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRBcnJheUJ1ZmZlckFzVGV4dChidWYpIHtcbiAgICB2YXIgdmlldyA9IG5ldyBVaW50OEFycmF5KGJ1Zik7XG4gICAgdmFyIGNoYXJzID0gbmV3IEFycmF5KHZpZXcubGVuZ3RoKTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmlldy5sZW5ndGg7IGkrKykge1xuICAgICAgY2hhcnNbaV0gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKHZpZXdbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gY2hhcnMuam9pbignJylcbiAgfVxuXG4gIGZ1bmN0aW9uIGJ1ZmZlckNsb25lKGJ1Zikge1xuICAgIGlmIChidWYuc2xpY2UpIHtcbiAgICAgIHJldHVybiBidWYuc2xpY2UoMClcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHZpZXcgPSBuZXcgVWludDhBcnJheShidWYuYnl0ZUxlbmd0aCk7XG4gICAgICB2aWV3LnNldChuZXcgVWludDhBcnJheShidWYpKTtcbiAgICAgIHJldHVybiB2aWV3LmJ1ZmZlclxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIEJvZHkoKSB7XG4gICAgdGhpcy5ib2R5VXNlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5faW5pdEJvZHkgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICB0aGlzLl9ib2R5SW5pdCA9IGJvZHk7XG4gICAgICBpZiAoIWJvZHkpIHtcbiAgICAgICAgdGhpcy5fYm9keVRleHQgPSAnJztcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGJvZHkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRoaXMuX2JvZHlUZXh0ID0gYm9keTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5ibG9iICYmIEJsb2IucHJvdG90eXBlLmlzUHJvdG90eXBlT2YoYm9keSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUJsb2IgPSBib2R5O1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmZvcm1EYXRhICYmIEZvcm1EYXRhLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgIHRoaXMuX2JvZHlGb3JtRGF0YSA9IGJvZHk7XG4gICAgICB9IGVsc2UgaWYgKHN1cHBvcnQuc2VhcmNoUGFyYW1zICYmIFVSTFNlYXJjaFBhcmFtcy5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkudG9TdHJpbmcoKTtcbiAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5hcnJheUJ1ZmZlciAmJiBzdXBwb3J0LmJsb2IgJiYgaXNEYXRhVmlldyhib2R5KSkge1xuICAgICAgICB0aGlzLl9ib2R5QXJyYXlCdWZmZXIgPSBidWZmZXJDbG9uZShib2R5LmJ1ZmZlcik7XG4gICAgICAgIC8vIElFIDEwLTExIGNhbid0IGhhbmRsZSBhIERhdGFWaWV3IGJvZHkuXG4gICAgICAgIHRoaXMuX2JvZHlJbml0ID0gbmV3IEJsb2IoW3RoaXMuX2JvZHlBcnJheUJ1ZmZlcl0pO1xuICAgICAgfSBlbHNlIGlmIChzdXBwb3J0LmFycmF5QnVmZmVyICYmIChBcnJheUJ1ZmZlci5wcm90b3R5cGUuaXNQcm90b3R5cGVPZihib2R5KSB8fCBpc0FycmF5QnVmZmVyVmlldyhib2R5KSkpIHtcbiAgICAgICAgdGhpcy5fYm9keUFycmF5QnVmZmVyID0gYnVmZmVyQ2xvbmUoYm9keSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9ib2R5VGV4dCA9IGJvZHkgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYm9keSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghdGhpcy5oZWFkZXJzLmdldCgnY29udGVudC10eXBlJykpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBib2R5ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHRoaXMuaGVhZGVycy5zZXQoJ2NvbnRlbnQtdHlwZScsICd0ZXh0L3BsYWluO2NoYXJzZXQ9VVRGLTgnKTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QmxvYiAmJiB0aGlzLl9ib2R5QmxvYi50eXBlKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgdGhpcy5fYm9keUJsb2IudHlwZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoc3VwcG9ydC5zZWFyY2hQYXJhbXMgJiYgVVJMU2VhcmNoUGFyYW1zLnByb3RvdHlwZS5pc1Byb3RvdHlwZU9mKGJvZHkpKSB7XG4gICAgICAgICAgdGhpcy5oZWFkZXJzLnNldCgnY29udGVudC10eXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDtjaGFyc2V0PVVURi04Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHN1cHBvcnQuYmxvYikge1xuICAgICAgdGhpcy5ibG9iID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgICBpZiAocmVqZWN0ZWQpIHtcbiAgICAgICAgICByZXR1cm4gcmVqZWN0ZWRcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLl9ib2R5QmxvYikge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUJsb2IpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUFycmF5QnVmZmVyKSB7XG4gICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShuZXcgQmxvYihbdGhpcy5fYm9keUFycmF5QnVmZmVyXSkpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdjb3VsZCBub3QgcmVhZCBGb3JtRGF0YSBib2R5IGFzIGJsb2InKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobmV3IEJsb2IoW3RoaXMuX2JvZHlUZXh0XSkpXG4gICAgICAgIH1cbiAgICAgIH07XG5cbiAgICAgIHRoaXMuYXJyYXlCdWZmZXIgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX2JvZHlBcnJheUJ1ZmZlcikge1xuICAgICAgICAgIHJldHVybiBjb25zdW1lZCh0aGlzKSB8fCBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keUFycmF5QnVmZmVyKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB0aGlzLmJsb2IoKS50aGVuKHJlYWRCbG9iQXNBcnJheUJ1ZmZlcilcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9XG5cbiAgICB0aGlzLnRleHQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZWplY3RlZCA9IGNvbnN1bWVkKHRoaXMpO1xuICAgICAgaWYgKHJlamVjdGVkKSB7XG4gICAgICAgIHJldHVybiByZWplY3RlZFxuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5fYm9keUJsb2IpIHtcbiAgICAgICAgcmV0dXJuIHJlYWRCbG9iQXNUZXh0KHRoaXMuX2JvZHlCbG9iKVxuICAgICAgfSBlbHNlIGlmICh0aGlzLl9ib2R5QXJyYXlCdWZmZXIpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShyZWFkQXJyYXlCdWZmZXJBc1RleHQodGhpcy5fYm9keUFycmF5QnVmZmVyKSlcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5fYm9keUZvcm1EYXRhKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignY291bGQgbm90IHJlYWQgRm9ybURhdGEgYm9keSBhcyB0ZXh0JylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5fYm9keVRleHQpXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChzdXBwb3J0LmZvcm1EYXRhKSB7XG4gICAgICB0aGlzLmZvcm1EYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRleHQoKS50aGVuKGRlY29kZSlcbiAgICAgIH07XG4gICAgfVxuXG4gICAgdGhpcy5qc29uID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXh0KCkudGhlbihKU09OLnBhcnNlKVxuICAgIH07XG5cbiAgICByZXR1cm4gdGhpc1xuICB9XG5cbiAgLy8gSFRUUCBtZXRob2RzIHdob3NlIGNhcGl0YWxpemF0aW9uIHNob3VsZCBiZSBub3JtYWxpemVkXG4gIHZhciBtZXRob2RzID0gWydERUxFVEUnLCAnR0VUJywgJ0hFQUQnLCAnT1BUSU9OUycsICdQT1NUJywgJ1BVVCddO1xuXG4gIGZ1bmN0aW9uIG5vcm1hbGl6ZU1ldGhvZChtZXRob2QpIHtcbiAgICB2YXIgdXBjYXNlZCA9IG1ldGhvZC50b1VwcGVyQ2FzZSgpO1xuICAgIHJldHVybiBtZXRob2RzLmluZGV4T2YodXBjYXNlZCkgPiAtMSA/IHVwY2FzZWQgOiBtZXRob2RcbiAgfVxuXG4gIGZ1bmN0aW9uIFJlcXVlc3QoaW5wdXQsIG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgYm9keSA9IG9wdGlvbnMuYm9keTtcblxuICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIFJlcXVlc3QpIHtcbiAgICAgIGlmIChpbnB1dC5ib2R5VXNlZCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBbHJlYWR5IHJlYWQnKVxuICAgICAgfVxuICAgICAgdGhpcy51cmwgPSBpbnB1dC51cmw7XG4gICAgICB0aGlzLmNyZWRlbnRpYWxzID0gaW5wdXQuY3JlZGVudGlhbHM7XG4gICAgICBpZiAoIW9wdGlvbnMuaGVhZGVycykge1xuICAgICAgICB0aGlzLmhlYWRlcnMgPSBuZXcgSGVhZGVycyhpbnB1dC5oZWFkZXJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMubWV0aG9kID0gaW5wdXQubWV0aG9kO1xuICAgICAgdGhpcy5tb2RlID0gaW5wdXQubW9kZTtcbiAgICAgIHRoaXMuc2lnbmFsID0gaW5wdXQuc2lnbmFsO1xuICAgICAgaWYgKCFib2R5ICYmIGlucHV0Ll9ib2R5SW5pdCAhPSBudWxsKSB7XG4gICAgICAgIGJvZHkgPSBpbnB1dC5fYm9keUluaXQ7XG4gICAgICAgIGlucHV0LmJvZHlVc2VkID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy51cmwgPSBTdHJpbmcoaW5wdXQpO1xuICAgIH1cblxuICAgIHRoaXMuY3JlZGVudGlhbHMgPSBvcHRpb25zLmNyZWRlbnRpYWxzIHx8IHRoaXMuY3JlZGVudGlhbHMgfHwgJ3NhbWUtb3JpZ2luJztcbiAgICBpZiAob3B0aW9ucy5oZWFkZXJzIHx8ICF0aGlzLmhlYWRlcnMpIHtcbiAgICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgfVxuICAgIHRoaXMubWV0aG9kID0gbm9ybWFsaXplTWV0aG9kKG9wdGlvbnMubWV0aG9kIHx8IHRoaXMubWV0aG9kIHx8ICdHRVQnKTtcbiAgICB0aGlzLm1vZGUgPSBvcHRpb25zLm1vZGUgfHwgdGhpcy5tb2RlIHx8IG51bGw7XG4gICAgdGhpcy5zaWduYWwgPSBvcHRpb25zLnNpZ25hbCB8fCB0aGlzLnNpZ25hbDtcbiAgICB0aGlzLnJlZmVycmVyID0gbnVsbDtcblxuICAgIGlmICgodGhpcy5tZXRob2QgPT09ICdHRVQnIHx8IHRoaXMubWV0aG9kID09PSAnSEVBRCcpICYmIGJvZHkpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvZHkgbm90IGFsbG93ZWQgZm9yIEdFVCBvciBIRUFEIHJlcXVlc3RzJylcbiAgICB9XG4gICAgdGhpcy5faW5pdEJvZHkoYm9keSk7XG4gIH1cblxuICBSZXF1ZXN0LnByb3RvdHlwZS5jbG9uZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBuZXcgUmVxdWVzdCh0aGlzLCB7Ym9keTogdGhpcy5fYm9keUluaXR9KVxuICB9O1xuXG4gIGZ1bmN0aW9uIGRlY29kZShib2R5KSB7XG4gICAgdmFyIGZvcm0gPSBuZXcgRm9ybURhdGEoKTtcbiAgICBib2R5XG4gICAgICAudHJpbSgpXG4gICAgICAuc3BsaXQoJyYnKVxuICAgICAgLmZvckVhY2goZnVuY3Rpb24oYnl0ZXMpIHtcbiAgICAgICAgaWYgKGJ5dGVzKSB7XG4gICAgICAgICAgdmFyIHNwbGl0ID0gYnl0ZXMuc3BsaXQoJz0nKTtcbiAgICAgICAgICB2YXIgbmFtZSA9IHNwbGl0LnNoaWZ0KCkucmVwbGFjZSgvXFwrL2csICcgJyk7XG4gICAgICAgICAgdmFyIHZhbHVlID0gc3BsaXQuam9pbignPScpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xuICAgICAgICAgIGZvcm0uYXBwZW5kKGRlY29kZVVSSUNvbXBvbmVudChuYW1lKSwgZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlKSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIHJldHVybiBmb3JtXG4gIH1cblxuICBmdW5jdGlvbiBwYXJzZUhlYWRlcnMocmF3SGVhZGVycykge1xuICAgIHZhciBoZWFkZXJzID0gbmV3IEhlYWRlcnMoKTtcbiAgICAvLyBSZXBsYWNlIGluc3RhbmNlcyBvZiBcXHJcXG4gYW5kIFxcbiBmb2xsb3dlZCBieSBhdCBsZWFzdCBvbmUgc3BhY2Ugb3IgaG9yaXpvbnRhbCB0YWIgd2l0aCBhIHNwYWNlXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzcyMzAjc2VjdGlvbi0zLjJcbiAgICB2YXIgcHJlUHJvY2Vzc2VkSGVhZGVycyA9IHJhd0hlYWRlcnMucmVwbGFjZSgvXFxyP1xcbltcXHQgXSsvZywgJyAnKTtcbiAgICBwcmVQcm9jZXNzZWRIZWFkZXJzLnNwbGl0KC9cXHI/XFxuLykuZm9yRWFjaChmdW5jdGlvbihsaW5lKSB7XG4gICAgICB2YXIgcGFydHMgPSBsaW5lLnNwbGl0KCc6Jyk7XG4gICAgICB2YXIga2V5ID0gcGFydHMuc2hpZnQoKS50cmltKCk7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHBhcnRzLmpvaW4oJzonKS50cmltKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzXG4gIH1cblxuICBCb2R5LmNhbGwoUmVxdWVzdC5wcm90b3R5cGUpO1xuXG4gIGZ1bmN0aW9uIFJlc3BvbnNlKGJvZHlJbml0LCBvcHRpb25zKSB7XG4gICAgaWYgKCFvcHRpb25zKSB7XG4gICAgICBvcHRpb25zID0ge307XG4gICAgfVxuXG4gICAgdGhpcy50eXBlID0gJ2RlZmF1bHQnO1xuICAgIHRoaXMuc3RhdHVzID0gb3B0aW9ucy5zdGF0dXMgPT09IHVuZGVmaW5lZCA/IDIwMCA6IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMub2sgPSB0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJ3N0YXR1c1RleHQnIGluIG9wdGlvbnMgPyBvcHRpb25zLnN0YXR1c1RleHQgOiAnT0snO1xuICAgIHRoaXMuaGVhZGVycyA9IG5ldyBIZWFkZXJzKG9wdGlvbnMuaGVhZGVycyk7XG4gICAgdGhpcy51cmwgPSBvcHRpb25zLnVybCB8fCAnJztcbiAgICB0aGlzLl9pbml0Qm9keShib2R5SW5pdCk7XG4gIH1cblxuICBCb2R5LmNhbGwoUmVzcG9uc2UucHJvdG90eXBlKTtcblxuICBSZXNwb25zZS5wcm90b3R5cGUuY2xvbmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKHRoaXMuX2JvZHlJbml0LCB7XG4gICAgICBzdGF0dXM6IHRoaXMuc3RhdHVzLFxuICAgICAgc3RhdHVzVGV4dDogdGhpcy5zdGF0dXNUZXh0LFxuICAgICAgaGVhZGVyczogbmV3IEhlYWRlcnModGhpcy5oZWFkZXJzKSxcbiAgICAgIHVybDogdGhpcy51cmxcbiAgICB9KVxuICB9O1xuXG4gIFJlc3BvbnNlLmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlc3BvbnNlID0gbmV3IFJlc3BvbnNlKG51bGwsIHtzdGF0dXM6IDAsIHN0YXR1c1RleHQ6ICcnfSk7XG4gICAgcmVzcG9uc2UudHlwZSA9ICdlcnJvcic7XG4gICAgcmV0dXJuIHJlc3BvbnNlXG4gIH07XG5cbiAgdmFyIHJlZGlyZWN0U3RhdHVzZXMgPSBbMzAxLCAzMDIsIDMwMywgMzA3LCAzMDhdO1xuXG4gIFJlc3BvbnNlLnJlZGlyZWN0ID0gZnVuY3Rpb24odXJsLCBzdGF0dXMpIHtcbiAgICBpZiAocmVkaXJlY3RTdGF0dXNlcy5pbmRleE9mKHN0YXR1cykgPT09IC0xKSB7XG4gICAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignSW52YWxpZCBzdGF0dXMgY29kZScpXG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZShudWxsLCB7c3RhdHVzOiBzdGF0dXMsIGhlYWRlcnM6IHtsb2NhdGlvbjogdXJsfX0pXG4gIH07XG5cbiAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBzZWxmLkRPTUV4Y2VwdGlvbjtcbiAgdHJ5IHtcbiAgICBuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oKTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24gPSBmdW5jdGlvbihtZXNzYWdlLCBuYW1lKSB7XG4gICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgIHZhciBlcnJvciA9IEVycm9yKG1lc3NhZ2UpO1xuICAgICAgdGhpcy5zdGFjayA9IGVycm9yLnN0YWNrO1xuICAgIH07XG4gICAgZXhwb3J0cy5ET01FeGNlcHRpb24ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuICAgIGV4cG9ydHMuRE9NRXhjZXB0aW9uLnByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IGV4cG9ydHMuRE9NRXhjZXB0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gZmV0Y2goaW5wdXQsIGluaXQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICB2YXIgcmVxdWVzdCA9IG5ldyBSZXF1ZXN0KGlucHV0LCBpbml0KTtcblxuICAgICAgaWYgKHJlcXVlc3Quc2lnbmFsICYmIHJlcXVlc3Quc2lnbmFsLmFib3J0ZWQpIHtcbiAgICAgICAgcmV0dXJuIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKVxuICAgICAgfVxuXG4gICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cbiAgICAgIGZ1bmN0aW9uIGFib3J0WGhyKCkge1xuICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgIH1cblxuICAgICAgeGhyLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IHtcbiAgICAgICAgICBzdGF0dXM6IHhoci5zdGF0dXMsXG4gICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHQsXG4gICAgICAgICAgaGVhZGVyczogcGFyc2VIZWFkZXJzKHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSB8fCAnJylcbiAgICAgICAgfTtcbiAgICAgICAgb3B0aW9ucy51cmwgPSAncmVzcG9uc2VVUkwnIGluIHhociA/IHhoci5yZXNwb25zZVVSTCA6IG9wdGlvbnMuaGVhZGVycy5nZXQoJ1gtUmVxdWVzdC1VUkwnKTtcbiAgICAgICAgdmFyIGJvZHkgPSAncmVzcG9uc2UnIGluIHhociA/IHhoci5yZXNwb25zZSA6IHhoci5yZXNwb25zZVRleHQ7XG4gICAgICAgIHJlc29sdmUobmV3IFJlc3BvbnNlKGJvZHksIG9wdGlvbnMpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgVHlwZUVycm9yKCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJykpO1xuICAgICAgfTtcblxuICAgICAgeGhyLm9udGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZWplY3QobmV3IFR5cGVFcnJvcignTmV0d29yayByZXF1ZXN0IGZhaWxlZCcpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vbmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJlamVjdChuZXcgZXhwb3J0cy5ET01FeGNlcHRpb24oJ0Fib3J0ZWQnLCAnQWJvcnRFcnJvcicpKTtcbiAgICAgIH07XG5cbiAgICAgIHhoci5vcGVuKHJlcXVlc3QubWV0aG9kLCByZXF1ZXN0LnVybCwgdHJ1ZSk7XG5cbiAgICAgIGlmIChyZXF1ZXN0LmNyZWRlbnRpYWxzID09PSAnaW5jbHVkZScpIHtcbiAgICAgICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICB9IGVsc2UgaWYgKHJlcXVlc3QuY3JlZGVudGlhbHMgPT09ICdvbWl0Jykge1xuICAgICAgICB4aHIud2l0aENyZWRlbnRpYWxzID0gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGlmICgncmVzcG9uc2VUeXBlJyBpbiB4aHIgJiYgc3VwcG9ydC5ibG9iKSB7XG4gICAgICAgIHhoci5yZXNwb25zZVR5cGUgPSAnYmxvYic7XG4gICAgICB9XG5cbiAgICAgIHJlcXVlc3QuaGVhZGVycy5mb3JFYWNoKGZ1bmN0aW9uKHZhbHVlLCBuYW1lKSB7XG4gICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAocmVxdWVzdC5zaWduYWwpIHtcbiAgICAgICAgcmVxdWVzdC5zaWduYWwuYWRkRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydFhocik7XG5cbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIC8vIERPTkUgKHN1Y2Nlc3Mgb3IgZmFpbHVyZSlcbiAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgIHJlcXVlc3Quc2lnbmFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRYaHIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgeGhyLnNlbmQodHlwZW9mIHJlcXVlc3QuX2JvZHlJbml0ID09PSAndW5kZWZpbmVkJyA/IG51bGwgOiByZXF1ZXN0Ll9ib2R5SW5pdCk7XG4gICAgfSlcbiAgfVxuXG4gIGZldGNoLnBvbHlmaWxsID0gdHJ1ZTtcblxuICBpZiAoIXNlbGYuZmV0Y2gpIHtcbiAgICBzZWxmLmZldGNoID0gZmV0Y2g7XG4gICAgc2VsZi5IZWFkZXJzID0gSGVhZGVycztcbiAgICBzZWxmLlJlcXVlc3QgPSBSZXF1ZXN0O1xuICAgIHNlbGYuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgfVxuXG4gIGV4cG9ydHMuSGVhZGVycyA9IEhlYWRlcnM7XG4gIGV4cG9ydHMuUmVxdWVzdCA9IFJlcXVlc3Q7XG4gIGV4cG9ydHMuUmVzcG9uc2UgPSBSZXNwb25zZTtcbiAgZXhwb3J0cy5mZXRjaCA9IGZldGNoO1xuXG4gIHJldHVybiBleHBvcnRzO1xuXG59KHt9KSk7XG59KShfX3NlbGZfXyk7XG5kZWxldGUgX19zZWxmX18uZmV0Y2gucG9seWZpbGxcbmV4cG9ydHMgPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCBmZXRjaCBmcm9tICdjcm9zcy1mZXRjaCdcbmV4cG9ydHMuZGVmYXVsdCA9IF9fc2VsZl9fLmZldGNoIC8vIEZvciBUeXBlU2NyaXB0IGNvbnN1bWVycyB3aXRob3V0IGVzTW9kdWxlSW50ZXJvcC5cbmV4cG9ydHMuZmV0Y2ggPSBfX3NlbGZfXy5mZXRjaCAvLyBUbyBlbmFibGU6IGltcG9ydCB7ZmV0Y2h9IGZyb20gJ2Nyb3NzLWZldGNoJ1xuZXhwb3J0cy5IZWFkZXJzID0gX19zZWxmX18uSGVhZGVyc1xuZXhwb3J0cy5SZXF1ZXN0ID0gX19zZWxmX18uUmVxdWVzdFxuZXhwb3J0cy5SZXNwb25zZSA9IF9fc2VsZl9fLlJlc3BvbnNlXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNcbiIsImltcG9ydCBjcm9zc0ZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuXHJcbnZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbn07XG5cbnZhciBWYXJpYXRpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmFyaWF0aW9uKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgfVxuICAgIFZhcmlhdGlvbi5wcm90b3R5cGUuaWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGEuaWQ7XG4gICAgfTtcbiAgICBWYXJpYXRpb24ucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5yZWY7XG4gICAgfTtcbiAgICBWYXJpYXRpb24ucHJvdG90eXBlLmxhYmVsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmxhYmVsO1xuICAgIH07XG4gICAgcmV0dXJuIFZhcmlhdGlvbjtcbn0oKSk7XG52YXIgRXhwZXJpbWVudCA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBFeHBlcmltZW50KGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhID0ge307XG4gICAgICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgICAgIHRoaXMudmFyaWF0aW9ucyA9IChkYXRhLnZhcmlhdGlvbnMgfHwgW10pLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBWYXJpYXRpb24odik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBFeHBlcmltZW50LnByb3RvdHlwZS5pZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pZDtcbiAgICB9O1xuICAgIEV4cGVyaW1lbnQucHJvdG90eXBlLmdvb2dsZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmdvb2dsZUlkO1xuICAgIH07XG4gICAgRXhwZXJpbWVudC5wcm90b3R5cGUubmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS5uYW1lO1xuICAgIH07XG4gICAgcmV0dXJuIEV4cGVyaW1lbnQ7XG59KCkpO1xudmFyIEV4cGVyaW1lbnRzID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEV4cGVyaW1lbnRzKGRhdGEpIHtcbiAgICAgICAgaWYgKGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMuZHJhZnRzID0gKGRhdGEuZHJhZnRzIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwZXJpbWVudChleHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnJ1bm5pbmcgPSAoZGF0YS5ydW5uaW5nIHx8IFtdKS5tYXAoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRXhwZXJpbWVudChleHApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgRXhwZXJpbWVudHMucHJvdG90eXBlLmN1cnJlbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnJ1bm5pbmcubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucnVubmluZ1swXTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBFeHBlcmltZW50cy5wcm90b3R5cGUucmVmRnJvbUNvb2tpZSA9IGZ1bmN0aW9uIChjb29raWUpIHtcbiAgICAgICAgaWYgKCFjb29raWUgfHwgY29va2llLnRyaW0oKSA9PT0gJycpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgdmFyIHNwbGl0dGVkID0gY29va2llLnRyaW0oKS5zcGxpdCgnICcpO1xuICAgICAgICBpZiAoc3BsaXR0ZWQubGVuZ3RoIDwgMilcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB2YXIgZXhwSWQgPSBzcGxpdHRlZFswXTtcbiAgICAgICAgdmFyIHZhckluZGV4ID0gcGFyc2VJbnQoc3BsaXR0ZWRbMV0sIDEwKTtcbiAgICAgICAgdmFyIGV4cCA9IHRoaXMucnVubmluZy5maWx0ZXIoZnVuY3Rpb24gKGV4cCkge1xuICAgICAgICAgICAgcmV0dXJuIGV4cC5nb29nbGVJZCgpID09PSBleHBJZCAmJiBleHAudmFyaWF0aW9ucy5sZW5ndGggPiB2YXJJbmRleDtcbiAgICAgICAgfSlbMF07XG4gICAgICAgIHJldHVybiBleHAgPyBleHAudmFyaWF0aW9uc1t2YXJJbmRleF0ucmVmKCkgOiBudWxsO1xuICAgIH07XG4gICAgcmV0dXJuIEV4cGVyaW1lbnRzO1xufSgpKTtcblxudmFyIExhenlTZWFyY2hGb3JtID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIExhenlTZWFyY2hGb3JtKGlkLCBhcGkpIHtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLmFwaSA9IGFwaTtcbiAgICAgICAgdGhpcy5maWVsZHMgPSB7fTtcbiAgICB9XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICAgIHRoaXMuZmllbGRzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICBMYXp5U2VhcmNoRm9ybS5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24gKHJlZikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3JlZicsIHJlZik7XG4gICAgfTtcbiAgICBMYXp5U2VhcmNoRm9ybS5wcm90b3R5cGUucXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdxJywgcXVlcnkpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2VTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlU2l6ZScsIHNpemUpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmZldGNoID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFVzaW5nIEZldGNoIGlzIGRlcHJlY2F0ZWQuIFVzZSB0aGUgcHJvcGVydHkgYGdyYXBoUXVlcnlgIGluc3RlYWQuJyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnZmV0Y2gnLCBmaWVsZHMpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmZldGNoTGlua3MgPSBmdW5jdGlvbiAoZmllbGRzKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignV2FybmluZzogVXNpbmcgRmV0Y2hMaW5rcyBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIHByb3BlcnR5IGBncmFwaFF1ZXJ5YCBpbnN0ZWFkLicpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ2ZldGNoTGlua3MnLCBmaWVsZHMpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmdyYXBoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdncmFwaFF1ZXJ5JywgcXVlcnkpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLmxhbmcgPSBmdW5jdGlvbiAobGFuZ0NvZGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdsYW5nJywgbGFuZ0NvZGUpO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2UgPSBmdW5jdGlvbiAocCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ3BhZ2UnLCBwKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnYWZ0ZXInLCBkb2N1bWVudElkKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS5vcmRlcmluZ3MgPSBmdW5jdGlvbiAob3JkZXJpbmdzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnb3JkZXJpbmdzJywgb3JkZXJpbmdzKTtcbiAgICB9O1xuICAgIExhenlTZWFyY2hGb3JtLnByb3RvdHlwZS51cmwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHtcbiAgICAgICAgICAgIHJldHVybiBMYXp5U2VhcmNoRm9ybS50b1NlYXJjaEZvcm0oX3RoaXMsIGFwaSkudXJsKCk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0ucHJvdG90eXBlLnN1Ym1pdCA9IGZ1bmN0aW9uIChjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gdGhpcy5hcGkuZ2V0KCkudGhlbihmdW5jdGlvbiAoYXBpKSB7XG4gICAgICAgICAgICByZXR1cm4gTGF6eVNlYXJjaEZvcm0udG9TZWFyY2hGb3JtKF90aGlzLCBhcGkpLnN1Ym1pdChjYik7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgTGF6eVNlYXJjaEZvcm0udG9TZWFyY2hGb3JtID0gZnVuY3Rpb24gKGxhenlGb3JtLCBhcGkpIHtcbiAgICAgICAgdmFyIGZvcm0gPSBhcGkuZm9ybShsYXp5Rm9ybS5pZCk7XG4gICAgICAgIGlmIChmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMobGF6eUZvcm0uZmllbGRzKS5yZWR1Y2UoZnVuY3Rpb24gKGZvcm0sIGZpZWxkS2V5KSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkVmFsdWUgPSBsYXp5Rm9ybS5maWVsZHNbZmllbGRLZXldO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZEtleSA9PT0gJ3EnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLnF1ZXJ5KGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZEtleSA9PT0gJ3BhZ2VTaXplJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5wYWdlU2l6ZShmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdmZXRjaCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZmV0Y2goZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAnZmV0Y2hMaW5rcycpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uZmV0Y2hMaW5rcyhmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdncmFwaFF1ZXJ5Jykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5ncmFwaFF1ZXJ5KGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWVsZEtleSA9PT0gJ2xhbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmb3JtLmxhbmcoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAncGFnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0ucGFnZShmaWVsZFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZmllbGRLZXkgPT09ICdhZnRlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvcm0uYWZ0ZXIoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGZpZWxkS2V5ID09PSAnb3JkZXJpbmdzJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5vcmRlcmluZ3MoZmllbGRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm9ybS5zZXQoZmllbGRLZXksIGZpZWxkVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIGZvcm0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5hYmxlIHRvIGFjY2VzcyB0byBmb3JtIFwiICsgbGF6eUZvcm0uaWQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gTGF6eVNlYXJjaEZvcm07XG59KCkpO1xudmFyIFNlYXJjaEZvcm0gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gU2VhcmNoRm9ybShmb3JtLCBodHRwQ2xpZW50KSB7XG4gICAgICAgIHRoaXMuaHR0cENsaWVudCA9IGh0dHBDbGllbnQ7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZGF0YSA9IHt9O1xuICAgICAgICBmb3IgKHZhciBmaWVsZCBpbiBmb3JtLmZpZWxkcykge1xuICAgICAgICAgICAgaWYgKGZvcm0uZmllbGRzW2ZpZWxkXVsnZGVmYXVsdCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IFtmb3JtLmZpZWxkc1tmaWVsZF1bJ2RlZmF1bHQnXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24gKGZpZWxkLCB2YWx1ZSkge1xuICAgICAgICB2YXIgZmllbGREZXNjID0gdGhpcy5mb3JtLmZpZWxkc1tmaWVsZF07XG4gICAgICAgIGlmICghZmllbGREZXNjKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIGZpZWxkICcgKyBmaWVsZCk7XG4gICAgICAgIHZhciBjaGVja2VkVmFsdWUgPSB2YWx1ZSA9PT0gJycgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcbiAgICAgICAgdmFyIHZhbHVlcyA9IHRoaXMuZGF0YVtmaWVsZF0gfHwgW107XG4gICAgICAgIGlmIChmaWVsZERlc2MubXVsdGlwbGUpIHtcbiAgICAgICAgICAgIHZhbHVlcyA9IGNoZWNrZWRWYWx1ZSA/IHZhbHVlcy5jb25jYXQoW2NoZWNrZWRWYWx1ZV0pIDogdmFsdWVzO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWVzID0gY2hlY2tlZFZhbHVlID8gW2NoZWNrZWRWYWx1ZV0gOiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kYXRhW2ZpZWxkXSA9IHZhbHVlcztcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIGEgcmVmIHRvIHF1ZXJ5IG9uIGZvciB0aGlzIFNlYXJjaEZvcm0uIFRoaXMgaXMgYSBtYW5kYXRvcnlcbiAgICAgKiBtZXRob2QgdG8gY2FsbCBiZWZvcmUgY2FsbGluZyBzdWJtaXQoKSwgYW5kIGFwaS5mb3JtKCdldmVyeXRoaW5nJykuc3VibWl0KClcbiAgICAgKiB3aWxsIG5vdCB3b3JrLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnJlZiA9IGZ1bmN0aW9uIChyZWYpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdyZWYnLCByZWYpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHByZWRpY2F0ZS1iYXNlZCBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIHdoZXJlIHlvdVxuICAgICAqIHBhc3RlIHdoYXQgeW91IGNvbXBvc2UgaW4geW91ciBwcmlzbWljLmlvIEFQSSBicm93c2VyLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnF1ZXJ5ID0gZnVuY3Rpb24gKHF1ZXJ5KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcXVlcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5xdWVyeShbcXVlcnldKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdxJywgXCJbXCIgKyBxdWVyeS5qb2luKCcnKSArIFwiXVwiKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgcXVlcnkgOiBcIiArIHF1ZXJ5KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyBhIHBhZ2Ugc2l6ZSB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIC0gVGhlIHBhZ2Ugc2l6ZVxuICAgICAqIEByZXR1cm5zIHtTZWFyY2hGb3JtfSAtIFRoZSBTZWFyY2hGb3JtIGl0c2VsZlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLnBhZ2VTaXplID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlU2l6ZScsIHNpemUpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmVzdHJpY3QgdGhlIHJlc3VsdHMgZG9jdW1lbnQgdG8gdGhlIHNwZWNpZmllZCBmaWVsZHNcbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5mZXRjaCA9IGZ1bmN0aW9uIChmaWVsZHMpIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdXYXJuaW5nOiBVc2luZyBGZXRjaCBpcyBkZXByZWNhdGVkLiBVc2UgdGhlIHByb3BlcnR5IGBncmFwaFF1ZXJ5YCBpbnN0ZWFkLicpO1xuICAgICAgICB2YXIgc3RyRmllbGRzID0gQXJyYXkuaXNBcnJheShmaWVsZHMpID8gZmllbGRzLmpvaW4oJywnKSA6IGZpZWxkcztcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdmZXRjaCcsIHN0ckZpZWxkcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBJbmNsdWRlIHRoZSByZXF1ZXN0ZWQgZmllbGRzIGluIHRoZSBEb2N1bWVudExpbmsgaW5zdGFuY2VzIGluIHRoZSByZXN1bHRcbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5mZXRjaExpbmtzID0gZnVuY3Rpb24gKGZpZWxkcykge1xuICAgICAgICBjb25zb2xlLndhcm4oJ1dhcm5pbmc6IFVzaW5nIEZldGNoTGlua3MgaXMgZGVwcmVjYXRlZC4gVXNlIHRoZSBwcm9wZXJ0eSBgZ3JhcGhRdWVyeWAgaW5zdGVhZC4nKTtcbiAgICAgICAgdmFyIHN0ckZpZWxkcyA9IEFycmF5LmlzQXJyYXkoZmllbGRzKSA/IGZpZWxkcy5qb2luKCcsJykgOiBmaWVsZHM7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnZmV0Y2hMaW5rcycsIHN0ckZpZWxkcyk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBncmFwaHF1ZXJ5IHRvIHF1ZXJ5IGZvciB0aGlzIFNlYXJjaEZvcm0uIFRoaXMgaXMgYW4gb3B0aW9uYWwgbWV0aG9kLlxuICAgICAqL1xuICAgIFNlYXJjaEZvcm0ucHJvdG90eXBlLmdyYXBoUXVlcnkgPSBmdW5jdGlvbiAocXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdncmFwaFF1ZXJ5JywgcXVlcnkpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbGFuZ3VhZ2UgdG8gcXVlcnkgZm9yIHRoaXMgU2VhcmNoRm9ybS4gVGhpcyBpcyBhbiBvcHRpb25hbCBtZXRob2QuXG4gICAgICovXG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUubGFuZyA9IGZ1bmN0aW9uIChsYW5nQ29kZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXQoJ2xhbmcnLCBsYW5nQ29kZSk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYWdlIG51bWJlciB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5wYWdlID0gZnVuY3Rpb24gKHApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KCdwYWdlJywgcCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIHRoZSBkb2N1bWVudHMgZXhjZXB0IGZvciB0aG9zZSBhZnRlciB0aGUgc3BlY2lmaWVkIGRvY3VtZW50IGluIHRoZSBsaXN0LiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5hZnRlciA9IGZ1bmN0aW9uIChkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldCgnYWZ0ZXInLCBkb2N1bWVudElkKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIG9yZGVyaW5ncyB0byBxdWVyeSBmb3IgdGhpcyBTZWFyY2hGb3JtLiBUaGlzIGlzIGFuIG9wdGlvbmFsIG1ldGhvZC5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5vcmRlcmluZ3MgPSBmdW5jdGlvbiAob3JkZXJpbmdzKSB7XG4gICAgICAgIGlmICghb3JkZXJpbmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCgnb3JkZXJpbmdzJywgXCJbXCIgKyBvcmRlcmluZ3Muam9pbignLCcpICsgXCJdXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBCdWlsZCB0aGUgVVJMIHRvIHF1ZXJ5XG4gICAgICovXG4gICAgU2VhcmNoRm9ybS5wcm90b3R5cGUudXJsID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXJsID0gdGhpcy5mb3JtLmFjdGlvbjtcbiAgICAgICAgaWYgKHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgdmFyIHNlcCA9ICh1cmwuaW5kZXhPZignPycpID4gLTEgPyAnJicgOiAnPycpO1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHRoaXMuZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5kYXRhLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZXMgPSB0aGlzLmRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwgKz0gc2VwICsga2V5ICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VwID0gJyYnO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1cmw7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBTdWJtaXRzIHRoZSBxdWVyeSwgYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBTZWFyY2hGb3JtLnByb3RvdHlwZS5zdWJtaXQgPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cENsaWVudC5jYWNoZWRSZXF1ZXN0KHRoaXMudXJsKCkpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCByZXNwb25zZSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIFNlYXJjaEZvcm07XG59KCkpO1xuXG52YXIgT1BFUkFUT1IgPSB7XG4gICAgYXQ6ICdhdCcsXG4gICAgbm90OiAnbm90JyxcbiAgICBtaXNzaW5nOiAnbWlzc2luZycsXG4gICAgaGFzOiAnaGFzJyxcbiAgICBhbnk6ICdhbnknLFxuICAgIGluOiAnaW4nLFxuICAgIGZ1bGx0ZXh0OiAnZnVsbHRleHQnLFxuICAgIHNpbWlsYXI6ICdzaW1pbGFyJyxcbiAgICBudW1iZXJHdDogJ251bWJlci5ndCcsXG4gICAgbnVtYmVyTHQ6ICdudW1iZXIubHQnLFxuICAgIG51bWJlckluUmFuZ2U6ICdudW1iZXIuaW5SYW5nZScsXG4gICAgZGF0ZUJlZm9yZTogJ2RhdGUuYmVmb3JlJyxcbiAgICBkYXRlQWZ0ZXI6ICdkYXRlLmFmdGVyJyxcbiAgICBkYXRlQmV0d2VlbjogJ2RhdGUuYmV0d2VlbicsXG4gICAgZGF0ZURheU9mTW9udGg6ICdkYXRlLmRheS1vZi1tb250aCcsXG4gICAgZGF0ZURheU9mTW9udGhBZnRlcjogJ2RhdGUuZGF5LW9mLW1vbnRoLWFmdGVyJyxcbiAgICBkYXRlRGF5T2ZNb250aEJlZm9yZTogJ2RhdGUuZGF5LW9mLW1vbnRoLWJlZm9yZScsXG4gICAgZGF0ZURheU9mV2VlazogJ2RhdGUuZGF5LW9mLXdlZWsnLFxuICAgIGRhdGVEYXlPZldlZWtBZnRlcjogJ2RhdGUuZGF5LW9mLXdlZWstYWZ0ZXInLFxuICAgIGRhdGVEYXlPZldlZWtCZWZvcmU6ICdkYXRlLmRheS1vZi13ZWVrLWJlZm9yZScsXG4gICAgZGF0ZU1vbnRoOiAnZGF0ZS5tb250aCcsXG4gICAgZGF0ZU1vbnRoQmVmb3JlOiAnZGF0ZS5tb250aC1iZWZvcmUnLFxuICAgIGRhdGVNb250aEFmdGVyOiAnZGF0ZS5tb250aC1hZnRlcicsXG4gICAgZGF0ZVllYXI6ICdkYXRlLnllYXInLFxuICAgIGRhdGVIb3VyOiAnZGF0ZS5ob3VyJyxcbiAgICBkYXRlSG91ckJlZm9yZTogJ2RhdGUuaG91ci1iZWZvcmUnLFxuICAgIGRhdGVIb3VyQWZ0ZXI6ICdkYXRlLmhvdXItYWZ0ZXInLFxuICAgIEdlb3BvaW50TmVhcjogJ2dlb3BvaW50Lm5lYXInLFxufTtcbmZ1bmN0aW9uIGVuY29kZSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBcIlxcXCJcIiArIHZhbHVlICsgXCJcXFwiXCI7XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUuZ2V0VGltZSgpLnRvU3RyaW5nKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIHZhbHVlLm1hcChmdW5jdGlvbiAodikgeyByZXR1cm4gZW5jb2RlKHYpOyB9KS5qb2luKCcsJykgKyBcIl1cIjtcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIlVuYWJsZSB0byBlbmNvZGUgXCIgKyB2YWx1ZSArIFwiIG9mIHR5cGUgXCIgKyB0eXBlb2YgdmFsdWUpO1xuICAgIH1cbn1cbnZhciBnZW9wb2ludCA9IHtcbiAgICBuZWFyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGxhdGl0dWRlLCBsb25naXR1ZGUsIHJhZGl1cykge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5HZW9wb2ludE5lYXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgbGF0aXR1ZGUgKyBcIiwgXCIgKyBsb25naXR1ZGUgKyBcIiwgXCIgKyByYWRpdXMgKyBcIildXCI7XG4gICAgfSxcbn07XG52YXIgZGF0ZSA9IHtcbiAgICBiZWZvcmU6IGZ1bmN0aW9uIChmcmFnbWVudCwgYmVmb3JlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVCZWZvcmUgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKGJlZm9yZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBhZnRlcjogZnVuY3Rpb24gKGZyYWdtZW50LCBhZnRlcikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlQWZ0ZXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKGFmdGVyKSArIFwiKV1cIjtcbiAgICB9LFxuICAgIGJldHdlZW46IGZ1bmN0aW9uIChmcmFnbWVudCwgYmVmb3JlLCBhZnRlcikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlQmV0d2VlbiArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoYmVmb3JlKSArIFwiLCBcIiArIGVuY29kZShhZnRlcikgKyBcIildXCI7XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGRheSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlRGF5T2ZNb250aCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBkYXkgKyBcIildXCI7XG4gICAgfSxcbiAgICBkYXlPZk1vbnRoQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgZGF5KSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVEYXlPZk1vbnRoQWZ0ZXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZGF5ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZNb250aEJlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBkYXkpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZURheU9mTW9udGhCZWZvcmUgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZGF5ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZXZWVrOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGRheSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlRGF5T2ZXZWVrICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShkYXkpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgZGF5T2ZXZWVrQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgZGF5KSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVEYXlPZldlZWtBZnRlciArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoZGF5KSArIFwiKV1cIjtcbiAgICB9LFxuICAgIGRheU9mV2Vla0JlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBkYXkpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZURheU9mV2Vla0JlZm9yZSArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUoZGF5KSArIFwiKV1cIjtcbiAgICB9LFxuICAgIG1vbnRoOiBmdW5jdGlvbiAoZnJhZ21lbnQsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVNb250aCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUobW9udGgpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgbW9udGhCZWZvcmU6IGZ1bmN0aW9uIChmcmFnbWVudCwgbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZU1vbnRoQmVmb3JlICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShtb250aCkgKyBcIildXCI7XG4gICAgfSxcbiAgICBtb250aEFmdGVyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIG1vbnRoKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVNb250aEFmdGVyICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZShtb250aCkgKyBcIildXCI7XG4gICAgfSxcbiAgICB5ZWFyOiBmdW5jdGlvbiAoZnJhZ21lbnQsIHllYXIpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuZGF0ZVllYXIgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgeWVhciArIFwiKV1cIjtcbiAgICB9LFxuICAgIGhvdXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgaG91cikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlSG91ciArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBob3VyICsgXCIpXVwiO1xuICAgIH0sXG4gICAgaG91ckJlZm9yZTogZnVuY3Rpb24gKGZyYWdtZW50LCBob3VyKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmRhdGVIb3VyQmVmb3JlICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGhvdXIgKyBcIildXCI7XG4gICAgfSxcbiAgICBob3VyQWZ0ZXI6IGZ1bmN0aW9uIChmcmFnbWVudCwgaG91cikge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5kYXRlSG91ckFmdGVyICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGhvdXIgKyBcIildXCI7XG4gICAgfSxcbn07XG52YXIgbnVtYmVyID0ge1xuICAgIGd0OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLm51bWJlckd0ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIHZhbHVlICsgXCIpXVwiO1xuICAgIH0sXG4gICAgbHQ6IGZ1bmN0aW9uIChmcmFnbWVudCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubnVtYmVyTHQgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgdmFsdWUgKyBcIildXCI7XG4gICAgfSxcbiAgICBpblJhbmdlOiBmdW5jdGlvbiAoZnJhZ21lbnQsIGJlZm9yZSwgYWZ0ZXIpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubnVtYmVySW5SYW5nZSArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBiZWZvcmUgKyBcIiwgXCIgKyBhZnRlciArIFwiKV1cIjtcbiAgICB9LFxufTtcbnZhciBQcmVkaWNhdGVzID0ge1xuICAgIGF0OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBcIltcIiArIE9QRVJBVE9SLmF0ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZSh2YWx1ZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBub3Q6IGZ1bmN0aW9uIChmcmFnbWVudCwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1Iubm90ICsgXCIoXCIgKyBmcmFnbWVudCArIFwiLCBcIiArIGVuY29kZSh2YWx1ZSkgKyBcIildXCI7XG4gICAgfSxcbiAgICBtaXNzaW5nOiBmdW5jdGlvbiAoZnJhZ21lbnQpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IubWlzc2luZyArIFwiKFwiICsgZnJhZ21lbnQgKyBcIildXCI7XG4gICAgfSxcbiAgICBoYXM6IGZ1bmN0aW9uIChmcmFnbWVudCkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5oYXMgKyBcIihcIiArIGZyYWdtZW50ICsgXCIpXVwiO1xuICAgIH0sXG4gICAgYW55OiBmdW5jdGlvbiAoZnJhZ21lbnQsIHZhbHVlcykge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5hbnkgKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKHZhbHVlcykgKyBcIildXCI7XG4gICAgfSxcbiAgICBpbjogZnVuY3Rpb24gKGZyYWdtZW50LCB2YWx1ZXMpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1IuaW4gKyBcIihcIiArIGZyYWdtZW50ICsgXCIsIFwiICsgZW5jb2RlKHZhbHVlcykgKyBcIildXCI7XG4gICAgfSxcbiAgICBmdWxsdGV4dDogZnVuY3Rpb24gKGZyYWdtZW50LCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gXCJbXCIgKyBPUEVSQVRPUi5mdWxsdGV4dCArIFwiKFwiICsgZnJhZ21lbnQgKyBcIiwgXCIgKyBlbmNvZGUodmFsdWUpICsgXCIpXVwiO1xuICAgIH0sXG4gICAgc2ltaWxhcjogZnVuY3Rpb24gKGRvY3VtZW50SWQsIG1heFJlc3VsdHMpIHtcbiAgICAgICAgcmV0dXJuIFwiW1wiICsgT1BFUkFUT1Iuc2ltaWxhciArIFwiKFxcXCJcIiArIGRvY3VtZW50SWQgKyBcIlxcXCIsIFwiICsgbWF4UmVzdWx0cyArIFwiKV1cIjtcbiAgICB9LFxuICAgIGRhdGU6IGRhdGUsXG4gICAgZGF0ZUJlZm9yZTogZGF0ZS5iZWZvcmUsXG4gICAgZGF0ZUFmdGVyOiBkYXRlLmFmdGVyLFxuICAgIGRhdGVCZXR3ZWVuOiBkYXRlLmJldHdlZW4sXG4gICAgZGF5T2ZNb250aDogZGF0ZS5kYXlPZk1vbnRoLFxuICAgIGRheU9mTW9udGhBZnRlcjogZGF0ZS5kYXlPZk1vbnRoQWZ0ZXIsXG4gICAgZGF5T2ZNb250aEJlZm9yZTogZGF0ZS5kYXlPZk1vbnRoQmVmb3JlLFxuICAgIGRheU9mV2VlazogZGF0ZS5kYXlPZldlZWssXG4gICAgZGF5T2ZXZWVrQWZ0ZXI6IGRhdGUuZGF5T2ZXZWVrQWZ0ZXIsXG4gICAgZGF5T2ZXZWVrQmVmb3JlOiBkYXRlLmRheU9mV2Vla0JlZm9yZSxcbiAgICBtb250aDogZGF0ZS5tb250aCxcbiAgICBtb250aEJlZm9yZTogZGF0ZS5tb250aEJlZm9yZSxcbiAgICBtb250aEFmdGVyOiBkYXRlLm1vbnRoQWZ0ZXIsXG4gICAgeWVhcjogZGF0ZS55ZWFyLFxuICAgIGhvdXI6IGRhdGUuaG91cixcbiAgICBob3VyQmVmb3JlOiBkYXRlLmhvdXJCZWZvcmUsXG4gICAgaG91ckFmdGVyOiBkYXRlLmhvdXJBZnRlcixcbiAgICBudW1iZXI6IG51bWJlcixcbiAgICBndDogbnVtYmVyLmd0LFxuICAgIGx0OiBudW1iZXIubHQsXG4gICAgaW5SYW5nZTogbnVtYmVyLmluUmFuZ2UsXG4gICAgbmVhcjogZ2VvcG9pbnQubmVhcixcbiAgICBnZW9wb2ludDogZ2VvcG9pbnQsXG59O1xuXG4vKiBlc2xpbnQtZGlzYWJsZSAqL1xuLy8gU29tZSBwb3J0aW9ucyBvZiBjb2RlIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2pzaHR0cC9jb29raWVcbnZhciBkZWNvZGUgPSBkZWNvZGVVUklDb21wb25lbnQ7XG5mdW5jdGlvbiB0cnlEZWNvZGUoc3RyLCBkZWNvZGUpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlKHN0cik7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxufVxuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBzdHIgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ2FyZ3VtZW50IHN0ciBtdXN0IGJlIGEgc3RyaW5nJyk7XG4gICAgfVxuICAgIHZhciBvYmogPSB7fTtcbiAgICB2YXIgb3B0ID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcGFpcnMgPSBzdHIuc3BsaXQoLzsgKi8pO1xuICAgIHZhciBkZWMgPSBvcHQuZGVjb2RlIHx8IGRlY29kZTtcbiAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uIChwYWlyKSB7XG4gICAgICAgIHZhciBlcV9pZHggPSBwYWlyLmluZGV4T2YoJz0nKTtcbiAgICAgICAgLy8gc2tpcCB0aGluZ3MgdGhhdCBkb24ndCBsb29rIGxpa2Uga2V5PXZhbHVlXG4gICAgICAgIGlmIChlcV9pZHggPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxX2lkeCkudHJpbSgpO1xuICAgICAgICB2YXIgdmFsID0gcGFpci5zdWJzdHIoKytlcV9pZHgsIHBhaXIubGVuZ3RoKS50cmltKCk7XG4gICAgICAgIC8vIHF1b3RlZCB2YWx1ZXNcbiAgICAgICAgaWYgKCdcIicgPT0gdmFsWzBdKSB7XG4gICAgICAgICAgICB2YWwgPSB2YWwuc2xpY2UoMSwgLTEpO1xuICAgICAgICB9XG4gICAgICAgIC8vIG9ubHkgYXNzaWduIG9uY2VcbiAgICAgICAgaWYgKHVuZGVmaW5lZCA9PSBvYmpba2V5XSkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSB0cnlEZWNvZGUodmFsLCBkZWMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG9iajtcbn1cbnZhciBDb29raWVzID0geyBwYXJzZTogcGFyc2UgfTtcblxuZnVuY3Rpb24gY3JlYXRlUHJldmlld1Jlc29sdmVyKHRva2VuLCBkb2N1bWVudElkLCBnZXREb2NCeUlEKSB7XG4gICAgdmFyIHJlc29sdmUgPSBmdW5jdGlvbiAobGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICBpZiAoZG9jdW1lbnRJZCAmJiBnZXREb2NCeUlEKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RG9jQnlJRChkb2N1bWVudElkLCB7IHJlZjogdG9rZW4gfSkudGhlbihmdW5jdGlvbiAoZG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIWRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGNiICYmIGNiKG51bGwsIGRlZmF1bHRVcmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdFVybDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAobGlua1Jlc29sdmVyICYmIGxpbmtSZXNvbHZlcihkb2N1bWVudCkpIHx8IGRvY3VtZW50LnVybCB8fCBkZWZhdWx0VXJsO1xuICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdXJsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkZWZhdWx0VXJsKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHsgdG9rZW46IHRva2VuLCBkb2N1bWVudElkOiBkb2N1bWVudElkLCByZXNvbHZlOiByZXNvbHZlIH07XG59XG5cbnZhciBQUkVWSUVXX0NPT0tJRSA9ICdpby5wcmlzbWljLnByZXZpZXcnO1xudmFyIEVYUEVSSU1FTlRfQ09PS0lFID0gJ2lvLnByaXNtaWMuZXhwZXJpbWVudCc7XG52YXIgUmVzb2x2ZWRBcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gUmVzb2x2ZWRBcGkoZGF0YSwgaHR0cENsaWVudCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgICAgICB0aGlzLm1hc3RlclJlZiA9IGRhdGEucmVmcy5maWx0ZXIoZnVuY3Rpb24gKHJlZikgeyByZXR1cm4gcmVmLmlzTWFzdGVyUmVmOyB9KVswXTtcbiAgICAgICAgdGhpcy5leHBlcmltZW50cyA9IG5ldyBFeHBlcmltZW50cyhkYXRhLmV4cGVyaW1lbnRzKTtcbiAgICAgICAgdGhpcy5ib29rbWFya3MgPSBkYXRhLmJvb2ttYXJrcztcbiAgICAgICAgdGhpcy5odHRwQ2xpZW50ID0gaHR0cENsaWVudDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5yZWZzID0gZGF0YS5yZWZzO1xuICAgICAgICB0aGlzLnRhZ3MgPSBkYXRhLnRhZ3M7XG4gICAgICAgIHRoaXMudHlwZXMgPSBkYXRhLnR5cGVzO1xuICAgICAgICB0aGlzLmxhbmd1YWdlcyA9IGRhdGEubGFuZ3VhZ2VzO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgdXNlYWJsZSBmb3JtIGZyb20gaXRzIGlkLCBhcyBkZXNjcmliZWQgaW4gdGhlIFJFU1RmdWwgZGVzY3JpcHRpb24gb2YgdGhlIEFQSS5cbiAgICAgKiBGb3IgaW5zdGFuY2U6IGFwaS5mb3JtKFwiZXZlcnl0aGluZ1wiKSB3b3JrcyBvbiBldmVyeSByZXBvc2l0b3J5IChhcyBcImV2ZXJ5dGhpbmdcIiBleGlzdHMgYnkgZGVmYXVsdClcbiAgICAgKiBZb3UgY2FuIHRoZW4gY2hhaW4gdGhlIGNhbGxzOiBhcGkuZm9ybShcImV2ZXJ5dGhpbmdcIikucXVlcnkoJ1tbOmQgPSBhdChkb2N1bWVudC5pZCwgXCJVa0wwZ011dnpZVUFOQ3BmXCIpXV0nKS5yZWYocmVmKS5zdWJtaXQoKVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5mb3JtID0gZnVuY3Rpb24gKGZvcm1JZCkge1xuICAgICAgICB2YXIgZm9ybSA9IHRoaXMuZGF0YS5mb3Jtc1tmb3JtSWRdO1xuICAgICAgICBpZiAoZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBTZWFyY2hGb3JtKGZvcm0sIHRoaXMuaHR0cENsaWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZXZlcnl0aGluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGYgPSB0aGlzLmZvcm0oJ2V2ZXJ5dGhpbmcnKTtcbiAgICAgICAgaWYgKCFmKVxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGV2ZXJ5dGhpbmcgZm9ybScpO1xuICAgICAgICByZXR1cm4gZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFRoZSBJRCBvZiB0aGUgbWFzdGVyIHJlZiBvbiB0aGlzIHByaXNtaWMuaW8gQVBJLlxuICAgICAqIERvIG5vdCB1c2UgbGlrZSB0aGlzOiBzZWFyY2hGb3JtLnJlZihhcGkubWFzdGVyKCkpLlxuICAgICAqIEluc3RlYWQsIHNldCB5b3VyIHJlZiBvbmNlIGluIGEgdmFyaWFibGUsIGFuZCBjYWxsIGl0IHdoZW4geW91IG5lZWQgaXQ7IHRoaXMgd2lsbCBhbGxvdyB0byBjaGFuZ2UgdGhlIHJlZiB5b3UncmUgdmlld2luZyBlYXNpbHkgZm9yIHlvdXIgZW50aXJlIHBhZ2UuXG4gICAgICovXG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLm1hc3RlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubWFzdGVyUmVmLnJlZjtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHJlZiBJRCBmb3IgYSBnaXZlbiByZWYncyBsYWJlbC5cbiAgICAgKiBEbyBub3QgdXNlIGxpa2UgdGhpczogc2VhcmNoRm9ybS5yZWYoYXBpLnJlZihcIkZ1dHVyZSByZWxlYXNlIGxhYmVsXCIpKS5cbiAgICAgKiBJbnN0ZWFkLCBzZXQgeW91ciByZWYgb25jZSBpbiBhIHZhcmlhYmxlLCBhbmQgY2FsbCBpdCB3aGVuIHlvdSBuZWVkIGl0OyB0aGlzIHdpbGwgYWxsb3cgdG8gY2hhbmdlIHRoZSByZWYgeW91J3JlIHZpZXdpbmcgZWFzaWx5IGZvciB5b3VyIGVudGlyZSBwYWdlLlxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5yZWYgPSBmdW5jdGlvbiAobGFiZWwpIHtcbiAgICAgICAgdmFyIHJlZiA9IHRoaXMuZGF0YS5yZWZzLmZpbHRlcihmdW5jdGlvbiAocmVmKSB7IHJldHVybiByZWYubGFiZWwgPT09IGxhYmVsOyB9KVswXTtcbiAgICAgICAgcmV0dXJuIHJlZiA/IHJlZi5yZWYgOiBudWxsO1xuICAgIH07XG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLmN1cnJlbnRFeHBlcmltZW50ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5leHBlcmltZW50cy5jdXJyZW50KCk7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBRdWVyeSB0aGUgcmVwb3NpdG9yeVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgaWYgKGNiID09PSB2b2lkIDApIHsgY2IgPSBmdW5jdGlvbiAoKSB7IH07IH1cbiAgICAgICAgdmFyIF9hID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHsgb3B0aW9uczoge30sIGNhbGxiYWNrOiBvcHRpb25zT3JDYWxsYmFjayB9XG4gICAgICAgICAgICA6IHsgb3B0aW9uczogb3B0aW9uc09yQ2FsbGJhY2sgfHwge30sIGNhbGxiYWNrOiBjYiB9LCBvcHRpb25zID0gX2Eub3B0aW9ucywgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICAgICAgdmFyIGZvcm0gPSB0aGlzLmV2ZXJ5dGhpbmcoKTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGZvcm0gPSBmb3JtLnNldChrZXksIG9wdGlvbnNba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLnJlZikge1xuICAgICAgICAgICAgLy8gTG9vayBpbiBjb29raWVzIGlmIHdlIGhhdmUgYSByZWYgKHByZXZpZXcgb3IgZXhwZXJpbWVudClcbiAgICAgICAgICAgIHZhciBjb29raWVTdHJpbmcgPSAnJztcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMucmVxKSB7IC8vIE5vZGVKU1xuICAgICAgICAgICAgICAgIGNvb2tpZVN0cmluZyA9IHRoaXMub3B0aW9ucy5yZXEuaGVhZGVyc1snY29va2llJ10gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuZG9jdW1lbnQpIHsgLy8gQnJvd3NlclxuICAgICAgICAgICAgICAgIGNvb2tpZVN0cmluZyA9IHdpbmRvdy5kb2N1bWVudC5jb29raWUgfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgY29va2llcyA9IENvb2tpZXMucGFyc2UoY29va2llU3RyaW5nKTtcbiAgICAgICAgICAgIHZhciBwcmV2aWV3UmVmID0gY29va2llc1tQUkVWSUVXX0NPT0tJRV07XG4gICAgICAgICAgICB2YXIgZXhwZXJpbWVudFJlZiA9IHRoaXMuZXhwZXJpbWVudHMucmVmRnJvbUNvb2tpZShjb29raWVzW0VYUEVSSU1FTlRfQ09PS0lFXSk7XG4gICAgICAgICAgICBmb3JtID0gZm9ybS5yZWYocHJldmlld1JlZiB8fCBleHBlcmltZW50UmVmIHx8IHRoaXMubWFzdGVyUmVmLnJlZik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHEpIHtcbiAgICAgICAgICAgIGZvcm0ucXVlcnkocSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm0uc3VibWl0KGNhbGxiYWNrKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBkb2N1bWVudCByZXR1cm5lZCBieSB0aGUgZ2l2ZW4gcXVlcnlcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xhcnJheXxQcmVkaWNhdGV9IHRoZSBxdWVyeVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBhZGRpdGlvbmFsIHBhcmFtZXRlcnMuIEluIE5vZGVKUywgcGFzcyB0aGUgcmVxdWVzdCBhcyAncmVxJy5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayhlcnIsIGRvYylcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUucXVlcnlGaXJzdCA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgdmFyIF9hID0gdHlwZW9mIG9wdGlvbnNPckNhbGxiYWNrID09PSAnZnVuY3Rpb24nXG4gICAgICAgICAgICA/IHsgb3B0aW9uczoge30sIGNhbGxiYWNrOiBvcHRpb25zT3JDYWxsYmFjayB9XG4gICAgICAgICAgICA6IHsgb3B0aW9uczogb3B0aW9uc09yQ2FsbGJhY2sgfHwge30sIGNhbGxiYWNrOiBjYiB8fCAoZnVuY3Rpb24gKCkgeyB9KSB9LCBvcHRpb25zID0gX2Eub3B0aW9ucywgY2FsbGJhY2sgPSBfYS5jYWxsYmFjaztcbiAgICAgICAgb3B0aW9ucy5wYWdlID0gMTtcbiAgICAgICAgb3B0aW9ucy5wYWdlU2l6ZSA9IDE7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5KHEsIG9wdGlvbnMpLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB2YXIgZG9jdW1lbnQgPSByZXNwb25zZSAmJiByZXNwb25zZS5yZXN1bHRzICYmIHJlc3BvbnNlLnJlc3VsdHNbMF07XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCBkb2N1bWVudCk7XG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQ7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2FsbGJhY2soZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIGlkXG4gICAgICovXG4gICAgUmVzb2x2ZWRBcGkucHJvdG90eXBlLmdldEJ5SUQgPSBmdW5jdGlvbiAoaWQsIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgPyBfX2Fzc2lnbih7fSwgbWF5YmVPcHRpb25zKSA6IHt9O1xuICAgICAgICBpZiAoIW9wdGlvbnMubGFuZylcbiAgICAgICAgICAgIG9wdGlvbnMubGFuZyA9ICcqJztcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlGaXJzdChQcmVkaWNhdGVzLmF0KCdkb2N1bWVudC5pZCcsIGlkKSwgb3B0aW9ucywgY2IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgbXVsdGlwbGUgZG9jdW1lbnRzIGZyb20gYW4gYXJyYXkgb2YgaWRcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0QnlJRHMgPSBmdW5jdGlvbiAoaWRzLCBtYXliZU9wdGlvbnMsIGNiKSB7XG4gICAgICAgIHZhciBvcHRpb25zID0gbWF5YmVPcHRpb25zID8gX19hc3NpZ24oe30sIG1heWJlT3B0aW9ucykgOiB7fTtcbiAgICAgICAgaWYgKCFvcHRpb25zLmxhbmcpXG4gICAgICAgICAgICBvcHRpb25zLmxhbmcgPSAnKic7XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5KFByZWRpY2F0ZXMuaW4oJ2RvY3VtZW50LmlkJywgaWRzKSwgb3B0aW9ucywgY2IpO1xuICAgIH07XG4gICAgLyoqXG4gICAgICogUmV0cmlldmUgdGhlIGRvY3VtZW50IHdpdGggdGhlIGdpdmVuIHVpZFxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5nZXRCeVVJRCA9IGZ1bmN0aW9uICh0eXBlLCB1aWQsIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgPyBfX2Fzc2lnbih7fSwgbWF5YmVPcHRpb25zKSA6IHt9O1xuICAgICAgICBpZiAob3B0aW9ucy5sYW5nID09PSAnKicpXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJGT1JCSURERU4uIFlvdSBjYW4ndCB1c2UgZ2V0QnlVSUQgd2l0aCAqLCB1c2UgdGhlIHByZWRpY2F0ZXMgaW5zdGVhZC5cIik7XG4gICAgICAgIGlmICghb3B0aW9ucy5wYWdlKVxuICAgICAgICAgICAgb3B0aW9ucy5wYWdlID0gMTtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlGaXJzdChQcmVkaWNhdGVzLmF0KFwibXkuXCIgKyB0eXBlICsgXCIudWlkXCIsIHVpZCksIG9wdGlvbnMsIGNiKTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIFJldHJpZXZlIHRoZSBzaW5nbGV0b24gZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gdHlwZVxuICAgICAqL1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5nZXRTaW5nbGUgPSBmdW5jdGlvbiAodHlwZSwgbWF5YmVPcHRpb25zLCBjYikge1xuICAgICAgICB2YXIgb3B0aW9ucyA9IG1heWJlT3B0aW9ucyA/IF9fYXNzaWduKHt9LCBtYXliZU9wdGlvbnMpIDoge307XG4gICAgICAgIHJldHVybiB0aGlzLnF1ZXJ5Rmlyc3QoUHJlZGljYXRlcy5hdCgnZG9jdW1lbnQudHlwZScsIHR5cGUpLCBvcHRpb25zLCBjYik7XG4gICAgfTtcbiAgICAvKipcbiAgICAgKiBSZXRyaWV2ZSB0aGUgZG9jdW1lbnQgd2l0aCB0aGUgZ2l2ZW4gYm9va21hcmtcbiAgICAgKi9cbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0Qm9va21hcmsgPSBmdW5jdGlvbiAoYm9va21hcmssIG1heWJlT3B0aW9ucywgY2IpIHtcbiAgICAgICAgdmFyIGlkID0gdGhpcy5kYXRhLmJvb2ttYXJrc1tib29rbWFya107XG4gICAgICAgIGlmIChpZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QnlJRChpZCwgbWF5YmVPcHRpb25zLCBjYik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ0Vycm9yIHJldHJpZXZpbmcgYm9va21hcmtlZCBpZCcpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZXNvbHZlZEFwaS5wcm90b3R5cGUuZ2V0UHJldmlld1Jlc29sdmVyID0gZnVuY3Rpb24gKHRva2VuLCBkb2N1bWVudElkKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVQcmV2aWV3UmVzb2x2ZXIodG9rZW4sIGRvY3VtZW50SWQsIHRoaXMuZ2V0QnlJRC5iaW5kKHRoaXMpKTtcbiAgICB9O1xuICAgIFJlc29sdmVkQXBpLnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbiA9IGZ1bmN0aW9uICh0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBjb25zb2xlLndhcm4oJ3ByZXZpZXdTZXNzaW9uIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgZ2V0UHJldmlld1Jlc29sdmVyIGZ1bmN0aW9uLicpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgX3RoaXMuaHR0cENsaWVudC5yZXF1ZXN0KHRva2VuLCBmdW5jdGlvbiAoZSwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IoZSk7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lm1haW5Eb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2IgJiYgY2IobnVsbCwgZGVmYXVsdFVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGRlZmF1bHRVcmwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmdldEJ5SUQocmVzdWx0Lm1haW5Eb2N1bWVudCwgeyByZWY6IHRva2VuIH0pLnRoZW4oZnVuY3Rpb24gKGRvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFkb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCBkZWZhdWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShkZWZhdWx0VXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1cmwgPSAobGlua1Jlc29sdmVyICYmIGxpbmtSZXNvbHZlcihkb2N1bWVudCkpIHx8IGRvY3VtZW50LnVybCB8fCBkZWZhdWx0VXJsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYiAmJiBjYihudWxsLCB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHVybCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZXNvbHZlZEFwaTtcbn0oKSk7XG5cbi8qIGVzbGludC1kaXNhYmxlICovXG4vKipcbiogQSBkb3VibHkgbGlua2VkIGxpc3QtYmFzZWQgTGVhc3QgUmVjZW50bHkgVXNlZCAoTFJVKSBjYWNoZS4gV2lsbCBrZWVwIG1vc3RcbiogcmVjZW50bHkgdXNlZCBpdGVtcyB3aGlsZSBkaXNjYXJkaW5nIGxlYXN0IHJlY2VudGx5IHVzZWQgaXRlbXMgd2hlbiBpdHMgbGltaXRcbiogaXMgcmVhY2hlZC5cbipcbiogTGljZW5zZWQgdW5kZXIgTUlULiBDb3B5cmlnaHQgKGMpIDIwMTAgUmFzbXVzIEFuZGVyc3NvbiA8aHR0cDovL2h1bmNoLnNlLz5cbiogVHlwZXNjcmlwdC1pZmllZCBieSBPbGVrc2FuZHIgTmlraXRpbiA8aHR0cHM6Ly90dm9yaS5pbmZvPlxuKlxuKiBJbGx1c3RyYXRpb24gb2YgdGhlIGRlc2lnbjpcbipcbiogICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnkgICAgICAgICAgICAgZW50cnlcbiogICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fICAgICAgICAgICAgX19fX19fXG4qICAgICAgfCBoZWFkIHwubmV3ZXIgPT4gfCAgICAgIHwubmV3ZXIgPT4gfCAgICAgIHwubmV3ZXIgPT4gfCB0YWlsIHxcbiogICAgICB8ICBBICAgfCAgICAgICAgICB8ICBCICAgfCAgICAgICAgICB8ICBDICAgfCAgICAgICAgICB8ICBEICAgfFxuKiAgICAgIHxfX19fX198IDw9IG9sZGVyLnxfX19fX198IDw9IG9sZGVyLnxfX19fX198IDw9IG9sZGVyLnxfX19fX198XG4qXG4qICByZW1vdmVkICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgPC0tICA8LS0gIDwtLSAgYWRkZWRcbiovXG5mdW5jdGlvbiBNYWtlTFJVQ2FjaGUobGltaXQpIHtcbiAgICByZXR1cm4gbmV3IExSVUNhY2hlKGxpbWl0KTtcbn1cbmZ1bmN0aW9uIExSVUNhY2hlKGxpbWl0KSB7XG4gICAgLy8gQ3VycmVudCBzaXplIG9mIHRoZSBjYWNoZS4gKFJlYWQtb25seSkuXG4gICAgdGhpcy5zaXplID0gMDtcbiAgICAvLyBNYXhpbXVtIG51bWJlciBvZiBpdGVtcyB0aGlzIGNhY2hlIGNhbiBob2xkLlxuICAgIHRoaXMubGltaXQgPSBsaW1pdDtcbiAgICB0aGlzLl9rZXltYXAgPSB7fTtcbn1cbi8qKlxuICogUHV0IDx2YWx1ZT4gaW50byB0aGUgY2FjaGUgYXNzb2NpYXRlZCB3aXRoIDxrZXk+LiBSZXR1cm5zIHRoZSBlbnRyeSB3aGljaCB3YXNcbiAqIHJlbW92ZWQgdG8gbWFrZSByb29tIGZvciB0aGUgbmV3IGVudHJ5LiBPdGhlcndpc2UgdW5kZWZpbmVkIGlzIHJldHVybmVkXG4gKiAoaS5lLiBpZiB0aGVyZSB3YXMgZW5vdWdoIHJvb20gYWxyZWFkeSkuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBlbnRyeSA9IHsga2V5OiBrZXksIHZhbHVlOiB2YWx1ZSB9O1xuICAgIC8vIE5vdGU6IE5vIHByb3RlY3Rpb24gYWdhaW5zIHJlcGxhY2luZywgYW5kIHRodXMgb3JwaGFuIGVudHJpZXMuIEJ5IGRlc2lnbi5cbiAgICB0aGlzLl9rZXltYXBba2V5XSA9IGVudHJ5O1xuICAgIGlmICh0aGlzLnRhaWwpIHtcbiAgICAgICAgLy8gbGluayBwcmV2aW91cyB0YWlsIHRvIHRoZSBuZXcgdGFpbCAoZW50cnkpXG4gICAgICAgIHRoaXMudGFpbC5uZXdlciA9IGVudHJ5O1xuICAgICAgICBlbnRyeS5vbGRlciA9IHRoaXMudGFpbDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIC8vIHdlJ3JlIGZpcnN0IGluIC0tIHlheVxuICAgICAgICB0aGlzLmhlYWQgPSBlbnRyeTtcbiAgICB9XG4gICAgLy8gYWRkIG5ldyBlbnRyeSB0byB0aGUgZW5kIG9mIHRoZSBsaW5rZWQgbGlzdCAtLSBpdCdzIG5vdyB0aGUgZnJlc2hlc3QgZW50cnkuXG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgaWYgKHRoaXMuc2l6ZSA9PT0gdGhpcy5saW1pdCkge1xuICAgICAgICAvLyB3ZSBoaXQgdGhlIGxpbWl0IC0tIHJlbW92ZSB0aGUgaGVhZFxuICAgICAgICByZXR1cm4gdGhpcy5zaGlmdCgpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy8gaW5jcmVhc2UgdGhlIHNpemUgY291bnRlclxuICAgICAgICB0aGlzLnNpemUrKztcbiAgICB9XG59O1xuLyoqXG4gKiBQdXJnZSB0aGUgbGVhc3QgcmVjZW50bHkgdXNlZCAob2xkZXN0KSBlbnRyeSBmcm9tIHRoZSBjYWNoZS4gUmV0dXJucyB0aGVcbiAqIHJlbW92ZWQgZW50cnkgb3IgdW5kZWZpbmVkIGlmIHRoZSBjYWNoZSB3YXMgZW1wdHkuXG4gKlxuICogSWYgeW91IG5lZWQgdG8gcGVyZm9ybSBhbnkgZm9ybSBvZiBmaW5hbGl6YXRpb24gb2YgcHVyZ2VkIGl0ZW1zLCB0aGlzIGlzIGFcbiAqIGdvb2QgcGxhY2UgdG8gZG8gaXQuIFNpbXBseSBvdmVycmlkZS9yZXBsYWNlIHRoaXMgZnVuY3Rpb246XG4gKlxuICogICB2YXIgYyA9IG5ldyBMUlVDYWNoZSgxMjMpO1xuICogICBjLnNoaWZ0ID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgdmFyIGVudHJ5ID0gTFJVQ2FjaGUucHJvdG90eXBlLnNoaWZ0LmNhbGwodGhpcyk7XG4gKiAgICAgZG9Tb21ldGhpbmdXaXRoKGVudHJ5KTtcbiAqICAgICByZXR1cm4gZW50cnk7XG4gKiAgIH1cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLnNoaWZ0ID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIHRvZG86IGhhbmRsZSBzcGVjaWFsIGNhc2Ugd2hlbiBsaW1pdCA9PSAxXG4gICAgdmFyIGVudHJ5ID0gdGhpcy5oZWFkO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBpZiAodGhpcy5oZWFkLm5ld2VyKSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB0aGlzLmhlYWQubmV3ZXI7XG4gICAgICAgICAgICB0aGlzLmhlYWQub2xkZXIgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhlYWQgPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3Qgc3Ryb25nIHJlZmVyZW5jZSB0byA8ZW50cnk+IGFuZCByZW1vdmUgbGlua3MgZnJvbSB0aGUgcHVyZ2VkXG4gICAgICAgIC8vIGVudHJ5IGJlaW5nIHJldHVybmVkOlxuICAgICAgICBlbnRyeS5uZXdlciA9IGVudHJ5Lm9sZGVyID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBkZWxldGUgaXMgc2xvdywgYnV0IHdlIG5lZWQgdG8gZG8gdGhpcyB0byBhdm9pZCB1bmNvbnRyb2xsYWJsZSBncm93dGg6XG4gICAgICAgIGRlbGV0ZSB0aGlzLl9rZXltYXBbZW50cnkua2V5XTtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3B1cmdpbmcgJywgZW50cnkua2V5KTtcbiAgICByZXR1cm4gZW50cnk7XG59O1xuLyoqXG4gKiBHZXQgYW5kIHJlZ2lzdGVyIHJlY2VudCB1c2Ugb2YgPGtleT4uIFJldHVybnMgdGhlIHZhbHVlIGFzc29jaWF0ZWQgd2l0aCA8a2V5PlxuICogb3IgdW5kZWZpbmVkIGlmIG5vdCBpbiBjYWNoZS5cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIHJldHVybkVudHJ5KSB7XG4gICAgLy8gRmlyc3QsIGZpbmQgb3VyIGNhY2hlIGVudHJ5XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5fa2V5bWFwW2tleV07XG4gICAgaWYgKGVudHJ5ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybjsgLy8gTm90IGNhY2hlZC4gU29ycnkuXG4gICAgLy8gQXMgPGtleT4gd2FzIGZvdW5kIGluIHRoZSBjYWNoZSwgcmVnaXN0ZXIgaXQgYXMgYmVpbmcgcmVxdWVzdGVkIHJlY2VudGx5XG4gICAgaWYgKGVudHJ5ID09PSB0aGlzLnRhaWwpIHtcbiAgICAgICAgLy8gQWxyZWFkeSB0aGUgbW9zdCByZWNlbnRseSB1c2VkIGVudHJ5LCBzbyBubyBuZWVkIHRvIHVwZGF0ZSB0aGUgbGlzdFxuICAgICAgICByZXR1cm4gcmV0dXJuRW50cnkgPyBlbnRyeSA6IGVudHJ5LnZhbHVlO1xuICAgIH1cbiAgICAvLyBIRUFELS0tLS0tLS0tLS0tLS1UQUlMXG4gICAgLy8gICA8Lm9sZGVyICAgLm5ld2VyPlxuICAgIC8vICA8LS0tIGFkZCBkaXJlY3Rpb24gLS1cbiAgICAvLyAgIEEgIEIgIEMgIDxEPiAgRVxuICAgIGlmIChlbnRyeS5uZXdlcikge1xuICAgICAgICBpZiAoZW50cnkgPT09IHRoaXMuaGVhZClcbiAgICAgICAgICAgIHRoaXMuaGVhZCA9IGVudHJ5Lm5ld2VyO1xuICAgICAgICBlbnRyeS5uZXdlci5vbGRlciA9IGVudHJ5Lm9sZGVyOyAvLyBDIDwtLSBFLlxuICAgIH1cbiAgICBpZiAoZW50cnkub2xkZXIpXG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXI7IC8vIEMuIC0tPiBFXG4gICAgZW50cnkubmV3ZXIgPSB1bmRlZmluZWQ7IC8vIEQgLS14XG4gICAgZW50cnkub2xkZXIgPSB0aGlzLnRhaWw7IC8vIEQuIC0tPiBFXG4gICAgaWYgKHRoaXMudGFpbClcbiAgICAgICAgdGhpcy50YWlsLm5ld2VyID0gZW50cnk7IC8vIEUuIDwtLSBEXG4gICAgdGhpcy50YWlsID0gZW50cnk7XG4gICAgcmV0dXJuIHJldHVybkVudHJ5ID8gZW50cnkgOiBlbnRyeS52YWx1ZTtcbn07XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGb2xsb3dpbmcgY29kZSBpcyBvcHRpb25hbCBhbmQgY2FuIGJlIHJlbW92ZWQgd2l0aG91dCBicmVha2luZyB0aGUgY29yZVxuLy8gZnVuY3Rpb25hbGl0eS5cbi8qKlxuICogQ2hlY2sgaWYgPGtleT4gaXMgaW4gdGhlIGNhY2hlIHdpdGhvdXQgcmVnaXN0ZXJpbmcgcmVjZW50IHVzZS4gRmVhc2libGUgaWZcbiAqIHlvdSBkbyBub3Qgd2FudCB0byBjaGFnZSB0aGUgc3RhdGUgb2YgdGhlIGNhY2hlLCBidXQgb25seSBcInBlZWtcIiBhdCBpdC5cbiAqIFJldHVybnMgdGhlIGVudHJ5IGFzc29jaWF0ZWQgd2l0aCA8a2V5PiBpZiBmb3VuZCwgb3IgdW5kZWZpbmVkIGlmIG5vdCBmb3VuZC5cbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgcmV0dXJuIHRoaXMuX2tleW1hcFtrZXldO1xufTtcbi8qKlxuICogVXBkYXRlIHRoZSB2YWx1ZSBvZiBlbnRyeSB3aXRoIDxrZXk+LiBSZXR1cm5zIHRoZSBvbGQgdmFsdWUsIG9yIHVuZGVmaW5lZCBpZlxuICogZW50cnkgd2FzIG5vdCBpbiB0aGUgY2FjaGUuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgIHZhciBvbGR2YWx1ZTtcbiAgICB2YXIgZW50cnkgPSB0aGlzLmdldChrZXksIHRydWUpO1xuICAgIGlmIChlbnRyeSkge1xuICAgICAgICBvbGR2YWx1ZSA9IGVudHJ5LnZhbHVlO1xuICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgb2xkdmFsdWUgPSB0aGlzLnB1dChrZXksIHZhbHVlKTtcbiAgICAgICAgaWYgKG9sZHZhbHVlKVxuICAgICAgICAgICAgb2xkdmFsdWUgPSBvbGR2YWx1ZS52YWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG9sZHZhbHVlO1xufTtcbi8qKlxuICogUmVtb3ZlIGVudHJ5IDxrZXk+IGZyb20gY2FjaGUgYW5kIHJldHVybiBpdHMgdmFsdWUuIFJldHVybnMgdW5kZWZpbmVkIGlmIG5vdFxuICogZm91bmQuXG4gKi9cbkxSVUNhY2hlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgdmFyIGVudHJ5ID0gdGhpcy5fa2V5bWFwW2tleV07XG4gICAgaWYgKCFlbnRyeSlcbiAgICAgICAgcmV0dXJuO1xuICAgIGRlbGV0ZSB0aGlzLl9rZXltYXBbZW50cnkua2V5XTsgLy8gbmVlZCB0byBkbyBkZWxldGUgdW5mb3J0dW5hdGVseVxuICAgIGlmIChlbnRyeS5uZXdlciAmJiBlbnRyeS5vbGRlcikge1xuICAgICAgICAvLyByZWxpbmsgdGhlIG9sZGVyIGVudHJ5IHdpdGggdGhlIG5ld2VyIGVudHJ5XG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gZW50cnkubmV3ZXI7XG4gICAgICAgIGVudHJ5Lm5ld2VyLm9sZGVyID0gZW50cnkub2xkZXI7XG4gICAgfVxuICAgIGVsc2UgaWYgKGVudHJ5Lm5ld2VyKSB7XG4gICAgICAgIC8vIHJlbW92ZSB0aGUgbGluayB0byB1c1xuICAgICAgICBlbnRyeS5uZXdlci5vbGRlciA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gbGluayB0aGUgbmV3ZXIgZW50cnkgdG8gaGVhZFxuICAgICAgICB0aGlzLmhlYWQgPSBlbnRyeS5uZXdlcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoZW50cnkub2xkZXIpIHtcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBsaW5rIHRvIHVzXG4gICAgICAgIGVudHJ5Lm9sZGVyLm5ld2VyID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyBsaW5rIHRoZSBuZXdlciBlbnRyeSB0byBoZWFkXG4gICAgICAgIHRoaXMudGFpbCA9IGVudHJ5Lm9sZGVyO1xuICAgIH1cbiAgICBlbHNlIHsgLy8gaWYoZW50cnkub2xkZXIgPT09IHVuZGVmaW5lZCAmJiBlbnRyeS5uZXdlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaGVhZCA9IHRoaXMudGFpbCA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdGhpcy5zaXplLS07XG4gICAgcmV0dXJuIGVudHJ5LnZhbHVlO1xufTtcbi8qKiBSZW1vdmVzIGFsbCBlbnRyaWVzICovXG5MUlVDYWNoZS5wcm90b3R5cGUucmVtb3ZlQWxsID0gZnVuY3Rpb24gKCkge1xuICAgIC8vIFRoaXMgc2hvdWxkIGJlIHNhZmUsIGFzIHdlIG5ldmVyIGV4cG9zZSBzdHJvbmcgcmVmcmVuY2VzIHRvIHRoZSBvdXRzaWRlXG4gICAgdGhpcy5oZWFkID0gdGhpcy50YWlsID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuc2l6ZSA9IDA7XG4gICAgdGhpcy5fa2V5bWFwID0ge307XG59O1xuLyoqXG4gKiBSZXR1cm4gYW4gYXJyYXkgY29udGFpbmluZyBhbGwga2V5cyBvZiBlbnRyaWVzIHN0b3JlZCBpbiB0aGUgY2FjaGUgb2JqZWN0LCBpblxuICogYXJiaXRyYXJ5IG9yZGVyLlxuICovXG5pZiAodHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgTFJVQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiBPYmplY3Qua2V5cyh0aGlzLl9rZXltYXApOyB9O1xufVxuZWxzZSB7XG4gICAgTFJVQ2FjaGUucHJvdG90eXBlLmtleXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGsgaW4gdGhpcy5fa2V5bWFwKVxuICAgICAgICAgICAga2V5cy5wdXNoKGspO1xuICAgICAgICByZXR1cm4ga2V5cztcbiAgICB9O1xufVxuLyoqXG4gKiBDYWxsIGBmdW5gIGZvciBlYWNoIGVudHJ5LiBTdGFydGluZyB3aXRoIHRoZSBuZXdlc3QgZW50cnkgaWYgYGRlc2NgIGlzIGEgdHJ1ZVxuICogdmFsdWUsIG90aGVyd2lzZSBzdGFydHMgd2l0aCB0aGUgb2xkZXN0IChoZWFkKSBlbnJ0eSBhbmQgbW92ZXMgdG93YXJkcyB0aGVcbiAqIHRhaWwuXG4gKlxuICogYGZ1bmAgaXMgY2FsbGVkIHdpdGggMyBhcmd1bWVudHMgaW4gdGhlIGNvbnRleHQgYGNvbnRleHRgOlxuICogICBgZnVuLmNhbGwoY29udGV4dCwgT2JqZWN0IGtleSwgT2JqZWN0IHZhbHVlLCBMUlVDYWNoZSBzZWxmKWBcbiAqL1xuTFJVQ2FjaGUucHJvdG90eXBlLmZvckVhY2ggPSBmdW5jdGlvbiAoZnVuLCBjb250ZXh0LCBkZXNjKSB7XG4gICAgdmFyIGVudHJ5O1xuICAgIGlmIChjb250ZXh0ID09PSB0cnVlKSB7XG4gICAgICAgIGRlc2MgPSB0cnVlO1xuICAgICAgICBjb250ZXh0ID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlb2YgY29udGV4dCAhPT0gJ29iamVjdCcpXG4gICAgICAgIGNvbnRleHQgPSB0aGlzO1xuICAgIGlmIChkZXNjKSB7XG4gICAgICAgIGVudHJ5ID0gdGhpcy50YWlsO1xuICAgICAgICB3aGlsZSAoZW50cnkpIHtcbiAgICAgICAgICAgIGZ1bi5jYWxsKGNvbnRleHQsIGVudHJ5LmtleSwgZW50cnkudmFsdWUsIHRoaXMpO1xuICAgICAgICAgICAgZW50cnkgPSBlbnRyeS5vbGRlcjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZW50cnkgPSB0aGlzLmhlYWQ7XG4gICAgICAgIHdoaWxlIChlbnRyeSkge1xuICAgICAgICAgICAgZnVuLmNhbGwoY29udGV4dCwgZW50cnkua2V5LCBlbnRyeS52YWx1ZSwgdGhpcyk7XG4gICAgICAgICAgICBlbnRyeSA9IGVudHJ5Lm5ld2VyO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8qKiBSZXR1cm5zIGEgSlNPTiAoYXJyYXkpIHJlcHJlc2VudGF0aW9uICovXG4vL0xSVUNhY2hlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4vLyAgICB2YXIgczogSUVudHJ5W10gPSBbXSwgZW50cnkgPSB0aGlzLmhlYWQ7XG4vLyAgICB3aGlsZSAoZW50cnkpIHtcbi8vICAgICAgICBzLnB1c2goeyBrZXk6IGVudHJ5LmtleS50b0pTT04oKSwgdmFsdWU6IGVudHJ5LnZhbHVlLnRvSlNPTigpIH0pO1xuLy8gICAgICAgIGVudHJ5ID0gZW50cnkubmV3ZXI7XG4vLyAgICB9XG4vLyAgICByZXR1cm4gcztcbi8vfTtcbi8qKiBSZXR1cm5zIGEgU3RyaW5nIHJlcHJlc2VudGF0aW9uICovXG5MUlVDYWNoZS5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHMgPSAnJywgZW50cnkgPSB0aGlzLmhlYWQ7XG4gICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICAgIHMgKz0gU3RyaW5nKGVudHJ5LmtleSkgKyAnOicgKyBlbnRyeS52YWx1ZTtcbiAgICAgICAgZW50cnkgPSBlbnRyeS5uZXdlcjtcbiAgICAgICAgaWYgKGVudHJ5KVxuICAgICAgICAgICAgcyArPSAnIDwgJztcbiAgICB9XG4gICAgcmV0dXJuIHM7XG59O1xuLy8gRXhwb3J0IG91cnNlbHZlc1xuLy9pZiAodHlwZW9mIHRoaXMgPT09ICdvYmplY3QnKSB0aGlzLkxSVUNhY2hlID0gTFJVQ2FjaGU7XG5cbnZhciBEZWZhdWx0QXBpQ2FjaGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gRGVmYXVsdEFwaUNhY2hlKGxpbWl0KSB7XG4gICAgICAgIGlmIChsaW1pdCA9PT0gdm9pZCAwKSB7IGxpbWl0ID0gMTAwMDsgfVxuICAgICAgICB0aGlzLmxydSA9IE1ha2VMUlVDYWNoZShsaW1pdCk7XG4gICAgfVxuICAgIERlZmF1bHRBcGlDYWNoZS5wcm90b3R5cGUuaXNFeHBpcmVkID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmxydS5nZXQoa2V5LCBmYWxzZSk7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmV4cGlyZWRJbiAhPT0gMCAmJiB2YWx1ZS5leHBpcmVkSW4gPCBEYXRlLm5vdygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uIChrZXksIGNiKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMubHJ1LmdldChrZXksIGZhbHNlKTtcbiAgICAgICAgaWYgKHZhbHVlICYmICF0aGlzLmlzRXhwaXJlZChrZXkpKSB7XG4gICAgICAgICAgICBjYihudWxsLCB2YWx1ZS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCB0dGwsIGNiKSB7XG4gICAgICAgIHRoaXMubHJ1LnJlbW92ZShrZXkpO1xuICAgICAgICB0aGlzLmxydS5wdXQoa2V5LCB7XG4gICAgICAgICAgICBkYXRhOiB2YWx1ZSxcbiAgICAgICAgICAgIGV4cGlyZWRJbjogdHRsID8gKERhdGUubm93KCkgKyAodHRsICogMTAwMCkpIDogMCxcbiAgICAgICAgfSk7XG4gICAgICAgIGNiICYmIGNiKG51bGwpO1xuICAgIH07XG4gICAgRGVmYXVsdEFwaUNhY2hlLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbiAoa2V5LCBjYikge1xuICAgICAgICB0aGlzLmxydS5yZW1vdmUoa2V5KTtcbiAgICAgICAgY2IgJiYgY2IobnVsbCk7XG4gICAgfTtcbiAgICBEZWZhdWx0QXBpQ2FjaGUucHJvdG90eXBlLmNsZWFyID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHRoaXMubHJ1LnJlbW92ZUFsbCgpO1xuICAgICAgICBjYiAmJiBjYihudWxsKTtcbiAgICB9O1xuICAgIHJldHVybiBEZWZhdWx0QXBpQ2FjaGU7XG59KCkpO1xuXG5mdW5jdGlvbiBmZXRjaFJlcXVlc3QodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgIHZhciBmZXRjaE9wdGlvbnMgPSB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy5wcm94eUFnZW50KSB7XG4gICAgICAgIGZldGNoT3B0aW9ucy5hZ2VudCA9IG9wdGlvbnMucHJveHlBZ2VudDtcbiAgICB9XG4gICAgLy8gY2FuJ3QgdXNlIG51bWJlciBiZWNhdXNlIG9mIE5vZGVKUyBnbG9iYWxzIGluY2x1ZGVkXG4gICAgdmFyIHRpbWVvdXRJZDtcbiAgICB2YXIgZmV0Y2hQcm9taXNlID0gY3Jvc3NGZXRjaCh1cmwsIGZldGNoT3B0aW9ucyk7XG4gICAgdmFyIHByb21pc2UgPSBvcHRpb25zLnRpbWVvdXRJbk1zID8gUHJvbWlzZS5yYWNlKFtcbiAgICAgICAgZmV0Y2hQcm9taXNlLFxuICAgICAgICBuZXcgUHJvbWlzZShmdW5jdGlvbiAoXywgcmVqZWN0KSB7XG4gICAgICAgICAgICB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlamVjdChuZXcgRXJyb3IodXJsICsgXCIgcmVzcG9uc2UgdGltZW91dFwiKSk7IH0sIG9wdGlvbnMudGltZW91dEluTXMpO1xuICAgICAgICB9KVxuICAgIF0pIDogZmV0Y2hQcm9taXNlO1xuICAgIHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZW91dElkKTtcbiAgICAgICAgaWYgKH5+KHJlc3Auc3RhdHVzIC8gMTAwICE9PSAyKSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBAZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAqIGRyYWluIHRoZSByZXNwIGJlZm9yZSB0aHJvd2luZyBhbiBlcnJvciB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuICAgICAgICAgICAgICogQGxpbmsgaHR0cHM6Ly9naXRodWIuY29tL2JpdGlubi9ub2RlLWZldGNoL2lzc3Vlcy84M1xuICAgICAgICAgICAgICovXG4gICAgICAgICAgICByZXR1cm4gcmVzcC50ZXh0KCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGUgPSBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIHN0YXR1cyBjb2RlIFtcIiArIHJlc3Auc3RhdHVzICsgXCJdIG9uIFVSTCBcIiArIHVybCk7XG4gICAgICAgICAgICAgICAgZS5zdGF0dXMgPSByZXNwLnN0YXR1cztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3AuanNvbigpLnRoZW4oZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgdmFyIGNhY2hlQ29udHJvbCA9IHJlc3AuaGVhZGVycy5nZXQoJ2NhY2hlLWNvbnRyb2wnKTtcbiAgICAgICAgICAgIHZhciBwYXJzZWRDYWNoZUNvbnRyb2wgPSBjYWNoZUNvbnRyb2wgPyAvbWF4LWFnZT0oXFxkKykvLmV4ZWMoY2FjaGVDb250cm9sKSA6IG51bGw7XG4gICAgICAgICAgICB2YXIgdHRsID0gcGFyc2VkQ2FjaGVDb250cm9sID8gcGFyc2VJbnQocGFyc2VkQ2FjaGVDb250cm9sWzFdLCAxMCkgOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICBjYWxsYmFjayhudWxsLCByZXN1bHQsIHJlc3AsIHR0bCk7XG4gICAgICAgIH0pO1xuICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGNhbGxiYWNrKGVycik7XG4gICAgfSk7XG59XG52YXIgRGVmYXVsdFJlcXVlc3RIYW5kbGVyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmF1bHRSZXF1ZXN0SGFuZGxlcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgfVxuICAgIERlZmF1bHRSZXF1ZXN0SGFuZGxlci5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIGZldGNoUmVxdWVzdCh1cmwsIHRoaXMub3B0aW9ucywgY2FsbGJhY2spO1xuICAgIH07XG4gICAgcmV0dXJuIERlZmF1bHRSZXF1ZXN0SGFuZGxlcjtcbn0oKSk7XG5cbnZhciBIdHRwQ2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEh0dHBDbGllbnQocmVxdWVzdEhhbmRsZXIsIGNhY2hlLCBwcm94eUFnZW50LCB0aW1lb3V0SW5Ncykge1xuICAgICAgICB0aGlzLnJlcXVlc3RIYW5kbGVyID0gcmVxdWVzdEhhbmRsZXIgfHwgbmV3IERlZmF1bHRSZXF1ZXN0SGFuZGxlcih7IHByb3h5QWdlbnQ6IHByb3h5QWdlbnQsIHRpbWVvdXRJbk1zOiB0aW1lb3V0SW5NcyB9KTtcbiAgICAgICAgdGhpcy5jYWNoZSA9IGNhY2hlIHx8IG5ldyBEZWZhdWx0QXBpQ2FjaGUoKTtcbiAgICB9XG4gICAgSHR0cENsaWVudC5wcm90b3R5cGUucmVxdWVzdCA9IGZ1bmN0aW9uICh1cmwsIGNhbGxiYWNrKSB7XG4gICAgICAgIHRoaXMucmVxdWVzdEhhbmRsZXIucmVxdWVzdCh1cmwsIGZ1bmN0aW9uIChlcnIsIHJlc3VsdCwgeGhyLCB0dGwpIHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayAmJiBjYWxsYmFjayhlcnIsIG51bGwsIHhociwgdHRsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrICYmIGNhbGxiYWNrKG51bGwsIHJlc3VsdCwgeGhyLCB0dGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxuICAgICAqIEZldGNoIGEgVVJMIGNvcnJlc3BvbmRpbmcgdG8gYSBxdWVyeSwgYW5kIHBhcnNlIHRoZSByZXNwb25zZSBhcyBhIFJlc3BvbnNlIG9iamVjdFxuICAgICAqL1xuICAgIEh0dHBDbGllbnQucHJvdG90eXBlLmNhY2hlZFJlcXVlc3QgPSBmdW5jdGlvbiAodXJsLCBtYXliZU9wdGlvbnMpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgdmFyIG9wdGlvbnMgPSBtYXliZU9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBydW4gPSBmdW5jdGlvbiAoY2IpIHtcbiAgICAgICAgICAgIHZhciBjYWNoZUtleSA9IG9wdGlvbnMuY2FjaGVLZXkgfHwgdXJsO1xuICAgICAgICAgICAgX3RoaXMuY2FjaGUuZ2V0KGNhY2hlS2V5LCBmdW5jdGlvbiAoY2FjaGVHZXRFcnJvciwgY2FjaGVHZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGlmIChjYWNoZUdldEVycm9yIHx8IGNhY2hlR2V0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2IoY2FjaGVHZXRFcnJvciwgY2FjaGVHZXRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXF1ZXN0KHVybCwgZnVuY3Rpb24gKGZldGNoRXJyb3IsIGZldGNoVmFsdWUsIF8sIHR0bFJlcSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZldGNoRXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihmZXRjaEVycm9yLCBudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0dGwgPSB0dGxSZXEgfHwgb3B0aW9ucy50dGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR0bCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZS5zZXQoY2FjaGVLZXksIGZldGNoVmFsdWUsIHR0bCwgY2IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBmZXRjaFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBydW4oZnVuY3Rpb24gKGVyciwgdmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEh0dHBDbGllbnQ7XG59KCkpO1xuXG5mdW5jdGlvbiBzZXBhcmF0b3IodXJsKSB7XG4gICAgcmV0dXJuIHVybC5pbmRleE9mKCc/JykgPiAtMSA/ICcmJyA6ICc/Jztcbn1cbnZhciBBcGkgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQXBpKHVybCwgb3B0aW9ucykge1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB0aGlzLnVybCA9IHVybDtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbikge1xuICAgICAgICAgICAgdmFyIGFjY2Vzc1Rva2VuUGFyYW0gPSBcImFjY2Vzc190b2tlbj1cIiArIHRoaXMub3B0aW9ucy5hY2Nlc3NUb2tlbjtcbiAgICAgICAgICAgIHRoaXMudXJsICs9IHNlcGFyYXRvcih1cmwpICsgYWNjZXNzVG9rZW5QYXJhbTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5vcHRpb25zLnJvdXRlcykge1xuICAgICAgICAgICAgdGhpcy51cmwgKz0gc2VwYXJhdG9yKHVybCkgKyAoXCJyb3V0ZXM9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkodGhpcy5vcHRpb25zLnJvdXRlcykpKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFwaURhdGFUVEwgPSB0aGlzLm9wdGlvbnMuYXBpRGF0YVRUTCB8fCA1O1xuICAgICAgICB0aGlzLmh0dHBDbGllbnQgPSBuZXcgSHR0cENsaWVudCh0aGlzLm9wdGlvbnMucmVxdWVzdEhhbmRsZXIsIHRoaXMub3B0aW9ucy5hcGlDYWNoZSwgdGhpcy5vcHRpb25zLnByb3h5QWdlbnQsIHRoaXMub3B0aW9ucy50aW1lb3V0SW5Ncyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEZldGNoZXMgZGF0YSB1c2VkIHRvIGNvbnN0cnVjdCB0aGUgYXBpIGNsaWVudCwgZnJvbSBjYWNoZSBpZiBpdCdzXG4gICAgICogcHJlc2VudCwgb3RoZXJ3aXNlIGZyb20gY2FsbGluZyB0aGUgcHJpc21pYyBhcGkgZW5kcG9pbnQgKHdoaWNoIGlzXG4gICAgICogdGhlbiBjYWNoZWQpLlxuICAgICAqL1xuICAgIEFwaS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKGNiKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBDbGllbnQuY2FjaGVkUmVxdWVzdCh0aGlzLnVybCwgeyB0dGw6IHRoaXMuYXBpRGF0YVRUTCB9KS50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICB2YXIgcmVzb2x2ZWRBcGkgPSBuZXcgUmVzb2x2ZWRBcGkoZGF0YSwgX3RoaXMuaHR0cENsaWVudCwgX3RoaXMub3B0aW9ucyk7XG4gICAgICAgICAgICBjYiAmJiBjYihudWxsLCByZXNvbHZlZEFwaSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZWRBcGk7XG4gICAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgY2IgJiYgY2IoZXJyb3IpO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgcmV0dXJuIEFwaTtcbn0oKSk7XG5cbnZhciBEZWZhdWx0Q2xpZW50ID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIERlZmF1bHRDbGllbnQodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuYXBpID0gbmV3IEFwaSh1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRBcGkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFwaS5nZXQoKTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmV2ZXJ5dGhpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmZvcm0oJ2V2ZXJ5dGhpbmcnKTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmZvcm0gPSBmdW5jdGlvbiAoZm9ybUlkKSB7XG4gICAgICAgIHJldHVybiBuZXcgTGF6eVNlYXJjaEZvcm0oZm9ybUlkLCB0aGlzLmFwaSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5xdWVyeSA9IGZ1bmN0aW9uIChxLCBvcHRpb25zT3JDYWxsYmFjaywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkucXVlcnkocSwgb3B0aW9uc09yQ2FsbGJhY2ssIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5xdWVyeUZpcnN0ID0gZnVuY3Rpb24gKHEsIG9wdGlvbnNPckNhbGxiYWNrLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5xdWVyeUZpcnN0KHEsIG9wdGlvbnNPckNhbGxiYWNrLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0QnlJRCA9IGZ1bmN0aW9uIChpZCwgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0QnlJRChpZCwgb3B0aW9ucywgY2IpOyB9KTtcbiAgICB9O1xuICAgIERlZmF1bHRDbGllbnQucHJvdG90eXBlLmdldEJ5SURzID0gZnVuY3Rpb24gKGlkcywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0QnlJRHMoaWRzLCBvcHRpb25zLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0QnlVSUQgPSBmdW5jdGlvbiAodHlwZSwgdWlkLCBvcHRpb25zLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5nZXRCeVVJRCh0eXBlLCB1aWQsIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRTaW5nbGUgPSBmdW5jdGlvbiAodHlwZSwgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0U2luZ2xlKHR5cGUsIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5nZXRCb29rbWFyayA9IGZ1bmN0aW9uIChib29rbWFyaywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7IHJldHVybiBhcGkuZ2V0Qm9va21hcmsoYm9va21hcmssIG9wdGlvbnMsIGNiKTsgfSk7XG4gICAgfTtcbiAgICBEZWZhdWx0Q2xpZW50LnByb3RvdHlwZS5wcmV2aWV3U2Vzc2lvbiA9IGZ1bmN0aW9uICh0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYikge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBcGkoKS50aGVuKGZ1bmN0aW9uIChhcGkpIHsgcmV0dXJuIGFwaS5wcmV2aWV3U2Vzc2lvbih0b2tlbiwgbGlua1Jlc29sdmVyLCBkZWZhdWx0VXJsLCBjYik7IH0pO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5wcm90b3R5cGUuZ2V0UHJldmlld1Jlc29sdmVyID0gZnVuY3Rpb24gKHRva2VuLCBkb2N1bWVudElkKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHZhciBnZXREb2NCeUlkID0gZnVuY3Rpb24gKGRvY3VtZW50SWQsIG1heWJlT3B0aW9ucykgeyByZXR1cm4gX3RoaXMuZ2V0QXBpKCkudGhlbihmdW5jdGlvbiAoYXBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpLmdldEJ5SUQoZG9jdW1lbnRJZCwgbWF5YmVPcHRpb25zKTtcbiAgICAgICAgfSk7IH07XG4gICAgICAgIHJldHVybiBjcmVhdGVQcmV2aWV3UmVzb2x2ZXIodG9rZW4sIGRvY3VtZW50SWQsIGdldERvY0J5SWQpO1xuICAgIH07XG4gICAgRGVmYXVsdENsaWVudC5nZXRBcGkgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBhcGkgPSBuZXcgQXBpKHVybCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBhcGkuZ2V0KCk7XG4gICAgfTtcbiAgICByZXR1cm4gRGVmYXVsdENsaWVudDtcbn0oKSk7XG5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi90eXBlcy9jcm9zcy1mZXRjaC5kLnRzXCIgLz5cbnZhciBpbmRleCA9IHtcbiAgICBleHBlcmltZW50Q29va2llOiBFWFBFUklNRU5UX0NPT0tJRSxcbiAgICBwcmV2aWV3Q29va2llOiBQUkVWSUVXX0NPT0tJRSxcbiAgICBQcmVkaWNhdGVzOiBQcmVkaWNhdGVzLFxuICAgIEV4cGVyaW1lbnRzOiBFeHBlcmltZW50cyxcbiAgICBBcGk6IEFwaSxcbiAgICBjbGllbnQ6IGNsaWVudCxcbiAgICBnZXRBcGk6IGdldEFwaSxcbiAgICBhcGk6IGFwaSxcbn07XG5mdW5jdGlvbiBjbGllbnQodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIG5ldyBEZWZhdWx0Q2xpZW50KHVybCwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBnZXRBcGkodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIERlZmF1bHRDbGllbnQuZ2V0QXBpKHVybCwgb3B0aW9ucyk7XG59XG5mdW5jdGlvbiBhcGkodXJsLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIGdldEFwaSh1cmwsIG9wdGlvbnMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXByaXNtaWMtamF2YXNjcmlwdC5tanMubWFwXG4iLCJpbXBvcnQgUmVhY3QsIHtDb21wb25lbnR9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG52YXIgUHJpc21pYyA9IHJlcXVpcmUoJ3ByaXNtaWMtamF2YXNjcmlwdCcpO1xuXG4vKipcbiAqIEV4YW1wbGVDb21wb25lbnQgaXMgYW4gZXhhbXBsZSBjb21wb25lbnQuXG4gKiBJdCB0YWtlcyBhIHByb3BlcnR5LCBgbGFiZWxgLCBhbmRcbiAqIGRpc3BsYXlzIGl0LlxuICogSXQgcmVuZGVycyBhbiBpbnB1dCB3aXRoIHRoZSBwcm9wZXJ0eSBgdmFsdWVgXG4gKiB3aGljaCBpcyBlZGl0YWJsZSBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJpc21pY0NvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgcmVuZGVyKCkge1xuICAgICAgICBjb25zdCB7aWQsIGxhYmVsLCBzZXRQcm9wcywgdmFsdWUsIGFwaUVuZHBvaW50fSA9IHRoaXMucHJvcHM7XG5cbiAgICAgICAgUHJpc21pYy5nZXRBcGkoYXBpRW5kcG9pbnQpLnRoZW4oZnVuY3Rpb24oYXBpKSB7XG4gICAgICAgIHJldHVybiBhcGkucXVlcnkoXCJcIik7IC8vIEFuIGVtcHR5IHF1ZXJ5IHdpbGwgcmV0dXJuIGFsbCB0aGUgZG9jdW1lbnRzXG4gICAgICAgIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudHM6IFwiLCByZXNwb25zZS5yZXN1bHRzKTtcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmc6IFwiLCBlcnIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdiBpZD17aWR9PlxuICAgICAgICAgICAgICAgIDxoMT5IZWxsbywgd29ybGQhPC9oMT5cbiAgICAgICAgICAgICAgICBFeGFtcGxlQ29tcG9uZW50OiB7bGFiZWx9Jm5ic3A7XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZX1cbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e1xuICAgICAgICAgICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIFNlbmQgdGhlIG5ldyB2YWx1ZSB0byB0aGUgcGFyZW50IGNvbXBvbmVudC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIHNldFByb3BzIGlzIGEgcHJvcCB0aGF0IGlzIGF1dG9tYXRpY2FsbHkgc3VwcGxpZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIGJ5IGRhc2gncyBmcm9udC1lbmQgKFwiZGFzaC1yZW5kZXJlclwiKS5cbiAgICAgICAgICAgICAgICAgICAgICAgICAqIEluIGEgRGFzaCBhcHAsIHRoaXMgd2lsbCB1cGRhdGUgdGhlIGNvbXBvbmVudCdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiBwcm9wcyBhbmQgc2VuZCB0aGUgZGF0YSBiYWNrIHRvIHRoZSBQeXRob24gRGFzaFxuICAgICAgICAgICAgICAgICAgICAgICAgICogYXBwIHNlcnZlciBpZiBhIGNhbGxiYWNrIHVzZXMgdGhlIG1vZGlmaWVkIHByb3AgYXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAqIElucHV0IG9yIFN0YXRlLlxuICAgICAgICAgICAgICAgICAgICAgICAgICovXG4gICAgICAgICAgICAgICAgICAgICAgICBlID0+IHNldFByb3BzKHsgdmFsdWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxufVxuXG5QcmlzbWljQ29tcG9uZW50LmRlZmF1bHRQcm9wcyA9IHt9O1xuXG5QcmlzbWljQ29tcG9uZW50LnByb3BUeXBlcyA9IHtcbiAgICAvKipcbiAgICAgKiBUaGUgSUQgdXNlZCB0byBpZGVudGlmeSB0aGlzIGNvbXBvbmVudCBpbiBEYXNoIGNhbGxiYWNrcy5cbiAgICAgKi9cbiAgICBpZDogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBVUkwgb2YgdGhlIFByaXNtaWMgQVBJLlxuICAgICAqL1xuICAgIGFwaUVuZHBvaW50OiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gICAgLyoqXG4gICAgICogQSBsYWJlbCB0aGF0IHdpbGwgYmUgcHJpbnRlZCB3aGVuIHRoaXMgY29tcG9uZW50IGlzIHJlbmRlcmVkLlxuICAgICAqL1xuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZGlzcGxheWVkIGluIHRoZSBpbnB1dC5cbiAgICAgKi9cbiAgICB2YWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIERhc2gtYXNzaWduZWQgY2FsbGJhY2sgdGhhdCBzaG91bGQgYmUgY2FsbGVkIHRvIHJlcG9ydCBwcm9wZXJ0eSBjaGFuZ2VzXG4gICAgICogdG8gRGFzaCwgdG8gbWFrZSB0aGVtIGF2YWlsYWJsZSBmb3IgY2FsbGJhY2tzLlxuICAgICAqL1xuICAgIHNldFByb3BzOiBQcm9wVHlwZXMuZnVuY1xufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnQgKi9cbmltcG9ydCBNeURhc2hDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL015RGFzaENvbXBvbmVudC5yZWFjdCc7XG5cbmltcG9ydCBCdWxtYUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvQnVsbWFCdXR0b24ucmVhY3QnO1xuXG5pbXBvcnQgQnVsbWFCb3ggZnJvbSAnLi9jb21wb25lbnRzL0J1bG1hQm94LnJlYWN0JztcblxuaW1wb3J0IFByaXNtaWNDb21wb25lbnQgZnJvbSAnLi9jb21wb25lbnRzL1ByaXNtaWNDb21wb25lbnQucmVhY3QnO1xuXG5cbmV4cG9ydCB7XG4gICAgTXlEYXNoQ29tcG9uZW50LCBCdWxtYUJ1dHRvbiwgQnVsbWFCb3gsIFByaXNtaWNDb21wb25lbnRcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9