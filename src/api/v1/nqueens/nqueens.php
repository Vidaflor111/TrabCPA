<?php
session_start();
$n = isset($_GET['n']) ? (int) $_GET['n'] : 0;
$solucoes = [];

function colocaRainha($tabuleiro, $linha)
{
    global $solucoes;
    global $n;
    // Se colocamos todas as rainhas, armazenamos a solução
    if ($linha == $n) {
        $solucoes[] = $tabuleiro;
        return;
    }
    // Tentamos colocar uma rainha em cada coluna desta linha
    for ($coluna = 0; $coluna < $n; $coluna++) {
        // Verificamos se é seguro colocar a rainha nesta posição
        $seguro = true;
        for ($i = 0; $i < $linha; $i++) {
            if ($tabuleiro[$i] == $coluna || abs($tabuleiro[$i] - $coluna) == $linha - $i) {
                $seguro = false;
                break;
            }
        }
        if ($seguro) {
            // Colocamos a rainha e chamamos a função recursivamente para a próxima linha
            $tabuleiro[$linha] = $coluna;
            colocaRainha($tabuleiro, $linha + 1);
        }
    }
}

// Encontramos todas as soluções possíveis
colocaRainha([], 0);
echo "teste";

$_SESSION['solucoes'] = $solucoes;
header("Location: nqueens_solution.php?result=" . urlencode(serialize([])));
exit();
