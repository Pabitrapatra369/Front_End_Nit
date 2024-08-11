try {
  Document.write("msg from try<br>");
} catch (err) {
  document.write("msg from catch<br>");
  console.log(err.name);
  console.log(err.message);
} finally {
  document.write("msg from finally<br>");
}
