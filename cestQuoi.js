
function cestQuoi() {


document.getElementById("cestQuoi").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("cestQuoi").innerHTML = "OULIPO?";
    document.getElementById("cestQuoi").onclick = function() {myFunction2()};
    function myFunction2() {
        document.getElementById("cestQuoi").innerHTML = "Qu’est ceci?";
        document.getElementById("cestQuoi").onclick = function() {myFunction3()};
        function myFunction3() {
            document.getElementById("cestQuoi").innerHTML = "Qu’est cela?";
            document.getElementById("cestQuoi").onclick = function() {myFunction4()};
            function myFunction4() {
                document.getElementById("cestQuoi").innerHTML = "Qu’est-ce que OU?";
                document.getElementById("cestQuoi").onclick = function() {myFunction5()};
                function myFunction5() {
                    document.getElementById("cestQuoi").innerHTML = "Qu’est-ce que LI?";
                    document.getElementById("cestQuoi").onclick = function() {myFunction6()};
                    function myFunction6() {
                        document.getElementById("cestQuoi").innerHTML = "Qu’est-ce que PO?";
                        document.getElementById("cestQuoi").onclick = function() {myFunction7()};
                        function myFunction7() {
                            document.getElementById("cestQuoi").innerHTML = "OU c’est OUVROIR, un atelier. Pour fabriquer quoi ? De la LI.";
                            document.getElementById("cestQuoi").onclick = function() {myFunction8()};
                            function myFunction8() {
                                document.getElementById("cestQuoi").innerHTML = "LI c’est la littérature, ce qu’on lit et ce qu’on rature. Quelle sorte de LI ? La LIPO.";
                                document.getElementById("cestQuoi").onclick = function() {myFunction9()};
                                function myFunction9() {
                                    document.getElementById("cestQuoi").innerHTML = "PO signifie potentiel. De la littérature en quantité illimitée, potentiellement productible jusqu’à la fin des temps, en quantités énormes, infinies pour toutes fins pratiques.";
                                    document.getElementById("cestQuoi").onclick = function() {myFunction10()};
                                    function myFunction10() {
                                        document.getElementById("cestQuoi").innerHTML = "en savoir plus";
                                        document.getElementById("cestQuoi").onclick = function() {window.open("http://www.oulipo.net/fr/une", "_blank");};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

function whatIs() {

document.getElementById("cestQuoi").onclick = function() {myFunction()};

function myFunction() {
    document.getElementById("cestQuoi").innerHTML = "OULIPO?";
    document.getElementById("cestQuoi").onclick = function() {myFunction2()};
    function myFunction2() {
        document.getElementById("cestQuoi").innerHTML = "What is this?";
        document.getElementById("cestQuoi").onclick = function() {myFunction3()};
        function myFunction3() {
            document.getElementById("cestQuoi").innerHTML = "What is that?";
            document.getElementById("cestQuoi").onclick = function() {myFunction4()};
            function myFunction4() {
                document.getElementById("cestQuoi").innerHTML = "What is OU?";
                document.getElementById("cestQuoi").onclick = function() {myFunction5()};
                function myFunction5() {
                    document.getElementById("cestQuoi").innerHTML = "What is LI?";
                    document.getElementById("cestQuoi").onclick = function() {myFunction6()};
                    function myFunction6() {
                        document.getElementById("cestQuoi").innerHTML = "What is PO?";
                        document.getElementById("cestQuoi").onclick = function() {myFunction7()};
                            function myFunction7() {
                                document.getElementById("cestQuoi").innerHTML = "OU is a workroom, a workshop. To manufacture what? The LI.";
                                document.getElementById("cestQuoi").onclick = function() {myFunction8()};
                                function myFunction8() {
                                    document.getElementById("cestQuoi").innerHTML = "LI is literature, what we read and what we erase. What kind of LI? LIPO.";
                                    document.getElementById("cestQuoi").onclick = function() {myFunction9()};
                                    function myFunction9() {
                                        document.getElementById("cestQuoi").innerHTML = "PO means potential. Literature in unlimited quantity, potentially producible until the end of time, in huge quantities, infinite for all practical purposes.";
                                        document.getElementById("cestQuoi").onclick = function() {myFunction10()};
                                        function myFunction10() {
                                            document.getElementById("cestQuoi").innerHTML = "learn more";
                                            document.getElementById("cestQuoi").onclick = function() {window.open("http://www.oulipo.net/fr/une", "_blank");};
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}


/*

Savoir en plus: http://www.oulipo.net/fr/une
{location.href = "http://www.oulipo.net/fr/une", target="_blank";}

 document.getElementById("myButton").onclick = function () {
        location.href = "www.yoursite.com";

OULIPO ? Qu’est ceci ? Qu’est cela ?

Qu’est-ce que OU ?  Qu’est-ce que LI ? Qu’est-ce que PO ?

OU c’est OUVROIR, un atelier. Pour fabriquer quoi ? De la LI.
LI c’est la littérature, ce qu’on lit et ce qu’on rature. Quelle sorte de LI ? La LIPO.
PO signifie potentiel. De la littérature en quantité illimitée, potentiellement productible jusqu’à la fin des temps, en quantités énormes, infinies pour toutes fins pratiques.


}



Learn more: http://www.oulipo.net/fr/une


    document.getElementById('cestQuoi').innerHTML = "hi";
   document.getElementById("cestQuoi").innerHTML = "YOU CLICKED ME!";
OULIPO? What is this? What is that?

What is OU? What is LI? What is PO?

OU is a workroom, a a workshop. To manufacture what? From the LI.
LI is literature, what we read and what we erase. What kind of LI? The LIPO.
PO means potential. Literature in unlimited quantity, potentially producible until the end of time, in huge quantities, infinite for all practical purposes.



}
*/