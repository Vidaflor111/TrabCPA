<!DOCTYPE html>
<html>

<head>
    <title>Soluções encontradas para o problema das N Rainhas</title>
    <link rel="stylesheet" type="text/css" href="stylesNqueens.css">
</head>

<body>
    <h1>Soluções encontradas:</h1>
    <?php
    session_start();
    $solucoes = $_SESSION['solucoes'];
    if (!empty($solucoes)) {
        foreach ($solucoes as $tabuleiro) {
            echo "<div class='solucao'>";
            echo "<div class='tabuleiro' style='width: " . count($tabuleiro) * 50 . "px'>";

            // variável para controlar a cor do quadrado
            $cor = true;

            for ($i = 0; $i < count($tabuleiro); $i++) {
                for ($j = 0; $j < count($tabuleiro); $j++) {
                    if ($tabuleiro[$i] == $j) {
                        if ($cor) {
                            echo "<img src='https://cdn-icons-png.flaticon.com/512/658/658098.png' class='preto'>";
                        } else {
                            echo "<img src='https://cdn-icons-png.flaticon.com/512/658/658098.png' class='branco'>";
                        }
                    } else {
                        if ($cor) {
                            echo "<img src='https://cdn-icons-png.flaticon.com/512/5552/5552524.png' class='preto'>";
                        } else {
                            echo "<img src='https://cdn-icons-png.flaticon.com/512/5552/5552524.png' class='branco'>";
                        }
                    }
                    // alterna a cor do quadrado
                    $cor = !$cor;
                }
                // ao final de cada linha, inverte a cor do primeiro quadrado
                $cor = !$cor;
            }

            echo "</div>";
            echo "</div>";
            echo "<br>";
        }
    } else {
        echo "<p class='error'>Nenhuma solução encontrada para o valor de n fornecido.</p>";
    }
    ?>
</body>

</html>