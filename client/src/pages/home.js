import  React from 'react';
import './home.css';


export default function Home(){
    return(
    
        <div class = "homenav">
            <h1>Waffle nEARby</h1>
        <div>
            <img src="../images/couples.png" alt="pic"/>
                <p>Our society has a drive towards 
                    fostering inclusivity and acceptance for individuals with disabilities.
                    Recognizing the significance of enabling comprehensive support systems, 
                    it becomes imperative to facilitate the necessary assistance for individuals
                    with disabilities, thereby fostering their active participation within
                    our society. By helping them get opportunities and resources
                    they require, we unlock their immense potential to emerge as trailblazing
                    pioneers, poised to shape and lead with innovation in the future.
                </p>
            <img src="../images/hands.png" alt="Hpic"/>
            
            <button>Find ways you can help</button>
            <button>Services Located Near You</button>
        </div>    
            <h2>About us:</h2>
                <img src="" alt="pic"/>
                <h3>Mission Statement</h3>
                <p> Our mission is to develop a map-based app helps Deaf-friendly establishments, 
                services, and attractions in a given area. Travelers can use this app
                to find sign language interpreters, Deaf-friendly accommodations, 
                restaurants with Deaf staff, and other accessible facilities.</p>

            <h2>Check out these videos!</h2>
                <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4"></source>
                </video>
            
                <video width="320" height="240" controls>
                <source src="movie.mp4" type="video/mp4"></source>
                </video>
            
            <h2>Resources:</h2>
                <img src="" alt="pic"/>
                <p><a href="https://www.dawnsign.com/">https://www.dawnsign.com/</a></p>
                 <p>DawnSignPress creates, develops, and publishes quality American Sign
                 Language (ASL) and Deaf culture-related videos and books. Dedicated 
                 to the principle that Deaf people are the natural experts regarding 
                 their language and culture, DawnSignPress wholeheartedly supports 
                 the efforts of Deaf people to document ASL, Deaf culture, history, 
                 heritage, and literature.
                 </p>
                
                <p>This  page provides a wide range of information for deaf and hard of hearing people, 
                    their families, and friends.  This page is also helpful for employers, businesses,
                    and government agencies who need to provide equal opportunity and equal access for 
                    deaf or hard of hearing people.  

                    Advocates can use this information to ensure equal access for deaf and hard of 
                    hearing people.  Lawyers can use this information to better represent their clients
                    who are deaf or hard of hearing.  All of this information may be shared to inform 
                    and educate others.
                </p>
                <img src="" alt="pic"/>
                <p><a href="https://www.nad.org/resources/">https://www.nad.org/resources/</a></p>
                <h3>Additional Resources</h3>
                <p><a href="https://www.cdc.gov/">CDC Resources Link </a></p>
                <p><a href="https://gladinc.org/">Greater Los Angeles on Deafness Link </a></p>
                <p><a href="https://www.asha.org/">American Speech-Language-Hearing Association </a></p>


        </div>

        
    )
}