SET check_function_bodies = false;
INSERT INTO public.users (id, name, email, "birthDate", address, created_at, updated_at) VALUES (2, 'Tuan Dung', 'dungnt@avadagroup.com', NULL, NULL, '2025-02-07 08:47:24.60369+00', '2025-02-07 08:47:24.60369+00');
INSERT INTO public.users (id, name, email, "birthDate", address, created_at, updated_at) VALUES (3, 'Thi Hien', 'hienxinh@gmail.com', NULL, 'Thai Bao', '2025-02-07 08:48:05.296169+00', '2025-02-07 08:48:05.296169+00');
INSERT INTO public.users (id, name, email, "birthDate", address, created_at, updated_at) VALUES (4, 'Tạ Tốn', 'volam@gmail.com', NULL, 'Ma Giáo', '2025-02-07 08:48:36.712069+00', '2025-02-07 08:48:36.712069+00');
SELECT pg_catalog.setval('public.users_id_seq', 4, true);
