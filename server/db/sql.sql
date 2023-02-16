CREATE DATABASE coco;

CREATE TABLE IF NOT EXISTS users_roles(
    role_id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (role_id)
);

INSERT INTO
    users_roles (type, description)
VALUES
    (
        'Contribuidor',
        'Persona que no pertece a ninguna empresa u organización del sector cocotero, sirve como comunicador y alerta sobre el estado de los cultivos.'
    ),
    (
        'Miembro',
        'Persona que forma parte de una empresa u organización del sector cocotero.'
    );

CREATE TABLE IF NOT EXISTS crop_status (
    crop_status_id INT NOT NULL AUTO_INCREMENT,
    type VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    PRIMARY KEY (crop_status_id)
);

INSERT INTO
    crop_status (type, description)
VALUES
    (
        'No afectada',
        'El cultivo no esta presentando afectaciones.'
    ),
    (
        'Escama roja',
        'La escama roja es un insecto de escamas blindadas y una plaga importante de los cítricos. Se cree que es originario del sur de China, pero ha sido ampliamente dispersado por la agencia del hombre a través del movimiento de material vegetal infectado.'
    ),
    (
        'Gualpa',
        'La Gualpa también conocido como picudo negro de las palmas, picudo americano de las palmas (PAP) y denominado regionalmente gualpa, es un insecto-plaga de importancia económica para los cultivos de palma de aceite y cocotero en América Latina y el Caribe.'
    );

CREATE TABLE IF NOT EXISTS users (
    user_id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    cellphone VARCHAR(20) NULL,
    role_id INT NOT NULL,
    password TEXT NOT NULL,
    PRIMARY KEY (user_id),
    CONSTRAINT fk_user_role_fk FOREIGN KEY(role_id) REFERENCES users_roles(role_id)
);

CREATE TABLE IF NOT EXISTS crop (
    crop_id INT NOT NULL AUTO_INCREMENT,
    latitude DOUBLE PRECISION NOT NULL,
    longitude DOUBLE PRECISION NOT NULL,
    crop_name VARCHAR(50),
    is_active BOOLEAN DEFAULT 1,
    manage_by INT NOT NULL,
    created_by INT NOT NULL,
    crop_status INT NOT NULL,
    PRIMARY KEY (crop_id),
    CONSTRAINT fk_manage_by_fk FOREIGN KEY(manage_by) REFERENCES users_roles(role_id),
    CONSTRAINT fk_created_by_fk FOREIGN KEY(created_by) REFERENCES users_roles(role_id),
    CONSTRAINT fk_crop_status_fk FOREIGN KEY(crop_status) REFERENCES crop_status(crop_status_id)
);