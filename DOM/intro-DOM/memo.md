1. getElementByIdとgetElementsByClassNameの違いは何ですか？ * 
  id-ドキュメントから単一の要素/オブジェクトを返します。クラス名（タグ名）は、
 配列のようなオブジェクトを返します。
   id-検索するにはIDが必要、クラス名-検索するにはクラスが必要 
  document.getElementsByTagName（ "div"）

2.ドキュメントに一致するクラスの要素がない場合、 `.getElementsByClassName`は何を返しますか？
空の配列を返します


3.ドキュメントに一致するIDを持つ要素がない場合、 `.getElementById`は何を返しますか？
`null`