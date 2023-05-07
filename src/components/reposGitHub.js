import { useEffect, useState } from "react";

export function ReposGitHub() {
    const apiGitHub = 'https://api.github.com/users/TetianaOstashko/repos';
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        fetch(apiGitHub)
        .then(response => response.json())
        .then(data => setRepos(data))
        .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h2>GitHub Projects</h2>
            <hr />
            {repos.length > 0 ? (
                <ul>
                    {repos.map(repo => (
                        <li className="repository" key={repo.id}>
                            <a href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer">
                            {repo.name}</a>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Sorry, there're no repositories.</p>
            )}
        </div>
    );
}