SELECT 
	COUNT(h.cancao_id) AS quantidade_musicas_no_historico
FROM SpotifyClone.historico_reproducao AS h
INNER JOIN SpotifyClone.usuario AS u
ON h.usuario_id = u.usuario_id
AND
	u.usuario_nome = 'Barbara Liskov';
