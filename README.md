
#### Brotli constants[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_brotli_constants)

Added in: v11.7.0, v10.16.0

There are several options and other constants available for Brotli-based streams:

##### Flush operations[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_flush_operations)

The following values are valid flush operations for Brotli-based streams:

-   `zlib.constants.BROTLI_OPERATION_PROCESS` (default for all operations)
-   `zlib.constants.BROTLI_OPERATION_FLUSH` (default when calling `.flush()`)
-   `zlib.constants.BROTLI_OPERATION_FINISH` (default for the last chunk)
-   `zlib.constants.BROTLI_OPERATION_EMIT_METADATA`
    -   This particular operation may be hard to use in a Node.js context, as the streaming layer makes it hard to know which data will end up in this frame. Also, there is currently no way to consume this data through the Node.js API.

##### Compressor options[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_compressor_options)

There are several options that can be set on Brotli encoders, affecting compression efficiency and speed. Both the keys and the values can be accessed as properties of the `zlib.constants` object.

The most important options are:

-   `BROTLI_PARAM_MODE`
    -   `BROTLI_MODE_GENERIC` (default)
    -   `BROTLI_MODE_TEXT`, adjusted for UTF-8 text
    -   `BROTLI_MODE_FONT`, adjusted for WOFF 2.0 fonts
-   `BROTLI_PARAM_QUALITY`
    -   Ranges from `BROTLI_MIN_QUALITY` to `BROTLI_MAX_QUALITY`, with a default of `BROTLI_DEFAULT_QUALITY`.
-   `BROTLI_PARAM_SIZE_HINT`
    -   Integer value representing the expected input size; defaults to `0` for an unknown input size.

The following flags can be set for advanced control over the compression algorithm and memory usage tuning:

-   `BROTLI_PARAM_LGWIN`
    -   Ranges from `BROTLI_MIN_WINDOW_BITS` to `BROTLI_MAX_WINDOW_BITS`, with a default of `BROTLI_DEFAULT_WINDOW`, or up to `BROTLI_LARGE_MAX_WINDOW_BITS` if the `BROTLI_PARAM_LARGE_WINDOW` flag is set.
-   `BROTLI_PARAM_LGBLOCK`
    -   Ranges from `BROTLI_MIN_INPUT_BLOCK_BITS` to `BROTLI_MAX_INPUT_BLOCK_BITS`.
-   `BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING`
    -   Boolean flag that decreases compression ratio in favour of decompression speed.
-   `BROTLI_PARAM_LARGE_WINDOW`
    -   Boolean flag enabling “Large Window Brotli” mode (not compatible with the Brotli format as standardized in [RFC 7932](https://www.rfc-editor.org/rfc/rfc7932.txt)).
-   `BROTLI_PARAM_NPOSTFIX`
    -   Ranges from `0` to `BROTLI_MAX_NPOSTFIX`.
-   `BROTLI_PARAM_NDIRECT`
    -   Ranges from `0` to `15 << NPOSTFIX` in steps of `1 << NPOSTFIX`.

##### Decompressor options[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_decompressor_options)

These advanced options are available for controlling decompression:

-   `BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION`
    -   Boolean flag that affects internal memory allocation patterns.
-   `BROTLI_DECODER_PARAM_LARGE_WINDOW`
    -   Boolean flag enabling “Large Window Brotli” mode (not compatible with the Brotli format as standardized in [RFC 7932](https://www.rfc-editor.org/rfc/rfc7932.txt)).

### Class: `Options`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_options)

Each zlib-based class takes an `options` object. No options are required.

Some options are only relevant when compressing and are ignored by the decompression classes.

-   `flush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `zlib.constants.Z_NO_FLUSH`
-   `finishFlush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `zlib.constants.Z_FINISH`
-   `chunkSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `16 * 1024`
-   `windowBits` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type)
-   `level` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) (compression only)
-   `memLevel` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) (compression only)
-   `strategy` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) (compression only)
-   `dictionary` [<Buffer>](https://nodejs.org/dist/latest-v15.x/docs/api/buffer.html#buffer_class_buffer) | [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) | [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) | [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (deflate/inflate only, empty dictionary by default)
-   `info` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type) (If `true`, returns an object with `buffer` and `engine`.)
-   `maxOutputLength` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Limits output size when using [convenience methods](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_convenience_methods). **Default:** [`buffer.kMaxLength`](https://nodejs.org/dist/latest-v15.x/docs/api/buffer.html#buffer_buffer_kmaxlength)

See the [`deflateInit2` and `inflateInit2`](https://zlib.net/manual.html#Advanced) documentation for more information.

### Class: `BrotliOptions`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_brotlioptions)

Each Brotli-based class takes an `options` object. All options are optional.

-   `flush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `zlib.constants.BROTLI_OPERATION_PROCESS`
-   `finishFlush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `zlib.constants.BROTLI_OPERATION_FINISH`
-   `chunkSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) **Default:** `16 * 1024`
-   `params` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Key-value object containing indexed [Brotli parameters](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_brotli_constants).
-   `maxOutputLength` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type) Limits output size when using [convenience methods](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_convenience_methods). **Default:** [`buffer.kMaxLength`](https://nodejs.org/dist/latest-v15.x/docs/api/buffer.html#buffer_buffer_kmaxlength)

For example:

```
const stream = zlib.createBrotliCompress({
  chunkSize: 32 * 1024,
  params: {
    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
    [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
    [zlib.constants.BROTLI_PARAM_SIZE_HINT]: fs.statSync(inputFile).size
  }
});
```

### Class: `zlib.BrotliCompress`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_brotlicompress)

Added in: v11.7.0, v10.16.0

Compress data using the Brotli algorithm.

### Class: `zlib.BrotliDecompress`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_brotlidecompress)

Added in: v11.7.0, v10.16.0

Decompress data using the Brotli algorithm.

### Class: `zlib.Deflate`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_deflate)

Added in: v0.5.8

Compress data using deflate.

### Class: `zlib.DeflateRaw`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_deflateraw)

Added in: v0.5.8

Compress data using deflate, and do not append a `zlib` header.

### Class: `zlib.Gunzip`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_gunzip)

Decompress a gzip stream.

### Class: `zlib.Gzip`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_gzip)

Added in: v0.5.8

Compress data using gzip.

### Class: `zlib.Inflate`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_inflate)

Decompress a deflate stream.

### Class: `zlib.InflateRaw`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_inflateraw)

Decompress a raw deflate stream.

### Class: `zlib.Unzip`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_unzip)

Added in: v0.5.8

Decompress either a Gzip- or Deflate-compressed stream by auto-detecting the header.

### Class: `zlib.ZlibBase`[#](https://nodejs.org/dist/latest-v15.x/docs/api/zlib.html#zlib_class_zlib_zlibbase)

Not exported by the `zlib` module. It is documented here because it is the base class of the compressor/decompressor classes.

This class inherits from [`stream.Transform`](https://nodejs.org/dist/latest-v15.x/docs/api/stream.html#stream_class_stream_transform), allowing `zlib` objects to be used in pipes and similar stream operations.
