import './autocomplete.css';
import React, { useState, useCallback } from 'react';

interface Option {
  id: number;
  value: string;
}

interface AutoCompleteProps {
  options: Option[];
}
interface stateProps {
  text: string
  suggestions: Option[];
}

const AutoComplete: React.FC<AutoCompleteProps> = ({ options }) => {
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<stateProps>({
    text: "",
    suggestions: []
  });

  

  const filterData = useCallback(async (query: string): Promise<Option[]> => {
    return new Promise((resolve) => {
      const filtered = options.filter((option) =>
        option.value.toLowerCase().includes(query.toLowerCase())
      );
      resolve(filtered);
    });
  },[options]);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(false);
    const value = event.target.value;
    let suggestions:Option[] = [];
    if (value.length > 0) {
      suggestions = await filterData(value);
    }
    setSearch({ suggestions, text: value });
  };

  const handleSelectOption = (option: Option) => {
    setLoading(true)
    setSearch({ suggestions, text: option.value });
    
  };
const {suggestions} = search;

  return (
    <div className="autocomplete" >
      <input
        type="text"
        value={search.text}
        onChange={handleChange}
        placeholder="Type something..."

      />
      {!loading && suggestions.length > 0 && (
        <ul>
          {suggestions.map((option) => (
            <li key={option.id} onClick={() => handleSelectOption(option)} className='text-left'>
              {option.value.includes(search.text) ? (
                <>
                  <span>
                    {option.value.substring(
                      0,
                      option.value.toLowerCase().indexOf(search.text.toLowerCase())
                    )}
                  </span>
                  <span className="highlight">
                    {option.value.substring(
                      option.value.toLowerCase().indexOf(search.text.toLowerCase()),
                      option.value.toLowerCase().indexOf(search.text.toLowerCase()) +
                      search.text.length 
                    )}
                  </span>
                  <span>
                    {option.value.substring(
                      option.value.toLowerCase().indexOf(search.text.toLowerCase()) +
                      search.text.length
                    )}
                  </span>
                </>
              ) : (
                option.value
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};


export default AutoComplete;
