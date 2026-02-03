// Configuración
const API_URL = 'http://localhost:8080/api/hello';

// Mostrar URL de la API al cargar
window.addEventListener('DOMContentLoaded', () => {
    document.getElementById('apiUrl').textContent = `API: ${API_URL}`;
});

// Función para llamar a la API
async function llamarAPI() {
    const resultadoDiv = document.getElementById('resultado');
    
    try {
        // Mostrar estado de carga
        resultadoDiv.className = 'result loading';
        resultadoDiv.innerHTML = '<div class="spinner"></div>';
        
        // Realizar la llamada a la API
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'cors'
        });

        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        const data = await response.text();
        
        // Mostrar resultado exitoso
        resultadoDiv.className = 'result success';
        resultadoDiv.innerHTML = `
            <div>
                <strong>✓ Respuesta exitosa:</strong><br>
                <span style="font-size: 20px; margin-top: 5px; display: block;">${data}</span>
            </div>
        `;
    } catch (error) {
        console.error('Error:', error);
        
        // Mostrar resultado con error
        resultadoDiv.className = 'result error';
        resultadoDiv.innerHTML = `
            <div>
                <strong>✗ Error al conectar:</strong><br>
                <span style="font-size: 12px; margin-top: 5px; display: block;">${error.message}</span>
                <span style="font-size: 11px; margin-top: 3px; display: block;">Asegúrate de que el servidor Spring Boot está ejecutándose en http://localhost:8080</span>
            </div>
        `;
    }
}
