import com.wildernesswild.wildernesswild.repositories.RegionsRepository;
import com.wildernesswild.wildernesswild.repositories.ScenariosRepository;
import com.wildernesswild.wildernesswild.repositories.SkillsRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    private RegionsRepository regionsRepo;
    @Resource
    private ScenariosRepository scenariosRepo;
    @Resource
    private SkillsRepository skillsRepo;

    @Override
    public void run(String... args) throws Exception {
        /*Code goes in here*/
    }
}
