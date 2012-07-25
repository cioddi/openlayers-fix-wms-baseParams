goog.require('goog.testing.jsunit');
goog.require('ol.TileCoord');


function testCreateFromQuadKey() {
  var tileCoord = ol.TileCoord.createFromQuadKey('213');
  assertEquals(3, tileCoord.z);
  assertEquals(3, tileCoord.x);
  assertEquals(5, tileCoord.y);
}


function testConstructorOrderZXY() {
  var tc1 = new ol.TileCoord(1, 2, 3);
  assertEquals(1, tc1.z);
  assertEquals(2, tc1.x);
  assertEquals(3, tc1.y);
}


function testHashX() {
  var tc1 = new ol.TileCoord(3, 2, 1);
  var tc2 = new ol.TileCoord(3, 1, 1);
  assertTrue(tc1.hash() != tc2.hash());
}


function testFromString() {
  var str = '1/2/3';
  var tc = ol.TileCoord.fromString(str);
  assertEquals(1, tc.z);
  assertEquals(2, tc.x);
  assertEquals(3, tc.y);
}


function testToQuadKey() {
  assertEquals('213', (new ol.TileCoord(3, 3, 5)).toQuadKey());
}
