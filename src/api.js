import axios from 'axios';

const apiUtilisateur = axios.create({
  baseURL: 'http://localhost:5000/Utilisateur', // L'URL correcte pour les requêtes concernant les utilisateurs
});

const apiAssistant = axios.create({
  baseURL: 'http://localhost:5000/assistant', // L'URL correcte pour les requêtes concernant les assistants
});

// ...

export const ajouterAssistant = async (assistantData) => {
  try {
    assistantData.typeUtilisateur = 'assistant'; // Ajoutez cette ligne pour inclure le typeUtilisateur
    const response = await apiAssistant.post('/', assistantData); // Utilisez l'URL de base pour les assistants
    return response.data;
  } catch (error) {
    console.error('Erreur lors de l\'ajout de l\'assistant:', error);
    throw error;
  }
};

export default {
  apiUtilisateur,
  apiAssistant,
};