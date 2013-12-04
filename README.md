jquery-resizable-columns
col-version
=======================
Version for work with single col's. (not grouped)
I know, it's don't very good, but sometime you can need that.

#### Dependencies
- jQuery
- [store.js](https://github.com/marcuswestin/store.js/) (or anything similar) for localStorage persistence.

#### Simple Usage

```
<table>
  <col width="30" /> 
  <col width="30" /> 
  <col width="30" /> 
  <col width="30" /> 
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>

<script>
  $(function(){
    $("table").resizableColumns();
  });
</script>
```

#### Persist column sizes

To save column sizes on page reload (or js re-rendering), just pass an object that responds to `get` and `set`. You'll also have to give your &lt;table&gt; a `data-resizable-columns-id` attribute, and your &lt;th&gt;s `data-resizable-column-id` attributes.
Data from <col> is initial data.

```
<script src="libs/jquery.js"></script>
<script src="libs/store.js"></script>
<script src="jquery.resizableColumns.js"></script>

<table data-resizable-columns-id="demo-table">
  <col width="30" /> 
  <col width="30" /> 
  <col width="30" /> 
  <col width="30" /> 
  <thead>
    <tr>
      <th data-resizable-column-id="#">#</th>
      <th data-resizable-column-id="first_name">First Name</th>
      <th data-resizable-column-id="last_name">Last Name</th>
      <th data-resizable-column-id="username">Username</th>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>

<script>
  $(function(){
    $("table").resizableColumns({
      store: store
    });
  });
</script>
```

#### License

MIT

#### Credits

There's various versions of this plugin floating around the internet, but they're all outdated in one way or another. Thanks to [http://robau.wordpress.com/2011/06/09/unobtrusive-table-column-resize-with-jquery/]() for a great starting point.
