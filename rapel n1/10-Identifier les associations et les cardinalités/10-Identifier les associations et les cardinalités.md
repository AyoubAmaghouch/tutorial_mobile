# Projet Technique : Gestion de Automotive Marketplace

## Les Tables

- DEALER (principal)
- VEHICLE
- VEHICLE_TYPE

## The associations between DEALER, VEHICLE and VEHICLE_TYPE:

dealer -- ajoute -- vehicle
vehicle -- appartient -- vehicle_type

## cardinalités:

dealer -(0,N)- ajoute -(1,1)- vehicle

vehicle -(1,1)- appartient -(0,N)- vehicle_type

## MCD:

DEALER ─── (0,N) ─── AJOUTER ─── (1,1) ─── VEHICLE

VEHICLE ─── (1,1) ─── APPARTENIR ─── (0,N) ─── VEHICLE_TYPE

(ignore the format and type (varchar / uuid ...))