SELECT 
	c.cancao_nome AS nome,
	COUNT(h.cancao_id) AS reproducoes
FROM SpotifyClone.historico_reproducao AS h
INNER JOIN SpotifyClone.cancoes AS c
ON h.cancao_id = c.cancao_id
INNER JOIN SpotifyClone.usuario AS u
ON u.usuario_id = h.usuario_id
INNER JOIN SpotifyClone.planos AS p
ON p.plano_id = u.plano_id
WHERE
	p.plano_nome = 'gratuito' OR p.plano_nome = 'pessoal'
GROUP BY
	c.cancao_nome
ORDER BY c.cancao_nome ASC;
