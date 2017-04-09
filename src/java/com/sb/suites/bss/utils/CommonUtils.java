/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.sb.suites.bss.utils;

import com.sb.suites.entidades.usuarios.CatalogoEntidad;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import org.springframework.util.CollectionUtils;

/**
 *
 * @author LizethdlGarza
 */
public class CommonUtils {
    
    public static void sortCatalogoByName(List<CatalogoEntidad> unsorted) {
        
        if (!CollectionUtils.isEmpty(unsorted)) {
            
            Collections.sort(unsorted, new Comparator<CatalogoEntidad>() {

                @Override
                public int compare(CatalogoEntidad o1, CatalogoEntidad o2) {

                    if (o1 == null)
                        return -1;

                    if (o2 == null)
                        return 1;

                    String o1number = extractNumberPrefix(o1.getNombre());

                    String o2number = extractNumberPrefix(o2.getNombre());

                    if (o1number.isEmpty())
                        if (o2number.isEmpty())
                            return o1.getNombre().compareToIgnoreCase(o2.getNombre());
                        else return 1;

                    if (o2number.isEmpty())
                        return -1;

                    if (o1number.equals(o2number))
                        return o1.getNombre().compareToIgnoreCase(o2.getNombre());

                    return Integer.parseInt(o1number) - Integer.parseInt(o2number);
                }

                private String extractNumberPrefix(String o1) {

                    String result = "";
                    for (int i = 0; i < o1.length(); i++) {
                        try {
                            Integer.parseInt(o1.substring(i, i + 1));
                            result += o1.substring(i, i + 1);
                        } catch (Exception e) {
                            break;
                        }
                    }
                    return result;
                }
            });
        }
    }

}
