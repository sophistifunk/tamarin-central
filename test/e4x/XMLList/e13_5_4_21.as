/* -*- Mode: java; tab-width: 8; indent-tabs-mode: nil; c-basic-offset: 4 -*-
 *
 * The contents of this file are subject to the Netscape Public
 * License Version 1.1 (the "License"); you may not use this file
 * except in compliance with the License. You may obtain a copy of
 * the License at http://www.mozilla.org/NPL/
 *
 * Software distributed under the License is distributed on an "AS
 * IS" basis, WITHOUT WARRANTY OF ANY KIND, either express or
 * implied. See the License for the specific language governing
 * rights and limitations under the License.
 *
 * The Original Code is Rhino code, released
 * May 6, 1999.
 *
 * The Initial Developer of the Original Code is Netscape
 * Communications Corporation.  Portions created by Netscape are
 * Copyright (C) 1997-2000 Netscape Communications Corporation. All
 * Rights Reserved.
 *
 * Contributor(s):
 * Igor Bukanov
 * Ethan Hugg
 * Milen Nankov
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU Public License (the "GPL"), in which case the
 * provisions of the GPL are applicable instead of those above.
 * If you wish to allow use of your version of this file only
 * under the terms of the GPL and not to allow others to use your
 * version of this file under the NPL, indicate your decision by
 * deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL.  If you do not delete
 * the provisions above, a recipient may use your version of this
 * file under either the NPL or the GPL.
 */

START("13.5.4.21 - XMLList toXMLString()");

//TEST(1, true, XMLList.prototype.hasOwnProperty("toXMLString"));
    
x1 = <><alpha>one</alpha></>;

TEST(2, "<alpha>one</alpha>", x1.toXMLString());

x1 = <><alpha>one</alpha><bravo>two</bravo></>;

TEST(3, "<alpha>one</alpha>" + NL() + "<bravo>two</bravo>", x1.toXMLString());


var xmlDoc = "<employees><employee id=\"1\"><firstname>John</firstname><lastname>Walton</lastname><age>25</age></employee><employee id=\"2\"><firstname>Sue</firstname><lastname>Day</lastname><age>32</age></employee></employees>"


// propertyName as a string
XML.prettyPrinting = false;
AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[0].toXMLString()", 
	"<employee id=\"1\"><firstname>John</firstname><lastname>Walton</lastname><age>25</age></employee>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[0].toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[1].toXMLString()", 
	"<employee id=\"2\"><firstname>Sue</firstname><lastname>Day</lastname><age>32</age></employee>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[1].toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[0].firstname.toXMLString()", 
	"<firstname>John</firstname>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[0].firstname.toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[1].firstname.toXMLString()", 
	"<firstname>Sue</firstname>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[1].firstname.toXMLString()));

XML.prettyPrinting = true;
AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[0].toXMLString()", 
	"<employee id=\"1\">" + NL() + "  <firstname>John</firstname>" + NL() + "  <lastname>Walton</lastname>" + NL() + "  <age>25</age>" + NL() + "</employee>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[0].toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[1].toXMLString()", 
	"<employee id=\"2\">" + NL() + "  <firstname>Sue</firstname>" + NL() + "  <lastname>Day</lastname>" + NL() + "  <age>32</age>" + NL() + "</employee>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[1].toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[0].firstname.toXMLString()", 
	"<firstname>John</firstname>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[0].firstname.toXMLString()));

AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.employee[1].firstname.toXMLString()", 
	"<firstname>Sue</firstname>", 
    (MYXML = new XMLList(xmlDoc), MYXML.employee[1].firstname.toXMLString()));

xmlDoc = "<XML>foo</XML>";
AddTestCase( "MYXML = new XMLList(xmlDoc), MYXML.toXMLString()", 
	"<XML>foo</XML>", 
    (MYXML = new XMLList(xmlDoc), MYXML.toXMLString()));

END();
