import { createReader } from '@keystatic/core/reader';
import keystaticConfig from '../../keystatic.config';

// Lit le contenu directement depuis les fichiers du repo (JSON + .mdoc externalisés
// pour les champs richDoc). C'est la seule façon fiable de récupérer un champ
// fields.document(), car Keystatic stocke son contenu dans un fichier .mdoc séparé
// et non inline dans le JSON dès qu'une sauvegarde passe par le dashboard.
export const reader = createReader(process.cwd(), keystaticConfig);
