SELECT 
	c.cancao_nome AS cancao,
  COUNT(h.cancao_id) AS reproducoes
FROM SpotifyClone.cancoes AS c
INNER JOIN SpotifyClone.historico_reproducao AS h
ON c.cancao_id = h.cancao_id
GROUP BY c.cancao_nome ORDER BY COUNT(h.cancao_id) DESC, c.cancao_nome ASC
LIMIT 2;
