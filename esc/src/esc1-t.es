{
    import avmplus.*;
    var fname = System.argv[0];
    var str = File.read (fname);
    print ("compiling ", fname);
}

var topFixtures = [ [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Ast' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Ast' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Encode' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Encode' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Debug' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Debug' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Release' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Release' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Decode' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Decode' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Encode' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Encode' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Parse' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Parse' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Lex' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Lex' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Gen' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Gen' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Util' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Util' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Abc' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Abc' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Asm' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Asm' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'Emit' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'Emit' } } ]
                        , [ { 'ast_class': 'PropName'
                            , 'name': { 'ns': { 'ast_class': 'PublicNamespace'
                                              , 'name': '' }
                                      , 'id': 'AstEncode' } }
                          , { 'ast_class': 'NamespaceFixture'
                            , 'ns': { 'ast_class': 'AnonymousNamespace'
                                    , 'name': 'AstEncode' } } ]
                        ,  ];
{
    use namespace Parse;
    print ("parsing");
    var parser = initParser(str,topFixtures);
    var [ts,nd] = program();
}
{
    use namespace Encode;
    print ("encoding");
    var tx = "public var ast = "+program (nd);
    print ("writing");
    writeFile (tx,fname+".ast");
    print (fname+".ast, "+tx.length+" chars written");
}
