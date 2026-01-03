create sequence if not exists todos_id_seq
    start with 1
    increment by 1
    cache 1;

create table todos(
    id bigint primary key default nextval('todos_id_seq'),
    title varchar(255) not null,
    body text default '' not null,
    completed boolean default false not null,
    created_at timestamp default (current_timestamp) not null,
    updated_at timestamp default (current_timestamp) not null
);