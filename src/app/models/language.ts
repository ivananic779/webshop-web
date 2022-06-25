import { SelectItem } from "primeng/api";

export class Language {
    id: number;
    name: string;
    country?: string;

    public static makeSelectItem(languages: Language[]): SelectItem[] {
        const result: SelectItem[] = [];

        languages.forEach(language => {
               result.push({
                    label: language.name,
                    value: language.id,
                });            
        });

        return result;
    }
}